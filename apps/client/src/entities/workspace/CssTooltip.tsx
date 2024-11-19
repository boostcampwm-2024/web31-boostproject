import { forwardRef } from 'react';
import { createPortal } from 'react-dom';

type CssTooltipProps = {
  description: string;
  isOpen: boolean;
  leftX: number;
  topY: number;
};

export const CssTooltip = forwardRef<HTMLDivElement, CssTooltipProps>(
  ({ description, isOpen, leftX, topY }, ref) => {
    if (!isOpen) {
      return null;
    }

    return createPortal(
      <div
        className="text-gray-white fixed left-0 top-0 z-50 bg-gray-500 px-3 py-2"
        style={{ left: `${leftX}px`, top: `${topY}px` }}
        ref={ref}
      >
        <p>{description}</p>
      </div>,
      document.body
    );
  }
);
