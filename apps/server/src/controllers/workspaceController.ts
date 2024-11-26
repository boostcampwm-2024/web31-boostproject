import { Request, Response } from 'express';

import { ERROR_MESSAGE } from '@/utils/error_message';
import { TtotalCssPropertyObj } from '@/types/workspaceType';
import { WorkspaceService } from '@/services/workspaceService';

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
    try {
      const userId = req.get('user-id') as string;
      const newWorkspaceId = await workspaceService.createWorkspace(userId);
      res.status(201).json({ newWorkspaceId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: ERROR_MESSAGE[500] });
    }
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
    try {
      const userId = req.get('user-id') as string;
      const cursor = req.query.cursor ? JSON.parse(req.query.cursor as string) : null;
      const pagedWorkspaceListResult = await workspaceService.findWorkspaceListByPage(
        userId,
        cursor
      );
      res.status(200).json({ pagedWorkspaceListResult });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: ERROR_MESSAGE[500] });
    }
  };

  const getWorkspaceInfo = async (req: Request, res: Response) => {
    try {
      const userId = req.get('user-id') as string;
      const workspaceId = req.query.workspaceId as string;
      const workspaceDto = await workspaceService.findWorkspaceByWorkspaceId(userId, workspaceId);
      if (!workspaceDto) {
        throw new Error('Workspace not found');
      }
      res.status(200).json({ workspaceDto });
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        if (error.message === 'Workspace not found') {
          return res.status(404).json({ message: ERROR_MESSAGE[404] });
        }
        res.status(500).json({ message: ERROR_MESSAGE[500] });
      }
    }
  };

  const editWorkspaceName = async (req: Request, res: Response) => {
    try {
      const userId = req.get('user-id') as string;
      const { workspaceId, newName } = req.body;
      const updatedWorkspace = await workspaceService.updateWorkspaceName(
        userId,
        workspaceId,
        newName
      );

      if (!updatedWorkspace) {
        throw new Error('Workspace not found');
      }
      res.status(200).json(updatedWorkspace);
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        if (error.message === 'Workspace not found') {
          return res.status(404).json({ message: ERROR_MESSAGE[404] });
        }
        res.status(500).json({ message: ERROR_MESSAGE[500] });
      }
    }
  };

  const removeWorkspace = async (req: Request, res: Response) => {
    try {
      const userId = req.get('user-id') as string;
      const workspaceId = req.query.workspaceId as string;
      const deletedWorkspace = await workspaceService.deleteWorkspace(userId, workspaceId);
      if (!deletedWorkspace) {
        throw new Error('Workspace not found');
      }
      return res.status(200).json({ message: 'success' });
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        if (error.message === 'Workspace not found') {
          return res.status(404).json({ message: ERROR_MESSAGE[404] });
        }
        res.status(500).json({ message: ERROR_MESSAGE[500] });
      }
    }
  };

  const storeWorkspaceCssProperty = async (req: Request, res: Response) => {
    try {
      const userId = req.get('user-id') as string;
      const workspaceId = req.body.workspaceId as string;
      const totalCssPropertyObj = req.body.totalCssPropertyObj as TtotalCssPropertyObj;
      const savedWorkspace = await workspaceService.updateWorkspaceCssProperty(
        userId,
        workspaceId,
        totalCssPropertyObj
      );
      if (!savedWorkspace) {
        throw new Error('Workspace not found');
      }
      res.status(200).json({ message: 'success' });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Workspace not found') {
          return res.status(404).json({ message: ERROR_MESSAGE[404] });
        }
        res.status(500).json({ message: ERROR_MESSAGE[500] });
      }
    }
  };

  return {
    createNewWorkspace,
    getWorkspaceListByPage,
    getWorkspaceInfo,
    editWorkspaceName,
    removeWorkspace,
    storeWorkspaceCssProperty,
  };
};
