import { CircleButton } from '@/shared/ui';
import LeftArrow from '@/shared/assets/arrow_left.svg?react';
import { useWorkspaceStore } from '@/shared/store';

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
