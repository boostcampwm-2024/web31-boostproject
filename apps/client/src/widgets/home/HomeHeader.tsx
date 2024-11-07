import { Logo } from '@/shared/ui';

type HomeHeaderProps = {
  isBlack: boolean;
};

export const HomeHeader = ({ isBlack }: HomeHeaderProps) => {
  return (
    <header
      className={`${isBlack ? 'bg-gray-black' : 'border-b border-gray-100 bg-white'} flex h-14 items-center justify-center px-10`}
    >
      {/* TODO: 나중에 크기 수정할 것 */}
      <div className="flex w-[1128px] items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo isBlack={isBlack} />
        </div>
        <div className="h-8 w-8 rounded-full bg-gray-300"></div>
      </div>
    </header>
  );
};
