import { WorkspaceApi } from '@/shared/api';
import { getUserId } from '@/shared/utils';
import toast from 'react-hot-toast';
import { useImageModalStore } from '@/shared/store';
import { useMutation } from '@tanstack/react-query';

export const usePostImage = () => {
  const workspaceApi = WorkspaceApi();
  const userId = getUserId() || '';
  const { pushImagePath, setNowImage } = useImageModalStore();
  const { mutate, isPending } = useMutation({
    mutationFn: ({
      workspaceId,
      imageName,
      image,
    }: {
      workspaceId: string;
      imageName: string;
      image: File;
    }) => {
      return workspaceApi.postImage(userId, workspaceId, imageName, image);
    },
    onSuccess: (result) => {
      pushImagePath(result.imageName, result.imageUrl);
      setNowImage(result.imageUrl);
      toast.success('성공적으로 저장되었습니다.');
    },
    onError: () => {
      toast.error('저장에 실패했습니다.');
    },
  });

  return { mutate, isPending };
};
