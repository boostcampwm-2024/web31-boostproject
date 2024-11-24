import { ReactNode } from 'react';

type CircleButtonProps = {
  children: ReactNode;
  width: string;
  height: string;
  onClick: () => void;
  disable?: boolean;
};

export const CircleButton = ({
  children,
  width,
  height,
  onClick,
  disable = false,
}: CircleButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center ${width} ${height} justify-center rounded-full bg-green-500 text-green-100 hover:border hover:border-green-500 hover:bg-green-100 hover:text-green-500`}
      disabled={disable}
    >
      {children}
    </button>
  );
};
