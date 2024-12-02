/* eslint-disable multiline-comment-style */
import { WorkspaceController } from '@/controllers/workspaceController';
import { asyncWrapper } from '@/utils/asyncWrapper';
import express from 'express';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export const workspaceRouter = express.Router();

const workspaceController = WorkspaceController();

workspaceRouter.get(
  '/list',
  /* 
    #swagger.summary = '워크스페이스 목록 조회'
    #swagger.description = '워크스페이스 목록을 조회합니다. 커서기반 페이지네이션으로 동작합니다.'
    #swagger.tags = ['Workspace']
    #swagger.parameters['user-id'] = {
      in: 'header',
      description: '유저 아이디 (UUID 형식)',
      type: 'string',
      required: true,
    }
    #swagger.parameters['cursor'] = {
      in: 'query',
      description: '커서 정보입니다. ex: {updatedAt: 2024-11-07T00:00:00.000Z, workspaceId: b15eac31-3942-4192-9cbd-2e2cdd48da0a}',
      required: false,
      type: 'string',
    }
    #swagger.responses[200] = {
      description: 'success',
      content : {
        "application/json" : {
          schema: {
            $ref: '#/components/schemas/WorkspaceListDto'
          }
        }
      }
    }
    #swagger.responses[500] = {
      description: 'internal server error'
    }
  */
  asyncWrapper(workspaceController.getWorkspaceListByPage)
);
workspaceRouter.post(
  '/',
  /* 
    #swagger.summary = '새로운 워크스페이스 생성'
    #swagger.description = '새로운 워크스페이스를 생성합니다.'
    #swagger.tags = ['Workspace']
    #swagger.parameters['user-id'] = {
      in: 'header',
      description: '유저 아이디 (UUID 형식)',
      type: 'string',
      required: true,
    }
    #swagger.parameters['sample'] = {
      in: 'header',
      description: 'sample 여부',
      type: 'boolean',
      required: false,
    }
    #swagger.responses[201] = {
      description: 'success',
      content : {
        "application/json" : {
          schema: {
            $ref: '#/components/schemas/WorkspaceIdResponse'
          }
        }
      }
    }
    #swagger.responses[500] = {
      description: 'internal server error'
    }
  */
  workspaceController.createNewWorkspace
);

workspaceRouter.get(
  '/',
  /* 
    #swagger.summary = '워크스페이스 조회'
    #swagger.description = 'user id 와 workspace id로 워크스페이스를 조회합니다.'
    #swagger.tags = ['Workspace']
    #swagger.parameters['user-id'] = {
      in: 'header',
      description: '유저 아이디 (UUID 형식)',
      type: 'string',
      required: true,
    }
    #swagger.parameters['workspaceId'] = {
      in: 'query',
      description: '워크스페이스 아이디 (UUID 형식)',
      type: 'string',
      required: true,
    }
    #swagger.responses[200] = {
      description: 'success',
      content : {
        "application/json" : {
          schema: {
            $ref: '#/components/schemas/WorkspaceDto'
          }
        }
      }
    }
    #swagger.responses[404] = {
      description: 'Not Found'
    }
    #swagger.responses[500] = {
      description: 'internal server error'
    }
  */
  asyncWrapper(workspaceController.getWorkspaceInfo)
);

workspaceRouter.patch(
  '/name',
  /* 
    #swagger.summary = '워크스페이스 이름 변경'
    #swagger.description = 'user id 와 workspace id로 워크스페이스를 조회 후 새로운 워크스페이스 이름으로 변경합니다.'
    #swagger.tags = ['Workspace']
    #swagger.parameters['user-id'] = {
      in: 'header',
      description: '유저 아이디 (UUID 형식)',
      type: 'string',
      required: true,
    }
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: 'object',
            properties: {
              workspaceId: {
                type: 'string',
                example: 'b15eac31-3942-4192-9cbd-2e2cdd48da0a',
              },
              newName: {
                type: 'string',
                example: '새로운 워크스페이스 이름',
              },
            },
          }
        }
      }
    }
    #swagger.responses[200] = {
      description: 'success',
      content : {
        "application/json" : {
          schema: {
            $ref: '#/components/schemas/Workspace'
          }
        }
      }
    }
    #swagger.responses[404] = {
      description: 'Not Found'
    }
    #swagger.responses[500] = {
      description: 'internal server error'
    }
  */
  workspaceController.editWorkspaceName
);

workspaceRouter.delete(
  '/',
  /* 
    #swagger.summary = '워크스페이스 삭제'
    #swagger.description = 'user id 와 workspace id로 워크스페이스를 조회 후 삭제합니다.'
    #swagger.tags = ['Workspace']
    #swagger.parameters['user-id'] = {
      in: 'header',
      description: '유저 아이디 (UUID 형식)',
      type: 'string',
      required: true,
    }
    #swagger.parameters['workspaceId'] = {
      in: 'query',
      description: '워크스페이스 아이디 (UUID 형식)',
      type: 'string',
      required: true,
    }
    #swagger.responses[200] = {
      description: 'success',
    }
    #swagger.responses[404] = {
      description: 'Not Found'
    }
    #swagger.responses[500] = {
      description: 'internal server error'
    }
  */
  asyncWrapper(workspaceController.removeWorkspace)
);

workspaceRouter.patch(
  '/',
  upload.single('thumbnail'),
  /* 
    #swagger.summary = '워크스페이스 정보 저장'
    #swagger.description = 'user id 와 workspace id로 워크스페이스를 조회 후 CSS 속성, 워크스페이스 캔버스 상태, 클래스 블록, reset css 적용 여부, 미리보기 썸네일을 저장합니다.'
    #swagger.tags = ['Workspace']
    #swagger.parameters['user-id'] = {
      in: 'header',
      description: '유저 아이디 (UUID 형식)',
      type: 'string',
      required: true,
    }
    #swagger.requestBody = {
      required: true,
      content: {
        "multipart/form-data": {
          schema: {
            type: 'object',
            properties: {
              workspaceId: {
                type: 'string',
                example: 'b15eac31-3942-4192-9cbd-2e2cdd48da0a',
              },
              totalCssPropertyObj: {
                type: 'string',
              },
              canvas: {
                type: 'string',
              },
              classBlockList: {
                type: 'string',
              },
              cssResetStatus: {
                type: 'boolean',
              },
              thumbnail: {
                type: 'string',
                format: 'binary',
              } 
            },
          }
        }
      }
    }
    #swagger.responses[200] = {
      description: 'success',
    }
    #swagger.responses[404] = {
      description: 'Not Found'
    }
    #swagger.responses[500] = {
      description: 'internal server error'
    }
  */
  asyncWrapper(workspaceController.storeWorkspace)
);
