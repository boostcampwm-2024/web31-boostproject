import { Logo } from '@/shared/ui';

/**
 *
 * @description
 * 홈페이지 헤더 컴포넌트
 */
export const HomeHeader = () => {
  return (
    <header
      className={`fixed z-30 flex h-14 w-full items-center justify-center border-b border-gray-100 bg-white px-4 xl:px-0`}
    >
      <div className="flex w-[1128px] items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo isBlack={false} />
        </div>
      </div>
    </header>
  );
};
