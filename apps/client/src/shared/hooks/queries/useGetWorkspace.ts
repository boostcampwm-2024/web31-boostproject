import { WorkspaceApi } from '@/shared/api';
import { getUserId } from '@/shared/utils';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useWorkspaceStore } from '@/shared/store';

export const useGetWorkspace = (workspaceId: string) => {
  const workspaceApi = WorkspaceApi();
  const userId = getUserId();
  const { setName } = useWorkspaceStore();
  const { data, isPending, isError } = useQuery({
    queryKey: ['getWorkspace', workspaceId],
    queryFn: () => {
      setName('워크스페이스 이름');
      return workspaceApi.getWorkspace(userId, workspaceId);
    },
  });

  useEffect(() => {
    if (isError) {
      toast.error('워크스페이스 정보 불러오기 실패');
      return;
    }
    if (data) {
      setName(data.workspaceDto.name);
    }
  }, [data, setName, isError]);

  return { data, isPending, isError };
};
