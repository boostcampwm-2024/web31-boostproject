import { HoveredEmptyWorkspace } from '@/entities/home/HoveredEmptyWorkspace';
import { NotHoveredEmptyWorkspace } from '@/entities/home/NotHoveredEmptyWorkspace';
import { useState } from 'react';

export const EmptyWorkspace = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex h-[23rem] w-full justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-[1128px]">
        {isHovered ? <HoveredEmptyWorkspace /> : <NotHoveredEmptyWorkspace />}
      </div>
    </div>
  );
};
