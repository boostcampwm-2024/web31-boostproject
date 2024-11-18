import { FocusEventHandler, KeyboardEventHandler } from 'react';

import { Spinner } from '@/shared/ui';
import { useParams } from 'react-router-dom';
import { useUpdateWorkspaceName } from '@/shared/hooks';
import { useWorkspaceStore } from '@/shared/store';

export const WorkspaceNameInput = () => {
  const { workspaceId } = useParams() as { workspaceId: string };
  const { name } = useWorkspaceStore();
  const { mutate, isPending } = useUpdateWorkspaceName();

  const handleBlur: FocusEventHandler<HTMLInputElement> = (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    if (event.target.value === name || event.target.value === '') {
      return;
    }
    mutate({ workspaceId, newName: event.target.value });
  };

  const handleEnter: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      handleKeyDown(e);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.currentTarget.blur();
    if (name === e.currentTarget.value || e.currentTarget.value === '') {
      return;
    }
    mutate({ workspaceId, newName: e.currentTarget.value });
    e.preventDefault();
  };

  return (
    <>
      <div className="relative flex items-center">
        <input
          placeholder={name === '' ? '워크스페이스 이름' : name}
          className="placeholder:text-semibold-rg w-[272px] rounded-md border border-green-500 px-3 py-1 placeholder:text-gray-100 focus:outline-none"
          onBlur={handleBlur}
          onKeyDown={handleEnter}
          maxLength={20}
          disabled={isPending}
        />
        {isPending && (
          <div className="absolute right-5">
            <Spinner width={4} height={4} foregroundColor="green500" backgroundColor="gray200" />
          </div>
        )}
      </div>
    </>
  );
};
