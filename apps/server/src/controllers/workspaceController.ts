import { Request, Response } from 'express';

import { ERROR_MESSAGE } from '@/utils/error_message';
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
   * @desciption
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

  return { createNewWorkspace, getWorkspaceListByPage };
};
