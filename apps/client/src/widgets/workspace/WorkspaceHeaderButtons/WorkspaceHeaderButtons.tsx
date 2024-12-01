import { RedoButton, SaveButton, UndoButton } from '@/entities';

export const WorkspaceHeaderButtons = () => {
  return (
    <div className="flex items-center gap-3">
      <SaveButton />
      <UndoButton />
      <RedoButton />
    </div>
  );
};
