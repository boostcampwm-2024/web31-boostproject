import { EmptyWorkspace, WorkspaceGrid, WorkspaceHeader, WorkspaceList } from '@/widgets';
import { useGetWorkspaceList, useInfiniteScroll } from '@/shared/hooks';

import { SkeletonWorkspaceList } from '@/shared/ui';
import { WorkspaceLoadError } from '@/entities';

/**
 *
 * @description
 * 워크스페이스 헤더와 그리드를 감싸는 컨테이너 컴포넌트
 */
export const WorkspaceContainer = () => {
  const { hasNextPage, fetchNextPage, isPending, isFetchingNextPage, isError, workspaceList } =
    useGetWorkspaceList();

  const fetchCallback: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage();
        observer.unobserve(entry.target);
      }
    });
  };

  const nextFetchTargetRef = useInfiniteScroll({ intersectionCallback: fetchCallback });

  return (
    <section className="w-full max-w-[1152px] px-3 pb-48">
      <WorkspaceHeader />
      {isPending && (
        <WorkspaceGrid>
          <SkeletonWorkspaceList skeletonNum={8} />
        </WorkspaceGrid>
      )}
      {isError ? (
        <WorkspaceLoadError />
      ) : (
        workspaceList &&
        (workspaceList.length === 0 ? (
          <EmptyWorkspace />
        ) : (
          <WorkspaceGrid>
            <WorkspaceList workspaceList={workspaceList} />
            {isFetchingNextPage && <SkeletonWorkspaceList skeletonNum={8} />}
          </WorkspaceGrid>
        ))
      )}
      {!isPending && !isFetchingNextPage && hasNextPage && (
        <div ref={nextFetchTargetRef} className="h-3 w-full"></div>
      )}
    </section>
  );
};
