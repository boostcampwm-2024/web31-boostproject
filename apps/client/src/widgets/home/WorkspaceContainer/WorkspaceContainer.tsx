import { EmptyWorkspace, WorkspaceGrid, WorkspaceHeader, WorkspaceList } from '@/widgets';
import { useEffect, useRef } from 'react';

import { SkeletonWorkspaceList } from '@/shared/ui';
import { WorkspaceLoadError } from '@/entities';
import { useGetWorkspaceList } from '@/shared/hooks';

/**
 *
 * @description
 * 워크스페이스 헤더와 그리드를 감싸는 컨테이너 컴포넌트
 */
export const WorkspaceContainer = () => {
  const { hasNextPage, fetchNextPage, isPending, isFetchingNextPage, isError, workspaceList } =
    useGetWorkspaceList();

  const nextFetchTargetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    const fetchCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(fetchCallback, options);
    if (nextFetchTargetRef.current) {
      observer.observe(nextFetchTargetRef.current);
    }
    return () => {
      if (nextFetchTargetRef.current) {
        observer.unobserve(nextFetchTargetRef.current);
      }
    };
  }, [workspaceList]);

  return (
    <section className="pb-48">
      <WorkspaceHeader />
      {isError ? (
        <WorkspaceLoadError />
      ) : (
        workspaceList &&
        (workspaceList.length === 0 ? (
          <EmptyWorkspace />
        ) : (
          <WorkspaceGrid>
            <WorkspaceList workspaceList={workspaceList} />
            {(isPending || isFetchingNextPage) && <SkeletonWorkspaceList skeletonNum={8} />}
          </WorkspaceGrid>
        ))
      )}
      {!isPending && !isFetchingNextPage && hasNextPage && (
        <div ref={nextFetchTargetRef} className="h-3 w-full"></div>
      )}
    </section>
  );
};
