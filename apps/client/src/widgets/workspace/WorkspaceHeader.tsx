import { RedoButton, SaveButton, UndoButton, WorkspaceNameInput } from '@/features';
import Logo from '@/shared/assets/boolock_logo.svg?react';

export const WorkspaceHeader = () => {
  return (
    <div className="flex h-14 w-full items-center justify-between border-b border-gray-100 pl-8 pr-4">
      <div className="flex items-center gap-5">
        <Logo className="w-28" />
        <WorkspaceNameInput />
      </div>
      <div className="flex items-center gap-3">
        <SaveButton />
        <UndoButton />
        <RedoButton />
      </div>
    </div>
  );
};
