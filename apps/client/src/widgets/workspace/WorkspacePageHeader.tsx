import { RedoButton, SaveButton, UndoButton, WorkspaceNameInput } from '@/entities';

import { Logo } from '@/shared/ui';
import { TgetWorkspaceResponse } from '@/shared/types';

type WorkspacePageHeaderProps = {
  workspace: TgetWorkspaceResponse;
};

export const WorkspacePageHeader = ({ workspace }: WorkspacePageHeaderProps) => {
  return (
    <div className="flex h-14 w-full items-center justify-between border-b border-gray-100 pl-8 pr-4">
      <div className="flex items-center gap-5">
        <Logo isBlack={false} />
        <WorkspaceNameInput workspaceName={workspace.workspaceDto.name} />
      </div>
      <div className="flex items-center gap-3">
        <SaveButton />
        <UndoButton />
        <RedoButton />
      </div>
    </div>
  );
};
