/* eslint-disable camelcase */
import 'dotenv/config';

import { S3, Upload } from '@/config/s3';
import { TTotalCssPropertyObj, TWorkspace } from '@/types/workspaceType';

import { Workspace } from '@/models/workspaceModel';
import { generateCssList } from '@/services/utils/generateCssList';
import { generateTotalCssPropertyObj } from '@/services/utils/generateTotalCssPropertyObj';
import sharp from 'sharp';

export const WorkspaceService = () => {
  const createWorkspace = async (userId: string) => {
    const newWorkspaceId = crypto.randomUUID();
    const workspace = new Workspace({ user_id: userId, workspace_id: newWorkspaceId });
    await workspace.save();
    return newWorkspaceId;
  };

  const createSampleWorkspace = async (userId: string) => {
    const sampleWorkspace = await Workspace.findOne({ workspace_id: 'sample' });

    if (!sampleWorkspace) {
      throw new Error('Sample workspace가 존재하지 않습니다.');
    }

    const newWorkspaceId = crypto.randomUUID();

    try {
      const sampleThumbnailResponse = await fetch(sampleWorkspace.thumbnail!);
      const imageBuffer = Buffer.from(await sampleThumbnailResponse.arrayBuffer());
      const thumbnailUrl = await uploadThumbnailImage(userId, newWorkspaceId, imageBuffer);

      const clonedWorkspaceData = {
        workspace_id: newWorkspaceId,
        user_id: userId,
        name: sampleWorkspace.name,
        canvas: sampleWorkspace.canvas,
        css_list: sampleWorkspace.css_list,
        class_block_list: sampleWorkspace.class_block_list,
        is_css_reset: sampleWorkspace.is_css_reset,
        thumbnail: thumbnailUrl,
        updated_at: new Date(),
      };

      const clonedWorkspace = new Workspace(clonedWorkspaceData);
      await clonedWorkspace.save();

      return newWorkspaceId;
    } catch (error) {
      console.error('Error while cloning workspace:', error);
      throw new Error('워크스페이스 복제 중 오류가 발생했습니다.');
    }
  };

  const findWorkspaceListByPage = async (
    userId: string,
    cursor: { updatedAt: string; workspaceId: string } | null
  ) => {
    const query: {
      user_id: string;
      $or?: Array<
        { updated_at: { $lt: string } } | { updated_at: string; workspace_id: { $gt: string } }
      >;
    } = { user_id: userId };
    if (cursor) {
      query.$or = [
        { updated_at: { $lt: cursor.updatedAt } },
        { updated_at: cursor.updatedAt, workspace_id: { $gt: cursor.workspaceId } },
      ];
    }
    const workspaceList = await Workspace.find(query)
      .sort({ updated_at: -1, workspace_id: 1 })
      .limit(20);
    let nextCursor = null;
    if (workspaceList.length === 20) {
      nextCursor = {
        updatedAt: workspaceList[19].updated_at,
        workspaceId: workspaceList[19].workspace_id,
      };
    }
    return {
      workspaceList,
      nextCursor,
    };
  };

  const findWorkspaceByWorkspaceId = async (userId: string, workspaceId: string) => {
    const workspace = await Workspace.findOne(
      {
        user_id: userId,
        workspace_id: workspaceId,
      },
      { _id: 0 }
    );
    if (!workspace) {
      return workspace;
    }
    const totalCssPropertyObj = generateTotalCssPropertyObj(workspace as TWorkspace);
    return {
      workspace_id: workspace.workspace_id,
      name: workspace.name,
      isCssReset: workspace.is_css_reset,
      totalCssPropertyObj,
      canvas: workspace.canvas,
      classBlockList: workspace.class_block_list,
    };
  };

  const updateWorkspaceName = async (userId: string, workspaceId: string, newName: string) => {
    const updatedWorkspace = await Workspace.findOneAndUpdate(
      { user_id: userId, workspace_id: workspaceId },
      { name: newName, updated_at: Date.now() },
      { new: true }
    );
    if (!updatedWorkspace) {
      return updatedWorkspace;
    }

    const totalCssPropertyObj = generateTotalCssPropertyObj(updatedWorkspace as TWorkspace);
    return {
      name: updatedWorkspace.name,
      workspaceId: updatedWorkspace.workspace_id,
      isCssReset: updatedWorkspace.is_css_reset,
      totalCssPropertyObj,
      canvas: updatedWorkspace.canvas,
      userId: updatedWorkspace.user_id,
      updatedAt: updatedWorkspace.updated_at,
      thumbnail: updatedWorkspace.thumbnail,
    };
  };

  const deleteWorkspace = async (userId: string, workspaceId: string) => {
    const deletedWorkspace = await Workspace.findOneAndDelete({
      user_id: userId,
      workspace_id: workspaceId,
    }).exec();
    return deletedWorkspace;
  };

  const saveWorkspace = async (
    userId: string,
    workspaceId: string,
    totalCssPropertyObj: string,
    canvas: string,
    classBlockList: string,
    cssResetStatus: string,
    // eslint-disable-next-line no-undef
    thumbnail: Express.Multer.File
  ) => {
    const session = await Workspace.startSession();
    session.startTransaction();
    try {
      const webpThumbnail = await sharp(thumbnail.buffer)
        .resize({
          width: 528,
          height: 360,
          fit: 'inside',
          background: { r: 255, g: 255, b: 255, alpha: 1 },
        })
        .webp()
        .toBuffer();
      const upload = new Upload({
        client: S3,
        params: {
          Bucket: process.env.S3_BUCKET_NAME,
          Key: `thumbnail/${userId}/${workspaceId}.webp`,
          ACL: 'public-read',
          Body: webpThumbnail,
          ContentType: 'image/webp',
        },
      });
      const uploadResult = await upload.done();
      if (!uploadResult) {
        throw new Error('Failed to upload thumbnail');
      }
      const updatedWorkspace = await Workspace.findOneAndUpdate(
        {
          user_id: userId,
          workspace_id: workspaceId,
        },
        {
          $set: {
            css_list: generateCssList(JSON.parse(totalCssPropertyObj) as TTotalCssPropertyObj),
            canvas,
            class_block_list: classBlockList,
            is_css_reset: cssResetStatus === 'true',
            updated_at: Date.now(),
            thumbnail: uploadResult.Location,
          },
        },
        { new: true }
      );
      if (!updatedWorkspace) {
        throw new Error('Failed to update workspace');
      }
      await session.commitTransaction();

      return { uploadResult, updatedWorkspace };
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  };

  const uploadThumbnailImage = async (
    userId: string,
    workspaceId: string,
    imageBuffer: Buffer
  ): Promise<string> => {
    // 이미지 리사이징 및 webp 변환
    const webpThumbnail = await sharp(imageBuffer)
      .resize({
        width: 528,
        height: 360,
        fit: 'inside',
        background: { r: 255, g: 255, b: 255, alpha: 1 },
      })
      .webp()
      .toBuffer();

    // S3 업로드
    const upload = new Upload({
      client: S3,
      params: {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `thumbnail/${userId}/${workspaceId}.webp`,
        ACL: 'public-read',
        Body: webpThumbnail,
        ContentType: 'image/webp',
      },
    });

    const uploadResult = await upload.done();
    if (!uploadResult) {
      throw new Error('Failed to upload thumbnail');
    }

    return uploadResult.Location as string;
  };

  return {
    createWorkspace,
    createSampleWorkspace,
    findWorkspaceListByPage,
    findWorkspaceByWorkspaceId,
    updateWorkspaceName,
    deleteWorkspace,
    saveWorkspace,
  };
};
