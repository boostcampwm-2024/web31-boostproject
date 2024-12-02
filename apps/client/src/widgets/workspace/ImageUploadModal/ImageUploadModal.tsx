import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

import { usePostImage } from '@/shared/hooks';
import { ModalConfirm } from '@/shared/ui';
import { parseBase64Info, parseFilename } from '@/shared/utils';
import { useImageModalStore } from '@/shared/store';
import {
  ImageTagModalList,
  ImageTagModalHeader,
  ImageTagModalImg,
  ImageTagModalSrc,
} from '@/entities';

/**
 *
 * @description
 * 이미지 태그에 사용될 이미지 파일 업로드 및 이미지 선택을 위한 모달창
 */
export const ImageUploadModal = () => {
  const { isImageUpload, imagePathList, nowImage, setNowImage } = useImageModalStore();

  const workspaceId = useParams().workspaceId as string;

  const [imageSrc, setImageSrc] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [tagSrc, setTagSrc] = useState<string>(nowImage);
  const realFileRef = useRef<File | null>(null);
  const { mutate: postImage } = usePostImage();

  useEffect(() => {
    setTagSrc(nowImage);
  }, [nowImage]);

  useEffect(() => {
    handleReset();
  }, [tagSrc]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          const src = e.target.result as string;
          setImageSrc(src);
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
      realFileRef.current = null;
      setImageSrc('');
      setInputValue('');
    }
  };

  const handleSaveImage = async () => {
    if (!imageSrc || !inputValue.trim()) {
      return toast.error('파일 업로드 후 이름을 입력해주세요.');
    }

    const temp = parseBase64Info(imageSrc);
    if (!temp || !['png', 'jpg'].includes(temp.format)) {
      return toast.error('유효한 이미지 파일만 업로드 가능합니다.');
    }

    const newImageName = `${inputValue.trim()}.${temp.format}`;
    if (imagePathList.has(newImageName)) {
      return toast.error('이미 존재하는 파일 이름입니다.');
    }

    if (!realFileRef.current) {
      return toast.error('업로드할 이미지 파일이 없습니다.');
    }

    postImage({ workspaceId, imageName: newImageName, image: realFileRef.current });
    handleReset();
  };

  return (
    <ModalConfirm isOpen={isImageUpload}>
      <div className="flex h-[36rem] w-[48rem] flex-col">
        <ImageTagModalHeader />
        <div className="flex h-full flex-grow flex-row pb-4 pt-2">
          <ImageTagModalList tagSrc={tagSrc} onSetTagSrc={setTagSrc} onHandleReset={handleReset} />
          <div className="flex h-full w-1/2 flex-col items-center py-2 pl-4">
            <div className="text-semibold-md w-full text-left">이미지 미리보기</div>
            <ImageTagModalImg imageSrc={imageSrc} tagSrc={tagSrc} />
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
            <button onClick={handleSaveImage}>이미지 파일 업로드</button>
          </div>
        </div>
        <ImageTagModalSrc tagSrc={tagSrc} onSetTagSrc={setTagSrc} />
      </div>
    </ModalConfirm>
  );
};
