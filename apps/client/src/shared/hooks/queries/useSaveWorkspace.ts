import { TCanvas, TTotalCssPropertyObj } from '@/shared/types/workspaceType';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { TBlock } from '@/shared/types';
import { WorkspaceApi } from '@/shared/api';
import { getUserId } from '@/shared/utils';
import toast from 'react-hot-toast';
import { useImageModalStore, useWorkspaceChangeStatusStore } from '@/shared/store';
import { workspaceKeys } from '../query-key/workspaceKeys';

export const useSaveWorkspace = (workspaceId: string) => {
  const workspaceApi = WorkspaceApi();
  const userId = getUserId();
  const { resetChangedStatusState } = useWorkspaceChangeStatusStore();
  const { imageMap } = useImageModalStore();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: ({
      totalCssPropertyObj,
      canvas,
      classBlockList,
      cssResetStatus,
      thumbnail,
    }: {
      totalCssPropertyObj: TTotalCssPropertyObj;
      canvas: TCanvas;
      classBlockList: TBlock[];
      cssResetStatus: boolean;
      thumbnail: File;
    }) => {
      return workspaceApi.saveWorkspace(
        userId,
        workspaceId,
        totalCssPropertyObj,
        canvas,
        classBlockList,
        cssResetStatus,
        thumbnail,
        imageMap
      );
    },
    onSuccess: () => {
      resetChangedStatusState();
      queryClient.invalidateQueries({ queryKey: workspaceKeys.detail(workspaceId) });
      toast.success('성공적으로 저장되었습니다.');
    },
    onError: () => {
      toast.error('저장에 실패했습니다.');
    },
  });

  return { mutate, isPending };
};
