import { ModalConfirm, SquareButton } from '@/shared/ui';
import BooDuckFrontSVG from '@/shared/assets/booduck_front.svg?react';

type WorkspaceModalProps = {
  workspaceName?: string;
  isOpen: boolean;
  onClose: () => void;
};

type TbuttonContent = {
  name: string;
  func: () => void;
  type: 'neutral' | 'danger';
};

export const WorkspaceModal = ({
  workspaceName = '[워크스페이스 이름]',
  isOpen,
  onClose,
}: WorkspaceModalProps) => {
  const removeWorkspace = () => {};

  const buttonContents: TbuttonContent[] = [
    { name: '아차차~', func: removeWorkspace, type: 'neutral' },
    { name: '지울래요', func: onClose, type: 'danger' },
  ];

  return (
    <ModalConfirm isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <div className="mb-10 flex flex-col items-center justify-center gap-3 text-center">
          <BooDuckFrontSVG />
          <p className="text-semibold-lg whitespace-pre-line text-gray-500">
            {`${workspaceName}을 
            삭제하시겠습니까?`}
          </p>
        </div>

        <div className="flex gap-3">
          {buttonContents.map((content, index) => (
            <SquareButton key={index} onClick={() => content.func} variant={content.type}>
              {content.name}
            </SquareButton>
          ))}
        </div>
      </div>
    </ModalConfirm>
  );
};
