import { CircleButton } from '@/shared/ui';
import LeftArrow from '@/shared/assets/arrow_left.svg?react';

//TODO Undo 로직 추가
export const UndoButton = () => {
  return (
    <CircleButton onClick={() => {}}>
      <LeftArrow />
    </CircleButton>
  );
};
