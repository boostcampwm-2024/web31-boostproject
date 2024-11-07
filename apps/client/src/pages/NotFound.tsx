import { Logo } from '@/shared/ui';
import NotFoundIcon from '@/shared/assets/not_found_icon.svg?react';

// TODO: 메세지 상수화 shared/utils/constants.ts 안에 관리
export const NotFound = () => {
  return (
    <>
      <header className="flex h-14 w-full items-center border-b border-gray-100 pl-48">
        <Logo isDark={false} />
      </header>
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col gap-6">
        <NotFoundIcon />
        <p className="text-medium-md text-center text-gray-200">
          유효한 페이지가 아닙니다! <br />
          다른 페이지에서 만나요!
        </p>
      </div>
    </>
  );
};
