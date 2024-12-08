import { PropsWithChildren } from 'react';

/**
 *
 * @description
 * 워크스페이스 그리드 컴포넌트
 */
export const WorkspaceGrid = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {children}
      </div>
    </div>
  );
};
