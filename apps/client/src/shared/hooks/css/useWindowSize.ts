import { useEffect, useState } from 'react';

import { debounce } from '@/shared/utils';

export const useWindowSize = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const handleResize = debounce(() => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    }, 200);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { screenWidth, setScreenWidth, screenHeight, setScreenHeight };
};
