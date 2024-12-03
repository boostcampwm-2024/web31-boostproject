import { useState, useEffect } from 'react';

/**
 * @component
 * @description
 * 임시로 업로드된 이미지 또는 실제 src로부터 제공된 이미지의 미리보기를 표시하는 컴포넌트입니다.
 * 유효하지 않은 이미지일 경우 에러 메시지를 표시합니다.
 */
export const ImageTagModalImg = ({ imageSrc }: { imageSrc: string }) => {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
  }, [imageSrc]);

  return (
    <div className="relative mb-2 flex h-full w-full items-center justify-center overflow-hidden rounded-xl border-[1px] border-gray-100 bg-gray-50">
      {isError ? (
        <div className="text-medium-rg text-center text-gray-200">
          오른쪽 목록에서
          <br />
          이미지를 선택해주세요
        </div>
      ) : (
        <img
          className="absolute h-full w-full object-contain"
          src={imageSrc}
          alt="Preview"
          onError={() => setIsError(true)}
        />
      )}
    </div>
  );
};
