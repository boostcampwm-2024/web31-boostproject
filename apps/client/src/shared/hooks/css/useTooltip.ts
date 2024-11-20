import { useEffect, useRef, useState } from 'react';

import { useWindowSize } from '@/shared/hooks';

export const useTooltip = () => {
  const [offsetX, setOffsetX] = useState<number>(-1);
  const [offsetY, setOffsetY] = useState<number>(-1);

  const [leftX, setLeftX] = useState<number>(0);
  const [topY, setTopY] = useState<number>(0);

  const tooltipRef = useRef<HTMLDivElement>(null);

  const { screenWidth, screenHeight } = useWindowSize();

  useEffect(() => {
    const tooltipWidth = tooltipRef.current?.offsetWidth || 0;
    const tooltipHeight = tooltipRef.current?.offsetHeight || 0;

    setLeftX(offsetX);
    if (offsetX + tooltipWidth > screenWidth) {
      setLeftX(-offsetX + tooltipWidth); // 너비를 벗어나는 것임
    } else {
      setLeftX(offsetX);
    }

    if (offsetY + tooltipHeight > screenHeight) {
      setTopY(-offsetY + tooltipHeight); // 높이를 벗어나는 것임
    } else {
      setTopY(offsetY);
    }
  }, [offsetX, offsetY, screenWidth, screenHeight]);

  return { offsetX, setOffsetX, offsetY, setOffsetY, leftX, topY, tooltipRef };
};
