import { createPortal } from 'react-dom';
import { forwardRef } from 'react';

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
        className={`text-gray-white fixed left-0 top-0 rounded-3xl ${topY >= 0 ? 'rounded-tl-none' : 'rounded-bl-none'} bg-green-500 px-3 py-2`}
        style={{ left: `${leftX + 16}px`, top: topY >= 0 ? `${topY + 4}px` : `${-topY}px` }}
        ref={ref}
      >
        <p>{description}</p>
      </div>,
      document.body
    );
  }
);
