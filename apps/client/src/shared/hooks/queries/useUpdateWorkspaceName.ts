import { useMutation, useQueryClient } from '@tanstack/react-query';

import { WorkspaceApi } from '@/shared/api';
import { getUserId } from '@/shared/utils';
import toast from 'react-hot-toast';
import { useWorkspaceStore } from '@/shared/store';

export const useUpdateWorkspaceName = () => {
  const queryClient = useQueryClient();
  const workspaceApi = WorkspaceApi();
  const userId = getUserId();
  const { setName } = useWorkspaceStore();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ workspaceId, newName }: { workspaceId: string; newName: string }) => {
      return workspaceApi.updateWorkspaceName(userId, workspaceId, newName);
    },
    onSuccess: (data) => {
      toast.success('워크스페이스 이름이 변경되었습니다.');
      setName(data?.name!);
      queryClient.setQueryData(['getWorkspace', data.workspace_id], (oldData: any) => {
        return {
          workspaceDto: { ...oldData.workspaceDto, name: data.name },
        };
      });
      queryClient.invalidateQueries({ queryKey: ['getWorkspaceList'] });
    },
    onError: () => {
      toast.error('워크스페이스 이름 변경을 실패했습니다.');
    },
  });

  return { mutate, isPending };
};
