import { ModalConfirm, SquareButton } from '@/shared/ui';

import { useDeleteWorkspace } from '@/shared/hooks';
import { useModalStore } from '@/shared/store/useModalStore';

type TbuttonContent = {
  name: string;
  func: () => void;
  type: 'neutral' | 'danger';
  isDisabled?: boolean;
};

export const WorkspaceModal = () => {
  const {
    isModalOpen: isOpen,
    closeModal: onClose,
    modalContent,
    modalAction,
    isLoading,
  } = useModalStore();

  const buttonContents: TbuttonContent[] = [
    { name: '아차차~', func: onClose, type: 'neutral' },
    { name: '지울래요', func: modalAction, type: 'danger', isDisabled: isLoading },
  ];

  return (
    <ModalConfirm isOpen={isOpen}>
      <div className="text-center">
        <div className="mb-10 flex flex-col items-center justify-center gap-3 text-center">
          <img src="./images/booduck_modal.png" width={100} height={100} />
          <p className="text-semibold-lg whitespace-pre-line leading-tight text-gray-500">
            {modalContent}
          </p>
        </div>

        <div className="flex gap-3">
          {buttonContents.map((content, index) => (
            <SquareButton
              key={index}
              onClick={() => content.func()}
              variant={content.type}
              isDisabled={content.isDisabled}
            >
              {content.name}
            </SquareButton>
          ))}
        </div>
      </div>
    </ModalConfirm>
  );
};
