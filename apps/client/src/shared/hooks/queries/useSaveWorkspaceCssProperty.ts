import { TtotalCssPropertyObj } from '@/shared/types/workspaceType';
import { WorkspaceApi } from '@/shared/api';
import { getUserId } from '@/shared/utils';
import { useMutation } from '@tanstack/react-query';

export const useSaveWorkspaceCssProperty = () => {
  const workspaceApi = WorkspaceApi();
  const userId = getUserId();

  const { mutate } = useMutation({
    mutationFn: ({
      workspaceId,
      totalCssPropertyObj,
    }: {
      workspaceId: string;
      totalCssPropertyObj: TtotalCssPropertyObj;
    }) => {
      return workspaceApi.saveWorkspaceCssProperty(userId, workspaceId, totalCssPropertyObj);
    },
  });

  return { mutate };
};
