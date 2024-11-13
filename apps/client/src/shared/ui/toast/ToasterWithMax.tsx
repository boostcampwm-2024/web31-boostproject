import toast, { Toaster, useToasterStore } from 'react-hot-toast';
import { useEffect, useState } from 'react';

export const ToasterWithMax = () => {
  const { toasts } = useToasterStore();
  const [toastLimit, _setToastLimit] = useState<number>(1);

  useEffect(() => {
    toasts
      .filter((toast) => toast.visible)
      .filter((_, idx) => idx >= toastLimit)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts, toastLimit]);

  return <Toaster position="bottom-center" reverseOrder={false} />;
};
