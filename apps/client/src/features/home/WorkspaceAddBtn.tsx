import PlusSVG from '@/shared/assets/plus.svg?react';
import { CircleButton } from '@/shared/ui';

export const WorkspaceAddBtn = () => {
  const handleClick = () => {};

  return (
    <CircleButton width="w-5" height="w-5" onClick={handleClick}>
      <PlusSVG width="12" height="12" />
    </CircleButton>
  );
};
