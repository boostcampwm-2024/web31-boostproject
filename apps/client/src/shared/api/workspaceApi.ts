import {
  TBlock,
  TCanvas,
  TCreatedWorkspaceDto,
  TGetWorkspaceResponse,
  TImage,
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

  const postImage = async (userId: string, workspaceId: string, imageName: string, image: File) => {
    const formData = new FormData();
    formData.append('workspaceId', workspaceId);
    formData.append('imageName', imageName);
    formData.append('image', image);

    const response = await Instance.post('/workspace/image', formData, {
      headers: {
        'user-id': userId,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data as TImage;
  };

  const deleteImage = async (userId: string, workspaceId: string, imageName: string) => {
    const response = await Instance.delete(
      `/workspace/image?workspaceId=${encodeURIComponent(workspaceId)}&imageName=${encodeURIComponent(imageName)}`,
      {
        headers: { 'user-id': userId },
      }
    );

    return response.data as { imageName: string };
  };

  const saveWorkspace = async (
    userId: string,
    workspaceId: string,
    totalCssPropertyObj: TTotalCssPropertyObj,
    canvas: TCanvas,
    classBlockList: TBlock[],
    isCssReset: boolean,
    thumbnail: File,
    imageMap: Map<string, string>
  ) => {
    const formData = new FormData();
    formData.append('workspaceId', workspaceId);
    formData.append('totalCssPropertyObj', JSON.stringify(totalCssPropertyObj));
    formData.append('canvas', JSON.stringify(canvas));
    formData.append('classBlockList', JSON.stringify(classBlockList));
    formData.append('cssResetStatus', isCssReset.toString());
    formData.append('thumbnail', thumbnail);

    const imageMapObject = Object.fromEntries(imageMap); // Map -> 일반 객체 변환
    formData.append('imageMap', JSON.stringify(imageMapObject));

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
    postImage,
    deleteImage,
  };
};
