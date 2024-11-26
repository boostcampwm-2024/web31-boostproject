import { Tcss, TcssList, TtotalCssPropertyObj } from '@/types/workspaceType';

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
   * workspace 커서 기반 페이지네이션 메소드
   * @param userId
   * @param cursor
   * @return {workspaceList , nextCursor}
   * workspaceList : 현재 페이지의 워크스페이스
   * nextCursor : 다음 페이지네이션 시작 커서
   */

  const findWorkspaceListByPage = async (
    userId: string,
    cursor: { updatedAt: string; workspaceId: string } | null
  ) => {
    try {
      const query: {
        user_id: string;
        $or?: Array<
          { updated_at: { $lt: string } } | { updated_at: string; workspace_id: { $gt: string } }
        >;
      } = { user_id: userId };
      if (cursor) {
        query.$or = [
          { updated_at: { $lt: cursor.updatedAt } },
          { updated_at: cursor.updatedAt, workspace_id: { $gt: cursor.workspaceId } },
        ];
      }
      const workspaceList = await Workspace.find(query)
        .sort({ updated_at: -1, workspace_id: 1 })
        .limit(20);
      let nextCursor = null;
      if (workspaceList.length === 20) {
        nextCursor = {
          updatedAt: workspaceList[19].updated_at,
          workspaceId: workspaceList[19].workspace_id,
        };
      }
      return {
        workspaceList,
        nextCursor,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to get workspaceList : ${error.message}`);
      }
      throw new Error(`Unknown Error ocurred while getting workspaceList`);
    }
  };

  const findWorkspaceByWorkspaceId = async (userId: string, workspaceId: string) => {
    try {
      const workspace = await Workspace.findOne(
        {
          user_id: userId,
          workspace_id: workspaceId,
        },
        { workspace_id: 1, name: 1, _id: 0, css_list: 1 }
      );
      return workspace;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to get workspace : ${error.message}`);
      }
      throw new Error(`Unknown Error ocurred while getting workspace`);
    }
  };

  const updateWorkspaceName = async (userId: string, workspaceId: string, newName: string) => {
    try {
      const updatedWorkspace = await Workspace.findOneAndUpdate(
        { user_id: userId, workspace_id: workspaceId },
        { name: newName, updated_at: Date.now() },
        { new: true }
      );
      return updatedWorkspace;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to update workspace : ${error.message}`);
      }
      throw new Error(`Unknown Error ocurred while udating workspace`);
    }
  };

  const deleteWorkspace = async (userId: string, workspaceId: string) => {
    try {
      const deletedWorkspace = await Workspace.findOneAndDelete({
        user_id: userId,
        workspace_id: workspaceId,
      }).exec();
      return deletedWorkspace;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to delete workspace : ${error.message}`);
      }
      throw new Error(`Unknown Error ocurred while deleting workspace`);
    }
  };

  const updateWorkspaceCssProperty = async (
    userId: string,
    workspaceId: string,
    totalCssPropertyObj: TtotalCssPropertyObj
  ) => {
    try {
      const cssList: TcssList = [];
      Object.keys(totalCssPropertyObj).forEach((className) => {
        const css: Tcss = { class_name: className, option_list: [] };

        /**
         * checkedCssPropertyObj와 cssOptionObj의 길이를 비교
         * checkedCssPropertyObj의 길이가 더 길면 cssOptionObj보다 더 많은 css property를 저장하고 있는 것임
         * 그러므로 checkedCssPropertyObj를 기준으로 optionList에 값을 저장함
         * 그렇지 않다면 cssOptionObj를 기준으로 optionList에 값을 저장
         */
        Object.keys(totalCssPropertyObj[className].checkedCssPropertyObj).length >=
        Object.keys(totalCssPropertyObj[className].cssOptionObj).length
          ? Object.keys(totalCssPropertyObj[className].checkedCssPropertyObj).forEach(
              (property: string) => {
                css.option_list.push({
                  property,
                  value: totalCssPropertyObj[className].cssOptionObj[property],
                  is_checked: totalCssPropertyObj[className].checkedCssPropertyObj[property],
                });
              }
            )
          : Object.keys(totalCssPropertyObj[className].cssOptionObj).forEach((property: string) => {
              css.option_list.push({
                property,
                value: totalCssPropertyObj[className].cssOptionObj[property],
                is_checked: totalCssPropertyObj[className].checkedCssPropertyObj[property] || false,
              });
            });
        cssList.push(css);
      });
      console.log(`cssList :`, JSON.stringify(cssList, null, 2));
      const updatedWorkspace = await Workspace.findOneAndUpdate(
        {
          user_id: userId,
          workspace_id: workspaceId,
        },
        {
          $set: {
            css_list: cssList,
            updated_at: Date.now(),
          },
        }
      );
      return updatedWorkspace;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to update workspace css property : ${error.message}`);
      }
      throw new Error(`Unknown Error ocurred while updating workspace cssList`);
    }
  };

  return {
    createWorkspace,
    findWorkspaceListByPage,
    findWorkspaceByWorkspaceId,
    updateWorkspaceName,
    deleteWorkspace,
    updateWorkspaceCssProperty,
  };
};
