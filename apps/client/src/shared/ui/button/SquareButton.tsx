type SquareButtonProps = {
  children: string;
  variant?: 'neutral' | 'danger';
  onClick: () => void;
};

export const SquareButton = ({ children, variant = 'neutral', onClick }: SquareButtonProps) => {
  const colorClasses =
    variant === 'danger'
      ? 'bg-red-500 hover:bg-red-600 text-white'
      : 'bg-gray-50 hover:bg-gray-100 text-gray-800';

  return (
    <button onClick={onClick} className={`rounded-lg px-[72px] py-4 ${colorClasses}`}>
      {children}
    </button>
  );
};
