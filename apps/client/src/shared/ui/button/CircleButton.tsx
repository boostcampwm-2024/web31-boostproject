import { ReactNode } from 'react';

type CircleButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

export const CircleButton = ({ children, onClick }: CircleButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-green-500 text-green-100 hover:border hover:border-green-500 hover:bg-green-100 hover:text-green-500"
    >
      {children}
    </button>
  );
};
