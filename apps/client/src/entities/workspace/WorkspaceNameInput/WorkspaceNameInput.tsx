import { FocusEventHandler, KeyboardEventHandler, useEffect, useState } from 'react';

import { Spinner } from '@/shared/ui';
import { useParams } from 'react-router-dom';
import { useUpdateWorkspaceName } from '@/shared/hooks';
import { useWorkspaceStore } from '@/shared/store';

/**
 * @description
 * 워크스페이스 이름을 수정할 수 있는 컴포넌트입니다.
 */
export const WorkspaceNameInput = () => {
  const { workspaceId } = useParams() as { workspaceId: string };
  const { mutate, isPending } = useUpdateWorkspaceName();
  const { name } = useWorkspaceStore();
  const [editableWorkspaceName, setEditableWorkspaceName] = useState<string>('');

  useEffect(() => {
    setEditableWorkspaceName(name);
  }, [name]);

  const handleOnChange = (value: string) => {
    setEditableWorkspaceName(value);
  };

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
          placeholder="이름을 입력해주세요"
          className="placeholder:text-semibold-rg w-[272px] rounded-md border border-green-500 px-3 py-1 placeholder:text-gray-100 focus:outline-none"
          onBlur={handleBlur}
          onKeyDown={handleEnter}
          maxLength={20}
          disabled={isPending}
          value={editableWorkspaceName}
          onChange={(e) => handleOnChange(e.target.value)}
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
