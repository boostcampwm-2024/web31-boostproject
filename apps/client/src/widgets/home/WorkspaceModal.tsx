import { ModalConfirm, SquareButton } from '@/shared/ui';

type WorkspaceModalProps = {};

export const WorkspaceModal = () => {
  const removeWorkspace = () => {};
  const closeModal = () => {};

  const buttonContents = [
    { name: '아차차~', func: removeWorkspace },
    { name: '지울래요', func: closeModal },
  ];

  return (
    <ModalConfirm>
      <p>[워크스페이스 이름]을 삭제하시겠습니까?</p>
      <div>
        {buttonContents.map((content, index) => (
          <SquareButton key={index} onClick={content.func}>
            {content.name}
          </SquareButton>
        ))}
      </div>
    </ModalConfirm>
  );
};
