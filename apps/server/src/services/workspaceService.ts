import { Workspace } from '@/models/workspaceModel';

export const WorkspaceService = () => {
  const createWorkspace = async (userId: string) => {
    const newWorkspaceId = crypto.randomUUID();
    const workspace = new Workspace({ user_id: userId, workspace_id: newWorkspaceId });
    try {
      await workspace.save();
      return newWorkspaceId;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to create workspace : ${error.message}`);
      }
      throw new Error(`Unknown Error ocurred while creating workspace`);
    }
  };

  /**
   * @description
   * workspace 페이지네이션 get 메서드
   * userId : header,  page : query string
   * @param userId
   * @param page
   * @return
   * totalWorkspaceCount : 해당 유저의 총 워크스페이스 개수
   * currentPage : 현재 페이지
   * workspacePerPage : 페이지 당 워크스페이스 수
   */
  const findWorkspaceListByPage = async (userId: string, page: number) => {
    try {
      const totalWorkspace = await Workspace.find({ user_id: userId });
      const totalWorkspaceCount = totalWorkspace.length;
      const workspaceListOfCurrentPage = await Workspace.find({ user_id: userId })
        .skip(20 * page)
        .limit(20);
      return {
        totalWorkspaceCount,
        workspaceListOfCurrentPage,
        currentPage: page,
        workspacePerPage: 20,
      };
    } catch (error) {}
  };
  return {
    createWorkspace,
    findWorkspaceListByPage,
  };
};
