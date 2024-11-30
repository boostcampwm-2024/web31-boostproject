import { PropsWithChildren } from 'react';

/**
 *
 * @description
 * 워크스페이스 그리드 컴포넌트
 */
export const WorkspaceGrid = ({ children }: PropsWithChildren) => {
  return (
    <ul className="grid-cols-list grid w-[1128px] justify-start gap-x-6 gap-y-8">{children}</ul>
  );
};
