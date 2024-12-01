import { Logo } from '@/shared/ui';

type HomeHeaderProps = {
  isBlack: boolean;
};

/**
 *
 * @description
 * 홈페이지 헤더 컴포넌트
 */
export const HomeHeader = ({ isBlack }: HomeHeaderProps) => {
  return (
    <header
      className={`${isBlack ? 'bg-gray-black' : 'border-b border-gray-100 bg-white'} flex h-14 w-full items-center justify-center px-4 xl:px-0`}
    >
      <div className="flex w-[1128px] items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo isBlack={isBlack} />
        </div>
      </div>
    </header>
  );
};
