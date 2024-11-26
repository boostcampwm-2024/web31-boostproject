import { Spinner } from '@/shared/ui';
import { useCssPropsStore } from '@/shared/store';
import { useParams } from 'react-router-dom';
import { useSaveWorkspace } from '@/shared/hooks';

// TODO: 블록 상태 저장 로직 추가
export const SaveButton = () => {
  const { mutate: saveWorkspace, isPending } = useSaveWorkspace();
  const { totalCssPropertyObj } = useCssPropsStore();
  const workspaceId = useParams().workspaceId as string;
  const handleClick = () => {
    saveWorkspace({ workspaceId, totalCssPropertyObj });
  };

  return (
    <button
      onClick={handleClick}
      className="text-bold-rg w-16 rounded-[30px] bg-green-500 py-2 text-green-100 hover:border hover:border-green-500 hover:bg-green-100 hover:text-green-500"
      disabled={isPending}
    >
      {isPending ? (
        <Spinner width={4} height={4} backgroundColor="gray200" foregroundColor="grayWhite" />
      ) : (
        <p>저장</p>
      )}
    </button>
  );
};
