import {
  useClassBlockStore,
  useCssPropsStore,
  useModalStore,
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
import { createCssClassBlock, cssStyleToolboxConfig } from '@/shared/blockly';

export const useGetWorkspace = (workspaceId: string) => {
  const workspaceApi = WorkspaceApi();
  const userId = getUserId();
  const { initCssPropertyObj } = useCssPropsStore();
  const { initClassBlockList } = useClassBlockStore();
  const { setCanvasInfo } = useWorkspaceStore();
  const { resetChangedStatusState } = useWorkspaceChangeStatusStore();
  const { setIsResetCssChecked } = useResetCssStore();
  const { setInitialImageMap, setInitialImageList } = useModalStore();
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
    if (!data) {
      return;
    }

    if (!data.workspaceDto) {
      return;
    }

    initCssPropertyObj(data.workspaceDto.totalCssPropertyObj);
    initClassBlockList(Object.keys(data.workspaceDto.totalCssPropertyObj));
    setCanvasInfo(data.workspaceDto.canvas);
    cssStyleToolboxConfig.contents = data.workspaceDto.classBlockList
      ? JSON.parse(data.workspaceDto.classBlockList)
      : [];
    setIsResetCssChecked(data.workspaceDto.isCssReset);
    Object.keys(data.workspaceDto.totalCssPropertyObj).forEach((className) => {
      createCssClassBlock(className);
    });
    setInitialImageMap(data.workspaceDto.imageMap);
    setInitialImageList(data.workspaceDto.imageList);
  }, [isError, data]);
  return { data, isPending, isError };
};
