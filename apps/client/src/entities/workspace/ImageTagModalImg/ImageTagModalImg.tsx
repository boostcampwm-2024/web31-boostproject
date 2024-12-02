import { useState, useEffect } from 'react';

type ImageTagModalImgProps = {
  imageSrc: string;
  tagSrc: string;
};

/**
 * @component
 * @description
 * 임시로 업로드된 이미지 또는 실제 src로부터 제공된 이미지의 미리보기를 표시하는 컴포넌트입니다.
 * 유효하지 않은 이미지일 경우 에러 메시지를 표시합니다.
 */
export const ImageTagModalImg = ({ imageSrc, tagSrc }: ImageTagModalImgProps) => {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
  }, [imageSrc, tagSrc]);

  return (
    <div className="my-1 flex h-full w-full justify-center bg-gray-100">
      {isError ? (
        <div className="flex h-full w-full items-center justify-center">
          <p>유효하지 않은 이미지입니다.</p>
        </div>
      ) : (
        <img
          className="max-h-full max-w-full object-contain"
          src={imageSrc !== '' ? imageSrc : tagSrc}
          alt="Preview"
          onError={() => setIsError(true)}
        />
      )}
    </div>
  );
};
