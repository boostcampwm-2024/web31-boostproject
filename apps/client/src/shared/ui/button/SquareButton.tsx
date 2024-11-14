type SquareButtonProps = {
  children: string;
  variant?: 'neutral' | 'danger';
  onClick: () => void;
  isDisabled?: boolean;
};

export const SquareButton = ({
  children,
  variant = 'neutral',
  onClick,
  isDisabled,
}: SquareButtonProps) => {
  const colorClasses =
    variant === 'danger'
      ? 'bg-red-500 hover:bg-red-600 text-white'
      : 'bg-gray-50 hover:bg-gray-100 text-gray-300';
  return (
    <button
      onClick={onClick}
      className={`text-bold-md rounded-lg px-[72px] py-4 ${colorClasses}`}
      disabled={isDisabled && true}
    >
      {children}
    </button>
  );
};
