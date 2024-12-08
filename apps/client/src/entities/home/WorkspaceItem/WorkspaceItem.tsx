import TrashSVG from '@/shared/assets/trash.svg?react';
import { formatRelativeOrAbsoluteDate } from '@/shared/utils';
import { useDeleteWorkspace } from '@/shared/hooks';
import { useModalStore } from '@/shared/store';

type WorkspaceItemProps = {
  workspaceId: string;
  title: string;
  thumbnail: string;
  lastEdited: string;
  onClick: () => void;
};

/**
 *
 * @description
 * 워크스페이스 아이템 컴포넌트
 */
export const WorkspaceItem = ({
  workspaceId,
  title,
  thumbnail,
  lastEdited,
  onClick,
}: WorkspaceItemProps) => {
  const {
    openModal: onOpen,
    closeModal,
    setModalContent,
    setHandleModalCloseButton,
    setHandleModalConfirmButton,
  } = useModalStore();
  const { mutate } = useDeleteWorkspace();

  const handleOnclick = () => {
    setModalContent(`${title}을(를)
      삭제하겠습니까?`);
    setHandleModalCloseButton(() => {
      closeModal();
    });
    setHandleModalConfirmButton(() => {
      mutate(workspaceId);
    });
    onOpen();
  };

  return (
    <div className="relative overflow-hidden rounded-lg bg-white shadow-md">
      <button
        className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white p-2 text-gray-300 transition-colors hover:bg-red-500 hover:text-white"
        onClick={handleOnclick}
        aria-label="워크스페이스 삭제 버튼"
      >
        <TrashSVG width={16} />
      </button>
      <div className="cursor-pointer" onClick={onClick}>
        <div className="flex h-[180px] overflow-hidden border-b border-gray-50 bg-gray-50">
          {thumbnail && (
            <img
              src={thumbnail}
              alt="workspace thumbnail"
              className="w-full object-cover object-left-top"
            />
          )}
        </div>
        <aside className="p-4 pb-6">
          <h2 className="text-bold-md mb-1.5 text-gray-500">{title}</h2>
          <p className="text-medium-sm text-gray-400">{formatRelativeOrAbsoluteDate(lastEdited)}</p>
        </aside>
      </div>
    </div>
  );
};
