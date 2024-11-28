import { CircleButton } from '@/shared/ui';
import LeftArrow from '@/shared/assets/arrow_left.svg?react';
import { useWorkspaceStore } from '@/shared/store';

/**
 *
 * @description
 * 워크스페이스 캔버스에서 undo 기능을 실행시키는 버튼입니다.
 */
export const UndoButton = () => {
  const { workspace } = useWorkspaceStore();

  const handleUndo = () => {
    if (workspace !== null) {
      workspace.undo(false);
    }
  };

  return (
    <CircleButton onClick={handleUndo} width="w-[30px]" height="h-[30px]">
      <LeftArrow />
    </CircleButton>
  );
};
