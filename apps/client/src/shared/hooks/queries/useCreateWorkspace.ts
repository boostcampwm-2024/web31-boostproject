import { WorkspaceApi } from '@/shared/api';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useCreateWorkspace = () => {
  const workspaceApi = WorkspaceApi();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => workspaceApi.createWorkspace(),
    onSuccess: (newWorkspace) => {
      const workspaceList =
        localStorage.getItem('workspaceList') !== null
          ? (JSON.parse(localStorage.getItem('workspaceList')!) as Array<string>)
          : [];
      workspaceList.unshift(newWorkspace.newWorkspaceId);
      localStorage.setItem('workspaceList', JSON.stringify(workspaceList));
      navigate(`/workspace/${newWorkspace.newWorkspaceId}`);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
