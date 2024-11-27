import { CircleButton } from '@/shared/ui';
import RightArrow from '@/shared/assets/arrow_right.svg?react';
import { useWorkspaceStore } from '@/shared/store';

export const RedoButton = () => {
  const { workspace } = useWorkspaceStore();

  const handleRedo = () => {
    if (workspace !== null) {
      workspace.undo(true);
    }
  };

  return (
    <CircleButton onClick={handleRedo} width="w-[30px]" height="h-[30px]">
      <RightArrow />
    </CircleButton>
  );
};
