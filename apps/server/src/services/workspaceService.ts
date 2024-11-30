import { TCssList, TTotalCssPropertyObj, TWorkspace } from '@/types/workspaceType';

import { Workspace } from '@/models/workspaceModel';
import { generateCssList } from '@/services/utils/generateCssList';
import { generateTotalCssPropertyObj } from '@/services/utils/generateTotalCssPropertyObj';
import { S3, Upload } from '@/config/s3';
import 'dotenv/config';
import { Readable } from 'stream';

/* eslint-disable */
export const WorkspaceService = () => {
  const createWorkspace = async (userId: string) => {
    const newWorkspaceId = crypto.randomUUID();
    const workspace = new Workspace({ user_id: userId, workspace_id: newWorkspaceId });
    await workspace.save();
    return newWorkspaceId;
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

  const saveWorkspaceCssProperty = async (
    userId: string,
    workspaceId: string,
    totalCssPropertyObj: TTotalCssPropertyObj
  ) => {
    const cssList: TCssList = generateCssList(totalCssPropertyObj);
    const updatedWorkspace = await Workspace.findOneAndUpdate(
      {
        user_id: userId,
        workspace_id: workspaceId,
      },
      {
        $set: {
          css_list: cssList,
          updated_at: Date.now(),
        },
      }
    );
    return updatedWorkspace;
  };

  const saveWorkspaceCanvas = async (userId: string, workspaceId: string, canvas: any) => {
    const updatedWorkspace = await Workspace.findOneAndUpdate(
      {
        user_id: userId,
        workspace_id: workspaceId,
      },
      {
        $set: {
          canvas,
          updated_at: Date.now(),
        },
      },
      {
        new: true,
      }
    );
    return updatedWorkspace;
  };

  const saveWorkspaceClassBlockList = async (
    userId: string,
    workspaceId: string,
    classBlockList: string
  ) => {
    const updatedWorkspace = await Workspace.findOneAndUpdate(
      {
        user_id: userId,
        workspace_id: workspaceId,
      },
      {
        $set: {
          class_block_list: classBlockList,
          updated_at: Date.now(),
        },
      },
      {
        new: true,
      }
    );
    return updatedWorkspace;
  };

  const saveWorkspaceCssResetStatus = async (
    userId: string,
    workspaceId: string,
    cssResetStatus: boolean
  ) => {
    const updatedWorkspace = await Workspace.findOneAndUpdate(
      {
        user_id: userId,
        workspace_id: workspaceId,
      },
      {
        $set: {
          is_css_reset: cssResetStatus,
          updated_at: Date.now(),
        },
      },
      {
        new: true,
      }
    );
    return updatedWorkspace;
  };

  const saveWorkspace = async (
    userId: string,
    workspaceId: string,
    totalCssPropertyObj: TTotalCssPropertyObj,
    canvas: string,
    classBlockList: string,
    cssResetStatus: boolean,
    thumbnail: Express.Multer.File
  ) => {
    const upload = new Upload({
      client: S3,
      params: {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `thumbnail/${userId}/${workspaceId}.png`,
        ACL: 'public-read',
        Body: thumbnail.buffer,
        ContentType: thumbnail.mimetype,
      },
    });
    console.log(thumbnail.mimetype);
    const uploadResult = await upload.done();
    console.log(`uploadResult`, uploadResult);
  };

  return {
    createWorkspace,
    findWorkspaceListByPage,
    findWorkspaceByWorkspaceId,
    updateWorkspaceName,
    deleteWorkspace,
    saveWorkspaceCssProperty,
    saveWorkspaceCanvas,
    saveWorkspaceClassBlockList,
    saveWorkspaceCssResetStatus,
    saveWorkspace,
  };
};
