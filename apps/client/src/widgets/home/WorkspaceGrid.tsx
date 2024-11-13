import { PropsWithChildren } from 'react';

export const WorkspaceGrid = ({ children }: PropsWithChildren) => {
  return (
    <ul className="grid-cols-list grid w-[1128px] justify-start gap-x-6 gap-y-8">{children}</ul>
  );
};
