import { RedoButton, SaveButton, UndoButton, WorkspaceNameInput } from '@/entities';
import { usePreventLeave } from '@/shared/hooks';

import { Logo } from '@/shared/ui';

export const WorkspacePageHeader = () => {
  const { handlePopState } = usePreventLeave();

  return (
    <div className="flex h-14 w-full flex-shrink-0 items-center justify-between border-b border-gray-100 bg-white pl-8 pr-4">
      <div className="flex items-center gap-5">
        <Logo isBlack={false} onClick={handlePopState} />
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
