import { TcssList, TtotalCssPropertyObj, Tworkspace } from '@/types/workspaceType';

import { Workspace } from '@/models/workspaceModel';
import { generateCssList } from '@/services/utils/generateCssList';
import { generateTotalCssPropertyObj } from '@/services/utils/generateTotalCssPropertyObj';

/* eslint-disable */
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
        { _id: 0 }
      );
      if (!workspace) {
        return workspace;
      }
      const totalCssPropertyObj = generateTotalCssPropertyObj(workspace as Tworkspace);
      return {
        workspace_id: workspace.workspace_id,
        name: workspace.name,
        isCssReset: workspace.is_css_reset,
        totalCssPropertyObj,
      };
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
      if (!updatedWorkspace) {
        return updatedWorkspace;
      }

      const totalCssPropertyObj = generateTotalCssPropertyObj(updatedWorkspace as Tworkspace);
      return {
        name: updatedWorkspace.name,
        workspaceId: updatedWorkspace.workspace_id,
        isResetCss: updatedWorkspace.is_css_reset,
        totalCssPropertyObj,
      };
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

  const saveWorkspaceCssProperty = async (
    userId: string,
    workspaceId: string,
    totalCssPropertyObj: TtotalCssPropertyObj
  ) => {
    try {
      const cssList: TcssList = generateCssList(totalCssPropertyObj);
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

  const saveWorkspaceCanvas = async (userId: string, workspaceId: string, canvas: any) => {
    try {
      const updatedWorkspace = await Workspace.findOneAndUpdate(
        {
          user_id: userId,
          workspace_id: workspaceId,
        },
        {
          $set: {
            canvas,
            updated_at: Date.now(),
          },
        },
        {
          new: true,
        }
      );
      return updatedWorkspace;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to update workspace canvas : ${error.message}`);
      }
      throw new Error(`Unknown Error ocurred while updating workspace canvas`);
    }
  };

  return {
    createWorkspace,
    findWorkspaceListByPage,
    findWorkspaceByWorkspaceId,
    updateWorkspaceName,
    deleteWorkspace,
    saveWorkspaceCssProperty,
    saveWorkspaceCanvas,
  };
};
