import { FocusEventHandler, KeyboardEventHandler, useState } from 'react';

import toast from 'react-hot-toast';

type WorkspaceNameInputProps = {
  workspaceName: string;
};

export const WorkspaceNameInput = ({ workspaceName }: WorkspaceNameInputProps) => {
  // TODO: 워크스페이스 이름 변경 로직 필요
  const [name, setName] = useState<string>(workspaceName || '');

  const handleBlur: FocusEventHandler<HTMLInputElement> = (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    // TODO: 이름 변경 로직 추가
    if (event.target.value === name) {
      return;
    }
    toast.error('이름 변경 실패');
    setName(event.target.value);
  };

  const handleEnter: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      handleKeyDown(e);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // TODO: 이름 변경 로직 추가
    e.currentTarget.blur();
    if (name === e.currentTarget.value) {
      return;
    }
    setName(e.currentTarget.value);
    e.preventDefault();
  };

  return (
    <>
      <input
        placeholder={name === '' ? '워크스페이스 이름' : name}
        className="placeholder:text-semibold-rg w-[272px] rounded-md border border-green-500 px-3 py-1 placeholder:text-gray-100 focus:outline-none"
        onBlur={handleBlur}
        onKeyDown={handleEnter}
      />
    </>
  );
};
