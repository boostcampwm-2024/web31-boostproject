import { createUserId, getUserId } from '@/shared/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { WorkspaceApi } from '@/shared/api';
import toast from 'react-hot-toast';
import { useWorkspaceStore } from '@/shared/store';
import { workspaceKeys } from '@/shared/hooks';

export const useUpdateWorkspaceName = () => {
  const queryClient = useQueryClient();
  const workspaceApi = WorkspaceApi();
  const userId = getUserId() || createUserId();
  const { setName } = useWorkspaceStore();
  const { mutate, isPending } = useMutation({
    mutationFn: ({ workspaceId, newName }: { workspaceId: string; newName: string }) => {
      return workspaceApi.updateWorkspaceName(userId, workspaceId, newName);
    },
    onSuccess: (data) => {
      toast.success('워크스페이스 이름이 변경되었습니다.');
      setName(data.name);
      queryClient.invalidateQueries({ queryKey: workspaceKeys.list() });
    },
    onError: () => {
      toast.error('워크스페이스 이름 변경을 실패했습니다.');
    },
  });

  return { mutate, isPending };
};
