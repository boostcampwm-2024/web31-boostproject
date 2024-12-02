import { useCreateWorkspace } from '@/shared/hooks';
import { useLoadingStore } from '@/shared/store';
import { Spinner } from '@/shared/ui';

/**
 *
 * @description
 * Workspace 샘플을 생성하는 버튼입니다.
 */
export const WorkspaceSampleButton = () => {
  const { mutate: createWorkspace } = useCreateWorkspace(true);
  const { isPending } = useLoadingStore();

  const handleClick = () => {
    createWorkspace();
  };

  return (
    <button
      onClick={handleClick}
      className="text-bold-rg rounded-full border border-gray-100 px-4 py-2 text-gray-400 transition-colors ease-in-out hover:border-gray-300 hover:bg-gray-50 hover:text-gray-300"
      disabled={isPending}
    >
      {isPending ? (
        <Spinner width={4} height={4} backgroundColor="gray200" foregroundColor="grayWhite" />
      ) : (
        <p>예시 불러오기</p>
      )}
    </button>
  );
};
