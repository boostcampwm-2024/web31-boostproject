import { ReactNode } from 'react';

type CircleButtonProps = {
  children: ReactNode | string;
  className?: string;
  width?: string;
  height?: string;
  onClick: () => void;
  disable?: boolean;
  variant?: 'filled' | 'outlined';
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
  variant = 'filled',
}: CircleButtonProps) => {
  const baseClasses = `flex items-center justify-center rounded-full disabled:cursor-not-allowed ${width} ${height}`;
  const filledClasses = `bg-green-500 text-green-100 hover:border hover:border-green-500 hover:bg-green-100 hover:text-green-500 disabled:border-green-300 disabled:bg-green-300`;
  const outlinedClasses = `border border-gray-100 text-gray-300 hover:text-gray-500 hover:border-gray-300`;

  const variantClasses = variant === 'filled' ? filledClasses : outlinedClasses;

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
      disabled={disable}
    >
      {children}
    </button>
  );
};
