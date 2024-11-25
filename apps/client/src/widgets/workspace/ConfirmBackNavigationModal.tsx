import { ModalConfirm, SquareButton } from '@/shared/ui';

import { TbuttonContent } from '@/shared/types';
import { useModalStore } from '@/shared/store';

export const ConfirmBackNavigationModal = () => {
  const { isModalOpen, modalContent, handleModalCloseButton, handleModalConfirmButton } =
    useModalStore();

  const buttonContentList: TbuttonContent[] = [
    { name: '닫기', func: handleModalCloseButton, type: 'neutral' },
    { name: '나가기', func: handleModalConfirmButton, type: 'danger' },
  ];

  return (
    <ModalConfirm isOpen={isModalOpen}>
      <div className="text-center">
        <div className="mb-10 flex flex-col items-center justify-center gap-3">
          <img src="/images/booduck_modal.png" width={100} height={100} />
          <p className="text-semibold-lg whitespace-pre-line text-gray-500">{modalContent}</p>
        </div>

        <div className="flex gap-3">
          {buttonContentList.map((buttonProps, idx) => (
            <SquareButton key={idx} onClick={() => buttonProps.func()} variant={buttonProps.type}>
              {buttonProps.name}
            </SquareButton>
          ))}
        </div>
      </div>
    </ModalConfirm>
  );
};
