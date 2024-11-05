import BooLockLogoWhite from '@/shared/assets/boolock_logo_white.svg?react';
import BooLockIcon from '@/shared/assets/boolock_icon.svg?react';

export const HomeHeader = () => {
  return (
    <header className="flex h-14 items-center justify-between bg-[#1E272E]">
      <div className="flex items-center gap-4">
        <BooLockIcon />
        <BooLockLogoWhite />
      </div>
      <div className="h-8 w-8 rounded-full bg-gray-300"></div>
    </header>
  );
};
