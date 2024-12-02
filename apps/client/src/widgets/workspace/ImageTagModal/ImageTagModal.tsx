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
 * @component
 * @description
 * 이미지 업로드 및 태그 선택을 위한 모달 컴포넌트입니다.
 * 사용자는 이미지를 업로드하거나, 태그를 선택하고, 업로드된 이미지를 저장할 수 있습니다.
 */
export const ImageTagModal = () => {
  const { isModalOpen, imageList, nowImage } = useImageModalStore();
  const workspaceId = useParams().workspaceId as string;

  // 로컬 상태 관리
  const [imageSrc, setImageSrc] = useState<string>(''); // 업로드된 이미지 소스 (db에 저장x / 모달창에만 업로드)
  const fileInputRef = useRef<HTMLInputElement>(null); // 이미지 파일 업로드하는 input 요소 참조
  const [inputValue, setInputValue] = useState<string>(''); // 사용자 입력 파일 이름
  const [tagSrc, setTagSrc] = useState<string>(nowImage); // 실제로 이미지 태그에 반영될 이미지 src (src결정 버튼 눌러야 실제 반영)
  const realFileRef = useRef<File | null>(null); // 실제 업로드된 파일 참조 (db에 저장x / 모달창에만 업로드)
  const { mutate: postImage } = usePostImage(); // 이미지 저장을 처리하는 훅

  /**
   * 현재 이미지 값이 변경될 때 선택된 태그 소스를 동기화합니다.
   */
  useEffect(() => {
    setTagSrc(nowImage);
  }, [nowImage]);

  /**
   * 선택된 태그 소스가 변경되면 입력값과 파일 입력 요소를 초기화합니다.
   */
  useEffect(() => {
    handleReset();
  }, [tagSrc]);

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
          const src = e.target.result as string;
          setImageSrc(src); // 이미지 소스 업데이트
          setInputValue(parseFilename(fileInputRef.current?.value || '')); // 파일명 파싱 후 설정
        }
      };
      reader.readAsDataURL(file); // 파일 읽기
      realFileRef.current = file; // 파일 참조 저장
    }
  };

  /**
   * @param event input 변경 이벤트
   * @description
   * 업로드한 이미지 파일 이름 변경 핸들러
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== inputValue && event.target.value !== '') {
      setInputValue(event.target.value);
    }
  };

  /**
   * 이미지 업로드에 대한 입력 필드 및 파일 참조를 초기화합니다.
   */
  const handleReset = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // 파일 입력 초기화
      realFileRef.current = null; // 파일 참조 초기화
      setImageSrc(''); // 이미지 소스 초기화
      setInputValue(''); // 입력 값 초기화
    }
  };

  /**
   * 이미지 저장 핸들러
   *
   * @description
   * 입력값과 이미지 소스를 검증한 후 이미지를 업로드합니다.
   * 업로드 완료 후 필드를 초기화합니다.
   */
  const handleSaveImage = async () => {
    if (!imageSrc) {
      return toast.error('파일 업로드 후 시도해주세요');
    }

    if (!inputValue.trim()) {
      return toast.error('파일 이름 입력 후 시도해주세요');
    }

    const invalidChars = /[\\/:*?"<>|]/;
    if (invalidChars.test(inputValue)) {
      return toast.error('파일 이름에 다음 문자를 포함할 수 없습니다: \\ / : * ? " < > |');
    }

    const temp = parseBase64Info(imageSrc);
    if (!temp || !['png', 'jpg'].includes(temp.format || '')) {
      return toast.error('파일이 존재하지 않거나 유효하지 않은 타입입니다.');
    }

    const newImageName = `${inputValue.trim()}<${temp.format}`;
    if (imageList.has(newImageName)) {
      return toast.error('이미 존재하는 파일 이름입니다.');
    }

    if (!realFileRef.current) {
      return toast.error('이미지 파일이 존재하지 않습니다.');
    }

    postImage({ workspaceId, imageName: newImageName, image: realFileRef.current }); // 이미지 업로드
    handleReset();
  };

  return (
    <ModalConfirm isOpen={isModalOpen}>
      <div className="flex h-[36rem] w-[48rem] flex-col">
        <ImageTagModalHeader onClose={handleReset} />
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
