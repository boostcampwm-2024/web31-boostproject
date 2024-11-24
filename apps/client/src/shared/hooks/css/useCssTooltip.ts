import { useCssTooltipStore } from '@/shared/store';
import { useEffect } from 'react';
import { useWindowSize } from '@/shared/hooks';

export const useCssTooltip = () => {
  const { leftX, topY, offsetX, offsetY, setLeftX, setTopY } = useCssTooltipStore();

  const { screenWidth, screenHeight } = useWindowSize();

  useEffect(() => {
    const tooltipHeight = 40;
    setLeftX(offsetX);
    if (offsetY + tooltipHeight > screenHeight) {
      setTopY(-offsetY + tooltipHeight); // 높이를 벗어나는 것임
    } else {
      setTopY(offsetY);
    }
  }, [offsetX, offsetY, screenWidth, screenHeight]);

  return { leftX, topY };
};
