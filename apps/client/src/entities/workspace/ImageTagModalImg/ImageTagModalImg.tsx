import { useState, useEffect } from 'react';

type ImageTagModalImgProps = {
  imageSrc: string;
  tagSrc: string;
};

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
