import * as Blockly from 'blockly/core';

import { useEffect, useRef, useState } from 'react';
import { useDeleteImage, usePostImage } from '@/shared/hooks';

import { ModalConfirm } from '@/shared/ui';
import XIcon from '@/shared/assets/x_icon.svg?react';
import toast from 'react-hot-toast';
import { useModalStore } from '@/shared/store/useModalStore';
import { useParams } from 'react-router-dom';
import { parseBase64Info, parseFilename } from '@/shared/utils';

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
    nowImage,
    nowId,
    setNowImage,
    updateImageMap,
    setIsImageUpload,
    closeModal,
  } = useModalStore();

  const workspaceId = useParams().workspaceId as string;

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [fileUpload, setFileUpload] = useState<boolean>(false);
  const [tagSrc, setTagSrc] = useState<string>(nowImage);
  const realFileRef = useRef<File | null>(null);
  const { mutate: postImage } = usePostImage();
  const { mutate: deleteImage } = useDeleteImage();

  useEffect(() => {
    setTagSrc(nowImage);
  }, [nowImage]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(tagSrc);

    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          const src = e.target.result as string;
          setImageSrc(src);
          setFileUpload(true);
          setNowImage('');
          setInputValue(parseFilename(fileInputRef.current?.value || ''));
        }
      };
      reader.readAsDataURL(file);

      realFileRef.current = file;
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== inputValue && event.target.value !== '') {
      setInputValue(event.target.value);
    }
  };

  const handleReset = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      setImageSrc(null);
      setFileUpload(false);
      setInputValue('');
    }
  };

  const handleSaveImage = () => {
    const isValidFileFormat = (format: string | null) => {
      return format === 'png' || format === 'jpg';
    };

    const showError = (message: string) => {
      toast.error(message);
      return false;
    };

    if (!imageSrc) {
      return showError('파일 업로드 후 시도해주세요');
    }

    if (!inputValue.trim()) {
      return showError('파일 이름 입력 후 시도해주세요');
    }

    const temp = parseBase64Info(imageSrc);
    if (!temp || !isValidFileFormat(temp.format)) {
      return showError('파일이 존재하지 않거나 유효하지 않은 타입입니다.');
    }

    const newImageName = `${inputValue.trim()}.${temp.format}`;
    if (imagePathList.has(newImageName)) {
      return showError('이미 존재하는 파일 이름입니다.');
    }

    if (!realFileRef.current) {
      return showError('이미지 파일이 존재하지 않습니다.');
    }

    postImage({ workspaceId, imageName: newImageName, image: realFileRef.current });
    handleReset();
  };

  const handleSelectImage = (selectImage: string) => {
    console.log(selectImage);
    console.log(imagePathList);

    if (selectImage === tagSrc) {
      // setNowImage('');
      setTagSrc('');
    } else {
      // setNowImage(selectImage);
      setTagSrc(selectImage);
    }
    handleReset();
  };

  const handleDeleteImage = (imageName: string, imageSrc: string) => {
    if (imageSrc === tagSrc) {
      setTagSrc('');
    }
    deleteImage({ workspaceId, imageName });
  };

  const handleCloseModal = () => {
    setIsImageUpload(false);
    closeModal();
  };

  const handleInputSrc = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTagSrc(event.target.value);
  };

  const handleSaveSrc = () => {
    updateImageMap(tagSrc);

    const workspace = Blockly.getMainWorkspace(); // 워크스페이스 가져오기
    if (!workspace) {
      toast.error('워크스페이스를 찾을 수 없습니다.');
      return;
    }

    const targetBlock = workspace.getBlockById(nowId); // 현재 선택된 블록 ID로 블록 가져오기
    if (!targetBlock) {
      toast.error('블록을 찾을 수 없습니다.');
      return;
    }

    const imageField = targetBlock.getField('SRC'); // 블록 내 필드 이름으로 필드 가져오기
    if (!imageField) {
      toast.error('이미지 필드를 찾을 수 없습니다.');
      return;
    }

    imageField.setValue(tagSrc); // 필드 값 업데이트
    toast.success('필드 값이 성공적으로 업데이트되었습니다!');

    handleCloseModal();
  };

  return (
    <ModalConfirm isOpen={isOpen && isImageUpload}>
      <div className="flex h-[36rem] w-[40rem] flex-col">
        <span className="text-gray-black flex w-full flex-shrink-0 flex-row items-baseline justify-between">
          <span className="text-bold-lg">이미지 선택</span>
          <XIcon
            className="fill-gray-black cursor-pointer"
            width={'16'}
            height={'16'}
            onClick={handleCloseModal}
          />
        </span>
        <div className="flex h-full w-full flex-grow flex-row pb-4 pt-2">
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
                {filename}
                <XIcon onClick={() => handleDeleteImage(filename, realSrc)} />
              </div>
            ))}
          </div>
          <div className="flex h-full w-1/2 flex-col items-center py-2 pl-4">
            <div className="text-semibold-md w-full text-left">Image Upload</div>
            <div className="my-1 flex h-full w-full justify-items-center bg-gray-100">
              <img
                className="max-h-full max-w-full object-contain"
                src={fileUpload ? (imageSrc as string) : tagSrc}
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
                onChange={handleInputChange}
                value={inputValue}
              />
            </div>
            <button onClick={handleSaveImage}>이미지 파일 저장</button>
          </div>
        </div>
        <div className="mt-2 flex h-8 w-full flex-shrink-0 flex-row gap-2">
          <input
            className="flex-grow rounded-md border-[1px] px-2 py-1"
            value={tagSrc}
            onChange={handleInputSrc}
          />
          <button className="flex-shrink-0" onClick={handleSaveSrc}>
            src 결정
          </button>
        </div>
      </div>
    </ModalConfirm>
  );
};
