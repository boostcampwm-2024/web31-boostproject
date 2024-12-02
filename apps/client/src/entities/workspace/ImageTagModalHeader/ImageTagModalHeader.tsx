import XIcon from '@/shared/assets/x_icon.svg?react';
import { useImageModalStore } from '@/shared/store';

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
