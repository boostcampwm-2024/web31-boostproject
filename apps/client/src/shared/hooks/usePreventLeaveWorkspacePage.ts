import { useBlocker } from 'react-router-dom';
import { useEffect } from 'react';
import { useWorkspaceChangeStatusStore } from '@/shared/store';

export const usePreventLeaveWorkspacePage = () => {
  const { isBlockChanged, isCssChanged } = useWorkspaceChangeStatusStore();
  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      currentLocation.pathname !== nextLocation.pathname && (isBlockChanged || isCssChanged)
  );

  const promptOfLeavePage = `저장하지 않은 변경사항이 있습니다. 정말로 떠나시겠습니까?`;
  useEffect(() => {
    if (blocker.state === 'blocked') {
      const confirmLeave = window.confirm(promptOfLeavePage);
      if (confirmLeave) {
        blocker.proceed();
      } else {
        blocker.reset();
      }
    }
  }, [blocker.state, isBlockChanged, isCssChanged]);

  const handleBeforeUnload = (e: Event) => {
    e.preventDefault();
  };

  const onPreventLeave = () => {
    window.addEventListener('beforeunload', handleBeforeUnload);
  };

  const offPreventLeave = () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };

  useEffect(() => {
    if (isBlockChanged || isCssChanged) {
      onPreventLeave();
    } else {
      offPreventLeave();
    }
    return () => {
      offPreventLeave();
    };
  }, [isBlockChanged, isCssChanged]);
};
