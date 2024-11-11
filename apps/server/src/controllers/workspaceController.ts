import { Request, Response } from 'express';

import { ERROR_MESSAGE } from '@/utils/error_message';
import { WorkspaceService } from '@/services/workspaceService';

export const WorkspaceController = () => {
  const workspaceService = WorkspaceService();
  const createNewWorkspace = async (req: Request, res: Response) => {
    try {
      const newWorkspaceId = await workspaceService.createWorkspace();
      res.status(201).json({ newWorkspaceId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: ERROR_MESSAGE[500] });
    }
  };

  return { createNewWorkspace };
};
