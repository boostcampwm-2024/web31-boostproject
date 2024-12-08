import { CircleButton } from '@/shared/ui';
import PlusSVG from '@/shared/assets/plus.svg?react';
import { useCreateWorkspace } from '@/shared/hooks';
import { useLoadingStore } from '@/shared/store';

/**
 *
 * @description
 * 워크스페이스 추가 버튼 컴포넌트
 */
export const WorkspaceAddBtn = () => {
  const { mutate: createWorkspace } = useCreateWorkspace();
  const { isPending } = useLoadingStore();

  const handleClick = () => {
    createWorkspace();
  };

  return (
    <CircleButton
      width="w-5"
      height="h-5"
      onClick={handleClick}
      disable={isPending}
      aria-label="워크스페이스 추가 버튼"
    >
      <PlusSVG width="12" height="12" />
    </CircleButton>
  );
};
