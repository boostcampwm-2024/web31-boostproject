import { TtotalCssPropertyObj } from '@/shared/types/workspaceType';
import { WorkspaceApi } from '@/shared/api';
import { getUserId } from '@/shared/utils';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { useWorkspaceChangeStatusStore } from '@/shared/store';

// TODO : 블록 상태도 저장해야함 Promise.all로 처리할 예정
export const useSaveWorkspace = () => {
  const workspaceApi = WorkspaceApi();
  const userId = getUserId();
  const { resetChangedStatusState } = useWorkspaceChangeStatusStore();

  const { mutate, isPending } = useMutation({
    mutationFn: ({
      workspaceId,
      totalCssPropertyObj,
    }: {
      workspaceId: string;
      totalCssPropertyObj: TtotalCssPropertyObj;
    }) => {
      return workspaceApi.saveWorkspaceCssProperty(userId, workspaceId, totalCssPropertyObj);
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
