import { Spinner } from '@/shared/ui';
import { exportPreviewHtml } from '@/shared/utils';
import toast from 'react-hot-toast';
import { useState } from 'react';

export const CodeExportButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    try {
      setIsLoading(true);
      exportPreviewHtml();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="text-bold-rg rounded-full border border-gray-100 px-4 py-2 text-gray-400 transition-colors ease-in-out hover:border-gray-300 hover:bg-gray-50 hover:text-gray-300"
      disabled={isLoading}
    >
      {isLoading ? (
        <Spinner width={4} height={4} foregroundColor="grayWhite" backgroundColor="gray200" />
      ) : (
        <p>코드 내보내기</p>
      )}
    </button>
  );
};
