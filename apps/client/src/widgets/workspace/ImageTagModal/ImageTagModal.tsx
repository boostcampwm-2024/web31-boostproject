import * as Blockly from 'blockly/core';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { ModalConfirm } from '@/shared/ui';
import { useImageModalStore } from '@/shared/store';
import { ImageTagModalList, ImageTagModalImg, ImageTagModalButton } from '@/entities';

/**
 * @component
 * @description
 * 이미지 업로드 및 태그 선택을 위한 모달 컴포넌트입니다.
 * 사용자는 이미지를 업로드하거나, 태그를 선택하고, 업로드된 이미지를 저장할 수 있습니다.
 */
export const ImageTagModal = () => {
  const { isModalOpen, nowImage, setIsModalOpen, updateImageMap, nowId } = useImageModalStore();

  const [tagSrc, setTagSrc] = useState<string>(nowImage); // 실제로 이미지 태그에 반영될 이미지 src (src결정 버튼 눌러야 실제 반영)

  /**
   * 현재 이미지 값이 변경될 때 선택된 태그 소스를 동기화합니다.
   */
  useEffect(() => {
    setTagSrc(nowImage);
  }, [nowImage]);

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
    <ModalConfirm isOpen={isModalOpen}>
      <div className="flex h-[42.5rem] w-[63rem] flex-col">
        <span className="text-semibold-lg mb-6 w-full text-black">이미지 선택하기</span>
        <div className="flex h-full flex-row gap-6">
          <ImageTagModalList tagSrc={tagSrc} onSetTagSrc={setTagSrc} />
          <div className="flex h-full w-full flex-col gap-3">
            <span className="text-semibold-md w-full text-gray-400">이미지 미리보기</span>
            <ImageTagModalImg imageSrc={tagSrc} />
            <input
              className="w-full rounded-lg border-[1px] px-5 py-3 align-middle text-gray-200 focus:outline-none"
              value={tagSrc}
              onChange={(e) => setTagSrc(e.target.value)}
              placeholder="이미지 URL을 일력해주세요."
            />
          </div>
        </div>
        <div className="mt-9 flex w-full flex-row justify-end gap-3">
          <ImageTagModalButton
            content="닫기"
            isBlue={false}
            onClick={() => {
              setIsModalOpen(false);
            }}
            aria-label="이미지 태그 모달 닫기 버튼"
          />
          <ImageTagModalButton
            content="이미지 선택하기"
            isBlue={true}
            onClick={() => handleSaveSrc()}
            aria-label="이미지 선택하기 버튼"
          />
        </div>
      </div>
    </ModalConfirm>
  );
};
