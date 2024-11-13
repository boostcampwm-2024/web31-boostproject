import { WorkspaceApi } from '@/shared/api';
import { getUserId } from '@/shared/utils';
import { useQuery } from '@tanstack/react-query';

export const useGetWorkspace = (workspaceId: string) => {
  const workspaceApi = WorkspaceApi();
  const userId = getUserId();

  const { data, isPending, isError } = useQuery({
    queryKey: ['getWorkspace', workspaceId],
    queryFn: () => {
      return workspaceApi.getWorkspace(userId, workspaceId);
    },
  });

  return { data, isPending, isError };
};
