import {
  TCanvas,
  TCreatedWorkspaceDto,
  TGetWorkspaceResponse,
  TPagedWorkspaceListResultDto,
  TTotalCssPropertyObj,
  TWorkspace,
} from '@/shared/types';

import { Instance } from '@/shared/api';

export const WorkspaceApi = () => {
  const createWorkspace = async (userId: string) => {
    const response = await Instance.post(
      '/workspace',
      { userId },
      {
        headers: {
          'user-id': userId,
        },
      }
    );
    return response.data as TCreatedWorkspaceDto;
  };

  const getWorkspaceList = async (userId: string, cursor: string) => {
    const response = await Instance.get(
      `/workspace/list${cursor !== 'null' ? `?cursor=${encodeURIComponent(cursor)}` : ''}`,
      {
        headers: { 'user-id': userId },
      }
    );
    return response.data as TPagedWorkspaceListResultDto;
  };

  const getWorkspace = async (userId: string, workspaceId: string) => {
    const response = await Instance.get(`/workspace?workspaceId=${workspaceId}`, {
      headers: { 'user-id': userId },
    });
    return response.data as TGetWorkspaceResponse;
  };

  const updateWorkspaceName = async (userId: string, workspaceId: string, newName: string) => {
    const response = await Instance.patch(
      '/workspace/name',
      { workspaceId, newName },
      { headers: { 'user-id': userId } }
    );
    return response.data as TWorkspace;
  };

  const deleteWorkspace = async (userId: string, workspaceId: string): Promise<void> => {
    await Instance.delete(`/workspace?workspaceId=${workspaceId}`, {
      headers: { 'user-id': userId },
    });
  };

  const saveWorkspaceCssProperty = async (
    userId: string,
    workspaceId: string,
    totalCssPropertyObj: TTotalCssPropertyObj
  ) => {
    await Instance.put(
      `/workspace/css`,
      { workspaceId, totalCssPropertyObj },
      { headers: { 'user-id': userId } }
    );
  };

  const saveWorkspaceCanvas = async (userId: string, workspaceId: string, canvas: TCanvas) => {
    await Instance.put(
      `/workspace/canvas`,
      { workspaceId, canvas: JSON.stringify(canvas.blocks) },
      { headers: { 'user-id': userId } }
    );
  };

  return {
    createWorkspace,
    getWorkspaceList,
    getWorkspace,
    updateWorkspaceName,
    deleteWorkspace,
    saveWorkspaceCssProperty,
    saveWorkspaceCanvas,
  };
};
