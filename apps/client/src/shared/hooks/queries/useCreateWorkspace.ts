import { TcreatedWorkspaceDto } from '@/shared/types';
import { WorkspaceApi } from '@/shared/api';
import toast from 'react-hot-toast';
import { useLoadingStore } from '@/shared/store';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useCreateWorkspace = () => {
  const workspaceApi = WorkspaceApi();
  const navigate = useNavigate();
  const setPending = useLoadingStore((state) => state.setIsPending);
  const { mutate } = useMutation<TcreatedWorkspaceDto, Error, void, unknown>({
    mutationFn: () => {
      setPending(true);
      const userId = localStorage.getItem('userId') || crypto.randomUUID();
      localStorage.setItem('userId', userId);
      return workspaceApi.createWorkspace(userId);
    },
    onSuccess: (newWorkspace) => {
      navigate(`/workspace/${newWorkspace.newWorkspaceId}`);
    },
    onError: (error) => {
      console.error(error);
      toast.error('워크스페이스 생성 실패');
    },
    onSettled: () => {
      setPending(false);
    },
  });

  return { mutate };
};
