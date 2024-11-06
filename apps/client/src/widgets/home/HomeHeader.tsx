import { Logo } from '@/shared/ui';

export const HomeHeader = () => {
  return (
    <header className="bg-gray-black flex h-14 items-center justify-between">
      <div className="flex items-center gap-4">
        <Logo isDark={true} />
      </div>
      <div className="h-8 w-8 rounded-full bg-gray-300"></div>
    </header>
  );
};
