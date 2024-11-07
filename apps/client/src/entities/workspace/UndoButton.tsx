import { CircleButton } from '@/shared/ui';
import LeftArrow from '@/shared/assets/arrow_left.svg?react';

// TODO: Undo 로직 추가
export const UndoButton = () => {
  return (
    <CircleButton onClick={() => {}} width="w-[30px]" height="h-[30px]">
      <LeftArrow />
    </CircleButton>
  );
};
