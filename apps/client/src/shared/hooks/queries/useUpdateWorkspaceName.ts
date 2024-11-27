import { useMutation, useQueryClient } from '@tanstack/react-query';

import { WorkspaceApi } from '@/shared/api';
import { getUserId } from '@/shared/utils';
import toast from 'react-hot-toast';
import { workspaceKeys } from '@/shared/hooks';
/* eslint-disable */
export const useUpdateWorkspaceName = () => {
  const queryClient = useQueryClient();
  const workspaceApi = WorkspaceApi();
  const userId = getUserId();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ workspaceId, newName }: { workspaceId: string; newName: string }) => {
      return workspaceApi.updateWorkspaceName(userId, workspaceId, newName);
    },
    onSuccess: (data) => {
      toast.success('워크스페이스 이름이 변경되었습니다.');
      queryClient.setQueryData(workspaceKeys.detail(data.workspace_id), {
        workspaceDto: {
          name: data.name,
          workspaceId: data.workspace_id,
          isCssRest: data.isCssReset,
          totalCssPropertyObj: data.totalTotalCssPropertyObj,
        },
      });
      queryClient.invalidateQueries({ queryKey: workspaceKeys.list() });
    },
    onError: () => {
      toast.error('워크스페이스 이름 변경을 실패했습니다.');
    },
  });

  return { mutate, isPending };
};
