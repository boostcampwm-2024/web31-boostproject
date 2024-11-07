import PlusGreen from '@/shared/assets/plus_green.svg?react';

export const HoveredEmptyWorkspace = () => {
  return (
    <div className="flex h-[23rem] items-center justify-center border-4 border-dashed border-green-300 bg-green-100">
      <PlusGreen fill="green" />
    </div>
  );
};
