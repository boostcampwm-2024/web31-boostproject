import { useState } from 'react';
import EmptyIcon from '@/shared/assets/empty_workspace.svg?react';
import HoveredEmptyWorkspace from '@/shared/assets/hovered_empty_workspace.svg?react';

export const EmptyWorkspace = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {isHovered ? <HoveredEmptyWorkspace /> : <EmptyIcon />}
    </div>
  );
};