import { ModalConfirm, SquareButton } from '@/shared/ui';
import BooDuckFrontSVG from '@/shared/assets/booduck_front.svg?react';
import { useModalStore } from '@/shared/store/useModalStore';

type WorkspaceModalProps = {
  workspaceName?: string;
};

type TbuttonContent = {
  name: string;
  func: () => void;
  type: 'neutral' | 'danger';
};

export const WorkspaceModal = ({ workspaceName = '[워크스페이스 이름]' }: WorkspaceModalProps) => {
  const { isModalOpen: isOpen, closeModal: onClose } = useModalStore();

  const removeWorkspace = () => {
    // TODO: 워크스페이스 삭제
    onClose();
  };

  const buttonContents: TbuttonContent[] = [
    { name: '아차차~', func: onClose, type: 'neutral' },
    { name: '지울래요', func: removeWorkspace, type: 'danger' },
  ];

  return (
    <ModalConfirm isOpen={isOpen}>
      <div className="text-center">
        <div className="mb-10 flex flex-col items-center justify-center gap-3 text-center">
          <BooDuckFrontSVG />
          <p className="text-semibold-lg whitespace-pre-line leading-tight text-gray-500">
            {`${workspaceName}을 
            삭제하시겠습니까?`}
          </p>
        </div>

        <div className="flex gap-3">
          {buttonContents.map((content, index) => (
            <SquareButton key={index} onClick={() => content.func()} variant={content.type}>
              {content.name}
            </SquareButton>
          ))}
        </div>
      </div>
    </ModalConfirm>
  );
};
