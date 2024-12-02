import XIcon from '@/shared/assets/x_icon.svg?react';
import { useDeleteImage } from '@/shared/hooks';
import { useImageModalStore } from '@/shared/store';
import { useParams } from 'react-router-dom';

type ImageListProps = {
  tagSrc: string;
  // eslint-disable-next-line no-unused-vars
  onSetTagSrc: (src: string) => void;
  onHandleReset: () => void;
};

/**
 * @component
 * @description
 * 실제 해당 워크스페이스 db 내에 저장되어있는 imgList 목록의 파일 이름들을 보여주는 컴포넌트입니다.
 */
export const ImageTagModalList = ({ tagSrc, onSetTagSrc, onHandleReset }: ImageListProps) => {
  const { imagePathList } = useImageModalStore();
  const workspaceId = useParams().workspaceId as string;
  const { mutate: deleteImage } = useDeleteImage();

  /**
   * @param selectImage 선택한 이미지 파일의 실제 src
   * @description
   * 이미지 리스트에 있는 파일이름을 클릭할 시 실행됩니다.
   * 현재 이미지 모달창에 설정되어있는 src와 같을 시,
   * 해당 이미지 선택을 취소하겠다는 의미로 src를 초기화시킵니다.
   * src와 다를 시 src를 선택한 이미지 파일의 실제 src로 변경시켜줍니다.
   * 만약 임시로 업로드해둔 파일이 있다면 해당 파일 및 파일과 관련된 필드들이 리셋됩니다.
   */
  const handleSelectImage = (selectImage: string) => {
    if (selectImage === tagSrc) {
      onSetTagSrc('');
    } else {
      onSetTagSrc(selectImage);
    }
    onHandleReset();
  };

  /**
   * @param imageName 이미지 파일 이름
   * @param imageSrc 이미지 파일의 실제 src
   * @description
   * 해당 이미지 파일을 db및 store에서 삭제합니다.
   */
  const handleDeleteImage = (imageName: string, imageSrc: string) => {
    if (imageSrc === tagSrc) {
      onSetTagSrc('');
    }
    deleteImage({ workspaceId, imageName });
  };

  return (
    <div className="h-full w-1/2 overflow-auto rounded-md bg-gray-100 p-4">
      {Array.from(imagePathList.entries()).map(([filename, realSrc], index) => (
        <div
          key={`imagePathList${index}`}
          className={`flex flex-row items-center justify-between rounded-md px-2 py-1 ${
            realSrc === tagSrc ? 'bg-white bg-opacity-80' : 'bg-transparent'
          }`}
          onClick={() => {
            handleSelectImage(realSrc);
          }}
        >
          {filename.replace(/</g, '.')}
          <XIcon onClick={() => handleDeleteImage(filename, realSrc)} />
        </div>
      ))}
    </div>
  );
};
