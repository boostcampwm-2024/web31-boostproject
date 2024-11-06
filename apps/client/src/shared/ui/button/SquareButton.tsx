type SquareButtonProps = {
  children: string;
  onClick: () => void;
};

export const SquareButton = ({ children, onClick }: SquareButtonProps) => {
  // TODO: y/n버튼 구분
  return (
    <button
      onClick={onClick}
      className={`rounded-lg bg-red-500 px-[72px] py-4 text-white hover:bg-red-600`}
    >
      {children}
    </button>
  );
};
