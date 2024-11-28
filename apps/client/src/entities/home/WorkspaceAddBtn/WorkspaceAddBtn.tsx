import { CircleButton } from '@/shared/ui';
import PlusSVG from '@/shared/assets/plus.svg?react';
import { useCreateWorkspace } from '@/shared/hooks';
import { useLoadingStore } from '@/shared/store';

export const WorkspaceAddBtn = () => {
  const { mutate: createWorkspace } = useCreateWorkspace();
  const { isPending } = useLoadingStore();

  const handleClick = () => {
    createWorkspace();
  };

  return (
    <CircleButton width="w-5" height="h-5" onClick={handleClick} disable={isPending}>
      <PlusSVG width="12" height="12" />
    </CircleButton>
  );
};
