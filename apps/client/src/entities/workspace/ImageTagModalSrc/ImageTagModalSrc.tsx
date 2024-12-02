import * as Blockly from 'blockly/core';
import toast from 'react-hot-toast';

import { useImageModalStore } from '@/shared/store';

type ImageTagModalSrcProps = {
  tagSrc: string;
  // eslint-disable-next-line no-unused-vars
  onSetTagSrc: (src: string) => void;
};

/**
 * @component
 * @description
 * 실제 img태그에 할당할 src 주소를 직접 수정할 수 있고, 결정할 수 있는 컴포넌트입니다.
 */
export const ImageTagModalSrc = ({ tagSrc, onSetTagSrc }: ImageTagModalSrcProps) => {
  const { nowId, updateImageMap, setIsModalOpen } = useImageModalStore();

  /**
   * @description
   * 현재 워크스페이스에서 nowId에 맞는 블록을 찾아 이미지 src를 저장합니다.
   * src는 블록의 SRC 필드와 이미지 맵에 업데이트됩니다.
   * 성공적으로 저장된 경우 모달창을 닫습니다.
   */
  const handleSaveSrc = () => {
    const workspace = Blockly.getMainWorkspace();
    if (!workspace) return toast.error('워크스페이스를 찾을 수 없습니다.');

    const targetBlock = workspace.getBlockById(nowId);
    if (!targetBlock) return toast.error('블록을 찾을 수 없습니다.');

    const imageField = targetBlock.getField('SRC');
    if (!imageField) return toast.error('이미지 필드를 찾을 수 없습니다.');

    imageField.setValue(tagSrc);
    updateImageMap(tagSrc);
    toast.success('이미지가 성공적으로 저장되었습니다.');
    setIsModalOpen(false);
  };

  return (
    <div className="mt-2 flex h-8 w-full flex-shrink-0 flex-row gap-2">
      <input
        className="flex-grow rounded-md border-[1px] px-2 py-1"
        value={tagSrc}
        onChange={(e) => onSetTagSrc(e.target.value)}
      />
      <button className="flex-shrink-0" onClick={handleSaveSrc}>
        src 결정
      </button>
    </div>
  );
};
