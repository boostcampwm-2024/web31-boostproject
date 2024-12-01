import { FocusEventHandler, useRef, useState } from 'react';

import { ModalConfirm } from '@/shared/ui';
import { useModalStore } from '@/shared/store/useModalStore';
import toast from 'react-hot-toast';
import XIcon from '@/shared/assets/x_icon.svg?react';

type ParsedBase64Info = {
  mimeType: string;
  format: string;
};

const parseBase64Info = (dataUrl: string): ParsedBase64Info | null => {
  const dataUrlRegex = /^data:(?<mimeType>[a-z]+\/[a-z0-9.-]+);base64,/i;
  const match = dataUrl.match(dataUrlRegex);

  if (!match || !match.groups) {
    return null;
  }

  const { mimeType } = match.groups;
  const format = mimeType.split('/')[1];

  return {
    mimeType,
    format,
  };
};

const parseFilename = (path: string) => {
  return (
    path
      .split(/(\\|\/)/)
      .pop()
      ?.split('.')[0] || ''
  );
};

/**
 *
 * @description
 * 워크스페이스 삭제 모달 컴포넌트
 */
export const ImageUploadModal = () => {
  const {
    isModalOpen: isOpen,
    isImageUpload,
    imagePathList,
    nowId,
    nowImage,
    pushImagePath,
    setNowImage,
    updateImageMap,
    setIsImageUpload,
    closeModal,
    deleteImagePath,
  } = useModalStore();

  const [imageSrc, setImageSrc] = useState<string | null>(null); // 이미지 미리보기 URL 저장
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [fileUpload, setFileUpload] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // 선택한 파일 가져오기
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          const src = e.target.result as string;
          setImageSrc(src); // Base64 URL 저장
          setFileUpload(true);
          setNowImage('');
          setInputValue(parseFilename(fileInputRef.current?.value || ''));
        }
      };
      reader.readAsDataURL(file); // 파일 읽기
    }
  };

  const handleInputChange: FocusEventHandler<HTMLInputElement> = (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    if (event.target.value === inputValue || event.target.value === '') {
      return;
    }
    setInputValue(event.target.value);
  };

  const handleReset = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // 파일 입력 초기화
      setImageSrc(null);
      setFileUpload(false);
      setInputValue('');
    }
  };

  const handleAddImage = () => {
    if (imageSrc === null) {
      toast.error('파일 업로드 후 시도해주세요');
      return;
    }

    if (inputValue === '') {
      toast.error('파일 이름 입력 후 시도해주세요');
      return;
    }

    const temp = parseBase64Info(imageSrc);
    if (temp === null || (temp !== null && temp.format !== 'png' && temp.format !== 'jpg')) {
      toast.error('파일이 존재하지 않거나 유효하지 않은 타입입니다.');
      return;
    }

    const newFilename = `${inputValue}.${temp.format}`;
    if (newFilename in imagePathList) {
      toast.error('이미 존재하는 파일 이름입니다.');
      return;
    }
    pushImagePath(newFilename, { src: imageSrc, isUpload: true });
    setNowImage(newFilename);
    handleReset();
  };

  const handleSelectImage = (filename: string) => {
    handleReset();
    if (filename === nowImage) {
      updateImageMap(nowId, '');
      setNowImage('');
    } else {
      updateImageMap(nowId, nowImage);
      setNowImage(filename);
    }
  };

  const handleDeleteImage = (filename: string) => {
    if (filename === nowImage) {
      setNowImage('');
    }
    deleteImagePath(filename);
  };

  const handleCloseModal = () => {
    setIsImageUpload(false);
    closeModal();
  };

  return (
    <ModalConfirm isOpen={isOpen && isImageUpload}>
      <div className="h-[28rem] w-[36rem]">
        <span className="text-gray-black flex flex-row items-baseline justify-between">
          <span className="text-bold-lg">이미지 선택</span>{' '}
          <XIcon
            className="fill-gray-black cursor-pointer"
            width={'16'}
            height={'16'}
            onClick={handleCloseModal}
          />
        </span>
        <div className="flex h-full w-full flex-row pb-4 pt-2">
          <div className="h-full w-1/2 overflow-auto rounded-md bg-gray-100 p-4">
            {Object.entries(imagePathList).map(([filename], index) => (
              <div
                key={`imagePathList${index}`}
                className={`flex flex-row items-center justify-between rounded-md px-2 py-1 ${filename === nowImage ? 'bg-white bg-opacity-80' : 'bg-transparent'}`}
                onClick={() => {
                  handleSelectImage(filename);
                }}
              >
                {filename}
                <XIcon onClick={() => handleDeleteImage(filename)} />
              </div>
            ))}
          </div>
          <div className="flex h-full w-1/2 flex-col items-center py-2 pl-4">
            <div className="text-semibold-md w-full text-left">Image Upload</div>
            <div className="my-1 flex h-full w-full justify-items-center bg-gray-100">
              <img
                className="max-h-full max-w-full object-contain"
                src={
                  fileUpload
                    ? imageSrc || ''
                    : imagePathList[nowImage]
                      ? imagePathList[nowImage].src
                      : ''
                }
                alt="Preview"
              />
            </div>
            <input
              className="w-full"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            <div className="flex w-full flex-row items-center gap-2">
              <span className="flex-shrink-0">파일명</span>
              <input
                className="my-1 flex-grow rounded-md border-[1px] border-gray-600 px-2 py-1"
                onBlur={handleInputChange}
                value={inputValue}
              />
            </div>
            <button onClick={handleAddImage}>이미지 파일 저장</button>
          </div>
        </div>
      </div>
    </ModalConfirm>
  );
};
