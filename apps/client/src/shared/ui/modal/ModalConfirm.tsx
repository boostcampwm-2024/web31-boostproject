import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type ModalConfirmProps = {
  children: ReactNode;
  isOpen: boolean;
};

export const ModalConfirm = ({ children, isOpen }: ModalConfirmProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="bg-gray-white shadow-drop rounded-3xl px-10 py-[36px]">{children}</div>
    </div>,
    document.body
  );
};
