import { WorkspaceController } from '@/controllers/workspaceController';
import express from 'express';

export const workspaceRouter = express.Router();

const workspaceController = WorkspaceController();

workspaceRouter.get('/list', workspaceController.getWorkspaceListByPage);
workspaceRouter.post(
  '/',
  workspaceController.createNewWorkspace
  /* 
    #swagger.summary = '새로운 워크스페이스 생성'
    #swagger.description = '새로운 워크스페이스를 생성합니다.'
    #swagger.tags = ['Workspace']
    #swagger.responses[201] = {
      description: 'success',
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Workspace"
          }
        }
      }
    }
    #swagger.responses[500] = {
      description: 'internal server error'
    }
  */
);
