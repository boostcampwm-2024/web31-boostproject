import TrashSVG from '@/shared/assets/trash.svg?react';

type ImageListItemProps = {
  isSelected: boolean;
  onSelectImage: () => void;
  onDeleteImage: () => void;
  filename: string;
};

export const ImageTagModalListItem = ({
  isSelected,
  onDeleteImage,
  onSelectImage,
  filename,
}: ImageListItemProps) => {
  return (
    <div
      className={`flex w-full flex-row items-center justify-between p-5 ${
        isSelected ? 'bg-gray-50 text-gray-500' : 'text-gray-300'
      } border-b-[1px] border-gray-50`}
      onClick={onSelectImage}
    >
      {filename.replace(/</g, '.')}
      <TrashSVG width="16" height="16" className="hover:text-red-500" onClick={onDeleteImage} />
    </div>
  );
};
