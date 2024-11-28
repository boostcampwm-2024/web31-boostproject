import { useCallback, useState } from 'react';

export enum ResizePanelType {
  PREVIEW = 'PREVIEW',
  WORKSPACE = 'WORKSPACE',
  PROPERTY = 'PROPERTY',
}

export enum ResizePanelAlign {
  HORIZONTAL = 'HORIZONTAL',
  VERTICAL = 'VERTICAL',
}

interface UseResizePanelProps {
  minSize?: number;
  maxSize?: number;
  initialSize?: number;
  align?: ResizePanelAlign;
}

interface UseResizePanelReturn {
  size: number;
  activePanel: ResizePanelType | null;
  isMinOrMax: (size: number) => boolean;
  handleResizeStart: (
    panelType: ResizePanelType
  ) => (e: React.MouseEvent<Element, MouseEvent>) => void;
  handleResize: (e: React.MouseEvent<Element, MouseEvent>) => void;
  handleResizeEnd: () => void;
}

export const useResizePanel = ({
  minSize = 20,
  maxSize = 80,
  initialSize = 32,
  align = ResizePanelAlign.VERTICAL,
}: UseResizePanelProps = {}): UseResizePanelReturn => {
  const [activePanel, setActivePanel] = useState<ResizePanelType | null>(null);
  const [size, setSize] = useState(initialSize);

  const handleResizeStart = useCallback(
    (panelType: ResizePanelType) => (e: React.MouseEvent<Element, MouseEvent>) => {
      e.preventDefault();
      setActivePanel(panelType);
    },
    []
  );

  const handleResize = useCallback(
    (e: React.MouseEvent<Element, MouseEvent>) => {
      if (!activePanel) return;

      const container = document.querySelector('.flex.flex-1');
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const newSize =
        align === ResizePanelAlign.VERTICAL
          ? ((e.clientX - containerRect.left) / containerRect.width) * 100
          : ((e.clientY - containerRect.top) / containerRect.height) * 100;

      const clampedSize = Math.min(Math.max(newSize, minSize), maxSize);
      setSize(clampedSize);
    },
    [activePanel, minSize, maxSize, align]
  );

  const handleResizeEnd = useCallback(() => {
    setActivePanel(null);
  }, []);

  const isMinOrMax = useCallback(
    (currentSize: number) => {
      return currentSize <= minSize || currentSize >= maxSize;
    },
    [minSize, maxSize]
  );

  return {
    size,
    activePanel,
    isMinOrMax,
    handleResizeStart,
    handleResize,
    handleResizeEnd,
  };
};
