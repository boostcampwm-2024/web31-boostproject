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

export const ImageTagModalList = ({ tagSrc, onSetTagSrc, onHandleReset }: ImageListProps) => {
  const { imagePathList } = useImageModalStore();
  const workspaceId = useParams().workspaceId as string;
  const { mutate: deleteImage } = useDeleteImage();

  const handleSelectImage = (selectImage: string) => {
    if (selectImage === tagSrc) {
      onSetTagSrc('');
    } else {
      onSetTagSrc(selectImage);
    }
    onHandleReset();
  };

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
