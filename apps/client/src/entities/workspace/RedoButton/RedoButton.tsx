import { CircleButton } from '@/shared/ui';
import RightArrow from '@/shared/assets/arrow_right.svg?react';
import { useWorkspaceStore } from '@/shared/store';

/**
 * @description
 * 워크스페이스 캔버스에서 redo 기능을 실행시키는 버튼입니다.
 */
export const RedoButton = () => {
  const { workspace } = useWorkspaceStore();

  const handleRedo = () => {
    if (workspace !== null) {
      workspace.undo(true);
    }
  };

  return (
    <CircleButton onClick={handleRedo} width="w-[30px]" height="h-[30px] " aria-label="redo 버튼">
      <RightArrow />
    </CircleButton>
  );
};
