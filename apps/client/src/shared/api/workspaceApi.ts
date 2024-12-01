import {
  TBlock,
  TCanvas,
  TCreatedWorkspaceDto,
  TGetWorkspaceResponse,
  TPagedWorkspaceListResultDto,
  TTotalCssPropertyObj,
  TWorkspaceDto,
} from '@/shared/types';

import { Instance } from '@/shared/api';

export const WorkspaceApi = () => {
  const createWorkspace = async (userId: string, isSample = false) => {
    const response = await Instance.post(
      '/workspace',
      { userId },
      {
        headers: {
          'user-id': userId,
          sample: isSample,
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
    return response.data as TWorkspaceDto;
  };

  const deleteWorkspace = async (userId: string, workspaceId: string): Promise<void> => {
    await Instance.delete(`/workspace?workspaceId=${workspaceId}`, {
      headers: { 'user-id': userId },
    });
  };

  const saveWorkspace = async (
    userId: string,
    workspaceId: string,
    totalCssPropertyObj: TTotalCssPropertyObj,
    canvas: TCanvas,
    classBlockList: TBlock[],
    isCssReset: boolean,
    thumbnail: File
  ) => {
    const formData = new FormData();
    formData.append('workspaceId', workspaceId);
    formData.append('totalCssPropertyObj', JSON.stringify(totalCssPropertyObj));
    formData.append('canvas', JSON.stringify(canvas));
    formData.append('classBlockList', JSON.stringify(classBlockList));
    formData.append('cssResetStatus', isCssReset.toString());
    formData.append('thumbnail', thumbnail);

    await Instance.patch('/workspace', formData, {
      headers: {
        'user-id': userId,
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  return {
    createWorkspace,
    getWorkspaceList,
    getWorkspace,
    updateWorkspaceName,
    deleteWorkspace,
    saveWorkspace,
  };
};
