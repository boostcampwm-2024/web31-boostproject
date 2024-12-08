import toast, { Toaster, useToasterStore } from 'react-hot-toast';
import { useEffect, useState } from 'react';

/**
 *
 * @description
 * 최대 개수 제한이 있는 토스트 컴포넌트
 */
export const ToasterWithMax = () => {
  const { toasts } = useToasterStore();
  const [toastLimit] = useState<number>(1);

  useEffect(() => {
    toasts
      .filter((toast) => toast.visible)
      .filter((_, idx) => idx >= toastLimit)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts, toastLimit]);

  return <Toaster position="top-center" reverseOrder={false} />;
};
