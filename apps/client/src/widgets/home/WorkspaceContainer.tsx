import { useGetWorkspaceList } from '@/shared/hooks';
import { WorkspaceHeader } from './WorkspaceHeader';
import { WorkspaceList } from './WorkspaceList';
import { EmptyWorkspace } from './EmptyWorkspace';

export const WorkspaceContainer = () => {
  const { hasNextPage, fetchNextPage, isFetchingNextPage, workspaceList } = useGetWorkspaceList();

  return (
    <section className="pb-48">
      <WorkspaceHeader />
      {!workspaceList || workspaceList?.length === 0 ? (
        <EmptyWorkspace />
      ) : (
        <>
          <WorkspaceList workspaceList={workspaceList} />
          <div className="h-3 w-full"></div>
        </>
      )}
    </section>
  );
};
