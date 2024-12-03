type ImageTagModalButtonProps = {
  content: string;
  isBlue: boolean;
  onClick: () => void;
};

export const ImageTagModalButton = ({ content, isBlue, onClick }: ImageTagModalButtonProps) => {
  return (
    <button
      className={`h-[3.25rem] w-40 rounded-lg text-center align-middle ${isBlue ? `bg-blue-500 text-white` : `bg-gray-50 text-gray-400`}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};
