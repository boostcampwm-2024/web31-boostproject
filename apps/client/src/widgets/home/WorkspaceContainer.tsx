import { useEffect, useRef } from 'react';

import { EmptyWorkspace } from './EmptyWorkspace';
import { SkeletonWorkspaceList } from '@/shared/ui';
import { WorkspaceGrid } from '@/widgets';
import { WorkspaceHeader } from './WorkspaceHeader';
import { WorkspaceList } from './WorkspaceList';
import { useGetWorkspaceList } from '@/shared/hooks';

export const WorkspaceContainer = () => {
  const { hasNextPage, fetchNextPage, isPending, isFetchingNextPage, workspaceList } =
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
    <>
      <section className="pb-48">
        <WorkspaceHeader />
        <WorkspaceGrid>
          {workspaceList &&
            (workspaceList.length === 0 ? (
              <EmptyWorkspace />
            ) : (
              <WorkspaceList workspaceList={workspaceList} />
            ))}
          {(isPending || isFetchingNextPage) && <SkeletonWorkspaceList skeletonNum={8} />}
        </WorkspaceGrid>
        <div ref={nextFetchTargetRef} className="h-3 w-full"></div>
      </section>
    </>
  );
};
