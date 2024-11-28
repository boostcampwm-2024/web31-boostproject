import { HoveredEmptyWorkspace, NotHoveredEmptyWorkspace } from '@/entities';

import { useState } from 'react';

export const EmptyWorkspace = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex h-[23rem] w-full justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full">
        {isHovered ? <HoveredEmptyWorkspace /> : <NotHoveredEmptyWorkspace />}
      </div>
    </div>
  );
};
