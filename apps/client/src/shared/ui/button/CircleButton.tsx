import { ReactNode } from 'react';

type CircleButtonProps = {
  children: ReactNode | string;
  className?: string;
  width?: string;
  height?: string;
  onClick: () => void;
  disable?: boolean;
};

/**
 *
 * @description
 * 원형 버튼 재사용 컴포넌트
 */
export const CircleButton = ({
  children,
  className,
  width,
  height,
  onClick,
  disable = false,
}: CircleButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center ${className} ${width} ${height} justify-center rounded-full bg-green-500 text-green-100 hover:border hover:border-green-500 hover:bg-green-100 hover:text-green-500 disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300`}
      // TODO: disabled의 경우 hover 효과 없애거나 hover 효과 변경 (논의 필요)
      disabled={disable}
    >
      {children}
    </button>
  );
};
