import { createPortal } from 'react-dom';

type CssTooltipProps = {
  description: string;
  isOpen: boolean;
  leftX: number;
  topY: number;
};

export const CssTooltip = ({ description, isOpen, leftX, topY }: CssTooltipProps) => {
  if (!isOpen) {
    return null;
  }
  return createPortal(
    <div
      className={`${isOpen ? '' : 'invisible'} text-gray-white fixed left-0 top-0 rounded-3xl ${topY >= 0 ? 'rounded-tl-none' : 'rounded-bl-none'} bg-green-500 px-3 py-2`}
      style={{ left: `${leftX + 18}px`, top: topY >= 0 ? `${topY + 8}px` : `${-topY}px` }}
    >
      <p>{description}</p>
    </div>,
    document.body
  );
};
