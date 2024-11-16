import {
  TcreatedWorkspaceDto,
  TgetWorkspaceResponse,
  TpagedWorkspaceListResultDto,
  Tworkspace,
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
    if (response) {
      return response.data as TcreatedWorkspaceDto;
    }
    throw new Error('Invalid response from server');
  };

  const getWorkspaceList = async (userId: string, cursor: string) => {
    const response = await Instance.get(
      `/workspace/list${cursor !== 'null' ? `?cursor=${encodeURIComponent(cursor)}` : ''}`,
      {
        headers: { 'user-id': userId },
      }
    );
    if (response) {
      return response.data as TpagedWorkspaceListResultDto;
    }
    throw new Error('Invalid response from server');
  };

  const getWorkspace = async (userId: string, workspaceId: string) => {
    const response = await Instance.get(`/workspace?workspaceId=${workspaceId}`, {
      headers: { 'user-id': userId },
    });
    if (response) {
      return response.data as TgetWorkspaceResponse;
    }
    throw new Error('Invalid response from server');
  };

  const updateWorkspaceName = async (userId: string, workspaceId: string, newName: string) => {
    const response = await Instance.patch(
      '/workspace/name',
      { workspaceId, newName },
      { headers: { 'user-id': userId } }
    );

    if (response) {
      return response.data as Tworkspace;
    }
    throw new Error('Invalid response from server');
  };

  const deleteWorkspace = async (userId: string, workspaceId: string): Promise<void> => {
    const response = await Instance.delete(`/workspace?workspaceId=${workspaceId}`, {
      headers: { 'user-id': userId },
    });

    if (!response) {
      throw new Error('Invalid response from server');
    }
  };

  return {
    createWorkspace,
    getWorkspaceList,
    getWorkspace,
    updateWorkspaceName,
    deleteWorkspace,
  };
};
