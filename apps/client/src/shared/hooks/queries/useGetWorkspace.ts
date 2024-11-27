import {
  useClassBlockStore,
  useCssPropsStore,
  useResetCssStore,
  useWorkspaceChangeStatusStore,
  useWorkspaceStore,
} from '@/shared/store';

import { WorkspaceApi } from '@/shared/api';
import { getUserId } from '@/shared/utils';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { workspaceKeys } from '@/shared/hooks';
import { cssStyleToolboxConfig } from '@/shared/blockly';

// TODO : css reset 여부, 블록 상태도 초기화하기
export const useGetWorkspace = (workspaceId: string) => {
  const workspaceApi = WorkspaceApi();
  const userId = getUserId();
  const { initCssPropertyObj } = useCssPropsStore();
  const { initClassBlockList } = useClassBlockStore();
  const { setCanvasInfo: setBlockInfo } = useWorkspaceStore();
  const { resetChangedStatusState } = useWorkspaceChangeStatusStore();
  const { setIsResetCssChecked } = useResetCssStore();
  const { data, isPending, isError } = useQuery({
    queryKey: workspaceKeys.detail(workspaceId),
    queryFn: () => {
      return workspaceApi.getWorkspace(userId, workspaceId);
    },
  });

  useEffect(() => {
    resetChangedStatusState();
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error('워크스페이스 정보 불러오기 실패');
      return;
    }
    if (data) {
      initCssPropertyObj(data.workspaceDto.totalCssPropertyObj);
      initClassBlockList(Object.keys(data.workspaceDto.totalCssPropertyObj));
      setBlockInfo(data.workspaceDto.canvas);
      cssStyleToolboxConfig.contents = data.workspaceDto.classBlockList
        ? JSON.parse(data.workspaceDto.classBlockList)
        : [];
      setIsResetCssChecked(data.workspaceDto.isCssReset);
    }
  }, [isError, data]);
  return { data, isPending, isError };
};
