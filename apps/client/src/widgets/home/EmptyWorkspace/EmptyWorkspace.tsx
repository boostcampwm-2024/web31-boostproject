import { HoveredEmptyWorkspace, NotHoveredEmptyWorkspace } from '@/entities';

import { useState } from 'react';

/**
 *
 * @description
 * 빈 워크스페이스 컴포넌트
 */
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
