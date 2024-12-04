import { useDeleteImage, usePostImage } from '@/shared/hooks';

import { ImageTagModalListItem } from '../ImageTagModalListItem/ImageTagModalListItem';
import toast from 'react-hot-toast';
import { useImageModalStore } from '@/shared/store';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';

type ImageListProps = {
  tagSrc: string;
  // eslint-disable-next-line no-unused-vars
  onSetTagSrc: (src: string) => void;
};

/**
 * @component
 * @description
 * 실제 해당 워크스페이스 db 내에 저장되어있는 imgList 목록의 파일 이름들을 보여주는 컴포넌트입니다.
 */
export const ImageTagModalList = ({ tagSrc, onSetTagSrc }: ImageListProps) => {
  const workspaceId = useParams().workspaceId as string;
  const { mutate: deleteImage } = useDeleteImage();
  const { imageList } = useImageModalStore();
  const fileInputRef = useRef<HTMLInputElement>(null); // 이미지 파일 업로드하는 input 요소 참조
  const { mutate: postImage } = usePostImage(); // 이미지 저장을 처리하는 훅

  /**
   * 파일 업로드 핸들러
   *
   * @param event 파일 업로드 이벤트
   * @description
   * 사용자가 파일을 업로드하면 FileReader를 통해 이미지를 미리보기로 설정합니다.
   */
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/svg+xml'];
          if (!allowedTypes.includes(file.type)) {
            return handleShowError('파일이 존재하지 않거나 유효하지 않은 타입입니다.');
          }

          const filename = file.name.replace(/\.(png|jpeg|jpg|svg)$/i, '');
          const invalidChars = /[\\/:*?"<>|]/;

          if (invalidChars.test(filename)) {
            return handleShowError(
              '파일 이름에 다음 문자를 포함할 수 없습니다: \\ / : * ? " < > | .'
            );
          }

          const realFilename = file.name.replace(/\.(png|jpeg|jpg|svg)$/i, '<$1');
          if (imageList.has(realFilename)) {
            return handleShowError('이미 존재하는 파일 이름입니다.');
          }

          postImage({ workspaceId, imageName: realFilename, image: file }); // 이미지 업로드
        }
      };
      reader.readAsDataURL(file);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleClickFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleShowError = (msg: string) => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    toast.error(msg);
    return false;
  };

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
  };

  /**
   * @param imageName 이미지 파일 이름
   * @param imageSrc 이미지 파일의 실제 src
   * @description
   * 해당 이미지 파일을 db및 store에서 삭제합니다.
   */
  const handleDeleteImage = (imageName: string, imageSrc: string) => {
    deleteImage({ workspaceId, imageName });
    if (imageSrc === tagSrc) {
      onSetTagSrc('');
    }
  };

  return (
    <div className="flex h-full w-[36rem] flex-col gap-3">
      <span className="text-semibold-md w-full text-gray-400">업로드된 이미지</span>
      <div className="relative h-full w-full overflow-auto">
        <div className="absolute flex w-full flex-col">
          {Array.from(imageList.entries()).map(([filename, realSrc], index) => (
            <ImageTagModalListItem
              key={`imageList${index}`}
              isSelected={tagSrc === realSrc}
              onDeleteImage={() => handleDeleteImage(filename, realSrc)}
              onSelectImage={() => handleSelectImage(realSrc)}
              filename={filename}
            />
          ))}
        </div>
      </div>
      <button
        className="w-full rounded-lg bg-black py-3 text-center align-middle text-gray-50"
        onClick={handleClickFileInput}
      >
        이미지 업로드하기
      </button>
      <input
        className="hidden"
        type="file"
        accept="image/png, image/jpg, image/jpeg, image/svg+xml"
        onChange={handleFileChange}
        ref={fileInputRef}
      />
    </div>
  );
};
