import { Request, Response } from 'express';

import { ERROR_MESSAGE } from '@/utils/error_message';
import { WorkspaceService } from '@/services/workspaceService';

export const WorkspaceController = () => {
  const workspaceService = WorkspaceService();
  const createNewWorkspace = async (req: Request, res: Response) => {
    try {
      const { userId } = req.body;
      const newWorkspaceId = await workspaceService.createWorkspace(userId);
      res.status(201).json({ newWorkspaceId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: ERROR_MESSAGE[500] });
    }
  };

  /**
   * /workspace?pageNum=0
   * header userId : userId
   */

  const getWorkspaceListByPage = async (req: Request, res: Response) => {
    try {
      const userId = req.get('userid');
      const page = req.query.page;
      const response = await workspaceService.findWorkspaceListByPage(
        userId as string,
        Number(page)
      );

      res.status(200).json({ response });
    } catch (error) {
      res.status(500).json({ message: ERROR_MESSAGE[500] });
    }
  };

  return { createNewWorkspace, getWorkspaceListByPage };
};
