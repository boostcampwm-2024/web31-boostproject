import LeftArrow from '@/shared/assets/left_arrow_icon.svg?react';
import Logo from '@/shared/assets/boolock_logo.svg?react';
import RightArrow from '@/shared/assets/right_arrow_icon.svg?react';

export const WorkspaceHeader = () => {
  return (
    <div className="flex h-14 w-full items-center justify-between border-b border-gray-100 pl-8 pr-4">
      <div className="flex items-center gap-5">
        <Logo className="w-28" />
        <input
          placeholder="워크스페이스 이름"
          className="placeholder:text-semibold-rg w-[272px] rounded-md border border-green-500 px-3 py-1 placeholder:text-gray-100 focus:outline-none"
        />
      </div>
      <div className="flex items-center gap-3">
        <button className="text-bold-rg w-16 rounded-[30px] bg-green-500 py-2 text-green-100 hover:border hover:border-green-500 hover:bg-green-100 hover:text-green-500">
          저장
        </button>
        <button className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-green-500 text-green-100 hover:border hover:border-green-500 hover:bg-green-100 hover:text-green-500">
          <LeftArrow className="h-4 w-4" />
        </button>
        <button className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-green-500 text-green-100 hover:border hover:border-green-500 hover:bg-green-100 hover:text-green-500">
          <RightArrow className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
