import { createUserId, getUserId } from '@/shared/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { TCreatedWorkspaceDto } from '@/shared/types';
import { WorkspaceApi } from '@/shared/api';
import toast from 'react-hot-toast';
import { useLoadingStore } from '@/shared/store';
import { useNavigate } from 'react-router-dom';
import { workspaceKeys } from '@/shared/hooks';

export const useCreateWorkspace = (isSample = false) => {
  const workspaceApi = WorkspaceApi();
  const navigate = useNavigate();
  const setPending = useLoadingStore((state) => state.setIsPending);
  const queryClient = useQueryClient();
  const { mutate } = useMutation<TCreatedWorkspaceDto, Error, void, unknown>({
    mutationFn: () => {
      setPending(true);
      const userId = getUserId() || createUserId();
      return workspaceApi.createWorkspace(userId, isSample);
    },
    onSuccess: (newWorkspace) => {
      queryClient.invalidateQueries({ queryKey: workspaceKeys.list() });
      if (!isSample) {
        navigate(`/workspace/${newWorkspace.newWorkspaceId}`);
      }
    },
    onError: () => {
      toast.error('워크스페이스 생성 실패');
    },
    onSettled: () => {
      setPending(false);
    },
  });

  return { mutate };
};
