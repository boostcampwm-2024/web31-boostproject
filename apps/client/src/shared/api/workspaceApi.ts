import { Instance } from './axiosInstance';
import { TcreatedWorkspace } from '@/shared/types';

export const WorkspaceApi = () => {
  const createWorkspace = async () => {
    const response = await Instance.post('/workspace');
    if (response) {
      return response.data as TcreatedWorkspace;
    }
    throw new Error('Invalid response from server');
  };

  return {
    createWorkspace,
  };
};
