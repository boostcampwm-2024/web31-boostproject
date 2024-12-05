import { useEffect, useRef } from 'react';

type useInfiniteScrollProps = {
  intersectionCallback: IntersectionObserverCallback;
};

export const useInfiniteScroll = ({ intersectionCallback }: useInfiniteScrollProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const option = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  useEffect(() => {
    if (!targetRef.current) {
      return;
    }
    const observer = new IntersectionObserver(intersectionCallback, option);
    observer.observe(targetRef.current);
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [intersectionCallback]);
  return targetRef;
};
