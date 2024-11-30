import { Request, Response } from 'express';

import { TTotalCssPropertyObj } from '@/types/workspaceType';
import { WorkspaceService } from '@/services/workspaceService';
import { NotFoundError } from '@/utils/customError';

export const WorkspaceController = () => {
  const workspaceService = WorkspaceService();

  /**
   * @description
   * 워크스페이스 생성 요청 api입니다.
   * @method POST
   * @headers { user-id : userId }
   * @response newWorkspaceId (생성된 workspaceId)
   */
  const createNewWorkspace = async (req: Request, res: Response) => {
    const userId = req.get('user-id') as string;
    const newWorkspaceId = await workspaceService.createWorkspace(userId);
    res.status(201).json({ newWorkspaceId });
  };

  /**
   * @description
   * 워크스페이스 조회 api입니다.
   * 커서 기반 페이지네이션을 적용해서 20개씩 보냅니다.
   * @method GET
   * @headers { user-id : userId}
   * @queryString cursor : {updatedAt, workspaceId}
   * @response
   * workspaceList : 현재 페이지의 워크스페이스
   * nextCursor : 다음 페이지네이션 시작 커서
   */
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

  const storeWorkspaceCssProperty = async (req: Request, res: Response) => {
    const userId = req.get('user-id') as string;
    const workspaceId = req.body.workspaceId as string;
    const totalCssPropertyObj = req.body.totalCssPropertyObj as TTotalCssPropertyObj;
    const savedWorkspace = await workspaceService.saveWorkspaceCssProperty(
      userId,
      workspaceId,
      totalCssPropertyObj
    );
    if (!savedWorkspace) {
      throw new NotFoundError('Workspace not found');
    }
    res.status(200).json({ message: 'success' });
  };

  const storeWorkspaceCanvas = async (req: Request, res: Response) => {
    const userId = req.get('user-id') as string;
    const workspaceId = req.body.workspaceId as string;
    const canvas = req.body.canvas;
    const savedWorkspace = await workspaceService.saveWorkspaceCanvas(userId, workspaceId, canvas);
    if (!savedWorkspace) {
      throw new NotFoundError('Workspace not found');
    }
    res.status(200).json({ message: 'success' });
  };

  const storeWorkspaceClassBlockList = async (req: Request, res: Response) => {
    const userId = req.get('user-id') as string;
    const workspaceId = req.body.workspaceId as string;
    const classBlockList = req.body.classBlockList as string;
    const storedWorkspace = await workspaceService.saveWorkspaceClassBlockList(
      userId,
      workspaceId,
      classBlockList
    );
    if (!storedWorkspace) {
      throw new NotFoundError('Workspace not found');
    }
    res.status(200).json({ message: 'success' });
  };

  const storeWorkspaceCssResetStatus = async (req: Request, res: Response) => {
    const userId = req.get('user-id') as string;
    const workspaceId = req.body.workspaceId as string;
    const cssResetStatus = req.body.cssResetStatus as boolean;
    const storedWorkspace = await workspaceService.saveWorkspaceCssResetStatus(
      userId,
      workspaceId,
      cssResetStatus
    );
    if (!storedWorkspace) {
      throw new NotFoundError('Workspace not found');
    }
    res.status(200).json({ message: 'success' });
  };

  return {
    createNewWorkspace,
    getWorkspaceListByPage,
    getWorkspaceInfo,
    editWorkspaceName,
    removeWorkspace,
    storeWorkspaceCssProperty,
    storeWorkspaceCanvas,
    storeWorkspaceClassBlockList,
    storeWorkspaceCssResetStatus,
  };
};
