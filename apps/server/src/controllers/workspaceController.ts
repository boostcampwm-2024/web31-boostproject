import { Request, Response } from 'express';

import { NotFoundError } from '@/utils/customError';
import { WorkspaceService } from '@/services/workspaceService';

export const WorkspaceController = () => {
  const workspaceService = WorkspaceService();

  const createNewWorkspace = async (req: Request, res: Response) => {
    const userId = req.get('user-id') as string;
    const newWorkspaceId = await workspaceService.createWorkspace(userId);
    res.status(201).json({ newWorkspaceId });
  };

  const getWorkspaceListByPage = async (req: Request, res: Response) => {
    const userId = req.get('user-id') as string;
    const cursor = req.query.cursor ? JSON.parse(req.query.cursor as string) : null;
    const pagedWorkspaceListResult = await workspaceService.findWorkspaceListByPage(userId, cursor);
    res.status(200).json({ pagedWorkspaceListResult });
  };

  const getWorkspaceInfo = async (req: Request, res: Response) => {
    const userId = req.get('user-id') as string;
    const workspaceId = req.query.workspaceId as string;
    const workspaceDto = await workspaceService.findWorkspaceByWorkspaceId(userId, workspaceId);
    if (!workspaceDto) {
      throw new NotFoundError('Workspace not found');
    }
    res.status(200).json({ workspaceDto });
  };

  const editWorkspaceName = async (req: Request, res: Response) => {
    const userId = req.get('user-id') as string;
    const { workspaceId, newName } = req.body;
    const updatedWorkspace = await workspaceService.updateWorkspaceName(
      userId,
      workspaceId,
      newName
    );

    if (!updatedWorkspace) {
      throw new NotFoundError('Workspace not found');
    }
    res.status(200).json(updatedWorkspace);
  };

  const removeWorkspace = async (req: Request, res: Response) => {
    const userId = req.get('user-id') as string;
    const workspaceId = req.query.workspaceId as string;
    const deletedWorkspace = await workspaceService.deleteWorkspace(userId, workspaceId);
    if (!deletedWorkspace) {
      throw new NotFoundError();
    }
    res.status(200).json({ message: 'success' });
  };

  const storeWorkspace = async (req: Request, res: Response) => {
    const thumbnail = req.file;
    const userId = req.get('user-id') as string;
    const { workspaceId, totalCssPropertyObj, canvas, classBlockList, cssResetStatus, imageMap } =
      req.body;

    console.log(imageMap);
    const imageMapJson = new Map(Object.entries(JSON.parse(imageMap)));
    console.log(imageMapJson);

    if (!thumbnail) {
      throw new Error('Thumbnail is required');
    }
    await workspaceService.saveWorkspace(
      userId,
      workspaceId,
      totalCssPropertyObj,
      canvas,
      classBlockList,
      cssResetStatus,
      thumbnail,
      imageMapJson as Map<string, string>
    );
    res.status(200).json({ message: 'success' });
  };

  const uploadImage = async (req: Request, res: Response) => {
    const image = req.file;
    const userId = req.get('user-id') as string;

    const { workspaceId, imageName } = req.body;
    // console.log(image, userId, workspaceId, imageName);
    if (!image) {
      throw new Error('Image is required');
    }
    const imageUrl = await workspaceService.saveImage(userId, workspaceId, imageName, image);
    res.status(200).json({ imageName, imageUrl });
  };

  const deleteImage = async (req: Request, res: Response) => {
    const userId = req.get('user-id') as string;
    const { workspaceId, imageName } = req.query;
    await workspaceService.deleteImage(userId, workspaceId as string, imageName as string);
    res.status(200).json({ imageName });
  };

  return {
    createNewWorkspace,
    getWorkspaceListByPage,
    getWorkspaceInfo,
    editWorkspaceName,
    removeWorkspace,
    storeWorkspace,
    uploadImage,
    deleteImage,
  };
};
