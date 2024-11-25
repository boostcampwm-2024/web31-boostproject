import { useEffect } from 'react';
import { useWorkspaceChangeStatusStore } from '../store';

export const usePreventLeave = () => {
  const { isBlockChanged, isCssChanged } = useWorkspaceChangeStatusStore();
  const handleBeforeUnload = (e: Event) => {
    e.preventDefault();
  };

  const handlePopState = (e?: PopStateEvent) => {
    window.history.pushState(null, '', window.location.href);
    if (isBlockChanged || isCssChanged) {
      const isConfirmed = window.confirm(
        '변경사항이 저장되지 않았습니다. 페이지를 이동하시겠습니까?'
      );
      if (!isConfirmed) {
        e!.preventDefault();
        window.history.pushState(null, '', window.location.href);
      }
    }
  };

  const onPreventLeave = () => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);
    window.history.pushState(null, '', window.location.href);
  };

  const offPreventLeave = () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
    window.removeEventListener('popstate', handlePopState);
  };

  useEffect(() => {
    if (isBlockChanged || isCssChanged) {
      onPreventLeave();
    } else {
      offPreventLeave();
    }

    return () => offPreventLeave();
  });

  return { handlePopState };
};
