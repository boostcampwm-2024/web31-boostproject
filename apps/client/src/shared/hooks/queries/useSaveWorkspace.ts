import { TCanvas, TTotalCssPropertyObj } from '@/shared/types/workspaceType';
import { createUserId, getUserId } from '@/shared/utils';

import { TBlock } from '@/shared/types';
import { WorkspaceApi } from '@/shared/api';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { useWorkspaceChangeStatusStore } from '@/shared/store';

export const useSaveWorkspace = (workspaceId: string) => {
  const workspaceApi = WorkspaceApi();
  const userId = getUserId() || createUserId();
  const { resetChangedStatusState } = useWorkspaceChangeStatusStore();
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
        thumbnail
      );
    },
    onSuccess: () => {
      resetChangedStatusState();
      toast.success('성공적으로 저장되었습니다.');
    },
    onError: () => {
      toast.error('저장에 실패했습니다.');
    },
  });

  return { mutate, isPending };
};
