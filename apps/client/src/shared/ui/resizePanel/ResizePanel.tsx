import { ResizePanelAlign } from '@/shared/hooks/useResize';

interface ResizePanelProps {
  onMouseDown: () => void;
  invalid?: boolean;
  align?: ResizePanelAlign;
}

export const ResizePanel = ({
  onMouseDown,
  align = ResizePanelAlign.VERTICAL,
}: ResizePanelProps) => {
  return (
    <div
      className={`${align === ResizePanelAlign.VERTICAL ? 'w-1' : 'h-1'} cursor-col-resize bg-gray-100 hover:bg-gray-200 ${align === ResizePanelAlign.VERTICAL ? 'active:w-2' : 'active:h-2'} active:bg-gray-400`}
      onMouseDown={onMouseDown}
    >
      <div></div>
    </div>
  );
};
