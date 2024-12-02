import { WorkspaceApi } from '@/shared/api';
import { getUserId } from '@/shared/utils';
import toast from 'react-hot-toast';
import { useModalStore } from '@/shared/store';
import { useMutation } from '@tanstack/react-query';

export const useDeleteImage = () => {
  const workspaceApi = WorkspaceApi();
  const userId = getUserId();
  const { deleteImagePath } = useModalStore();

  const { mutate } = useMutation({
    mutationFn: ({ workspaceId, imageName }: { workspaceId: string; imageName: string }) => {
      return workspaceApi.deleteImage(userId, workspaceId, imageName);
    },
    onSuccess: (result) => {
      deleteImagePath(result.imageName);
      toast.success('이미지 삭제 성공');
    },
    onError: () => {
      toast.error('이미지 삭제 실패');
    },
  });

  return { mutate };
};
