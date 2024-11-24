import { WorkspaceApi } from '@/shared/api';
import { getUserId } from '@/shared/utils';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { workspaceKeys } from '@/shared/hooks';

export const useGetWorkspace = (workspaceId: string) => {
  const workspaceApi = WorkspaceApi();
  const userId = getUserId();
  const { data, isPending, isError } = useQuery({
    queryKey: workspaceKeys.detail(workspaceId),
    queryFn: () => {
      return workspaceApi.getWorkspace(userId, workspaceId);
    },
  });

  useEffect(() => {
    if (isError) {
      toast.error('워크스페이스 정보 불러오기 실패');
      return;
    }
  }, [isError]);

  return { data, isPending, isError };
};
