import { Request, Response } from 'express';

import { ERROR_MESSAGE } from '@/utils/error_message';
import { WorkspaceService } from '@/services/workspaceService';

export const WorkspaceController = () => {
  const workspaceService = WorkspaceService();
  const createNewWorkspace = async (req: Request, res: Response) => {
    /* 
  #swagger.summary = '새로운 워크스페이스 생성'
  #swagger.description = '새로운 워크스페이스를 생성합니다.'
  #swagger.tags = ['Workspace']
  #swagger.responses[201] = {
    description: 'success',
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            newWorkspaceId: {
              type: "string",
              example: "b15eac31-3942-4192-9cbd-2e2cdd48da0a"
            }
          }
        }
      }
    }
  }
  #swagger.responses[500] = {
    description: 'internal server error'
  }
*/

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
