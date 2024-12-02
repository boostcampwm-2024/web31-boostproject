import XIcon from '@/shared/assets/x_icon.svg?react';
import { useImageModalStore } from '@/shared/store';

/**
 * @component
 * @description
 * 이미지 선택 모달의 헤더를 구성하는 컴포넌트입니다.
 * 제목과 닫기 버튼을 포함하며, 닫기 버튼 클릭 시 모달을 닫습니다.
 */
export const ImageTagModalHeader = () => {
  const { setIsImageUpload } = useImageModalStore();

  return (
    <span className="text-gray-black flex w-full flex-shrink-0 flex-row items-baseline justify-between">
      <span className="text-bold-lg">이미지 선택</span>
      <XIcon
        className="fill-gray-black cursor-pointer"
        width={'16'}
        height={'16'}
        onClick={() => setIsImageUpload(false)}
      />
    </span>
  );
};
