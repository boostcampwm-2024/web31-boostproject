import { Instance } from './axiosInstance';
import { TcreatedWorkspaceDto } from '@/shared/types';

export const WorkspaceApi = () => {
  const createWorkspace = async (userId: string) => {
    const response = await Instance.post('/workspace', { userId });
    if (response) {
      return response.data as TcreatedWorkspaceDto;
    }
    throw new Error('Invalid response from server');
  };

  return {
    createWorkspace,
  };
};
