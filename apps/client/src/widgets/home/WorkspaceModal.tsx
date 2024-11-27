import { ModalConfirm, Spinner, SquareButton } from '@/shared/ui';

import { TButtonContent } from '@/shared/types';
import { useModalStore } from '@/shared/store/useModalStore';

export const WorkspaceModal = () => {
  const {
    isModalOpen: isOpen,
    modalContent,
    handleModalConfirmButton,
    handleModalCloseButton,
    isLoading,
  } = useModalStore();

  const buttonContents: TButtonContent[] = [
    { name: '아차차~', func: handleModalCloseButton, type: 'neutral' },
    { name: '지울래요', func: handleModalConfirmButton, type: 'danger', isDisabled: isLoading },
  ];

  return (
    <ModalConfirm isOpen={isOpen}>
      <div className="text-center">
        <div className="mb-10 flex flex-col items-center justify-center gap-3 text-center">
          <img src="./images/booduck_modal.png" width={100} height={100} />
          <p className="text-semibold-lg whitespace-pre-line text-gray-500">{modalContent}</p>
        </div>

        <div className="flex gap-3">
          {buttonContents.map((content, index) => (
            <SquareButton
              key={index}
              onClick={() => content.func()}
              variant={content.type}
              isDisabled={content.isDisabled}
            >
              <>
                {content.isDisabled ? (
                  <Spinner
                    width={4}
                    height={4}
                    foregroundColor="grayWhite"
                    backgroundColor="gray200"
                  />
                ) : (
                  content.name
                )}
              </>
            </SquareButton>
          ))}
        </div>
      </div>
    </ModalConfirm>
  );
};
