import { WorkspaceContent, WorkspacePageHeader } from '@/widgets';
import { useGetWorkspace, usePreventLeaveWorkspacePage } from '@/shared/hooks';

import { Loading } from '@/shared/ui';
import { NotFound } from '@/pages/NotFound';
import { useParams } from 'react-router-dom';

export const WorkspacePage = () => {
  const { workspaceId } = useParams();
  const { isPending, isError } = useGetWorkspace(workspaceId as string);
  usePreventLeaveWorkspacePage();

  if (isError) {
    return <NotFound />;
  }

  return (
    <div className="flex h-screen flex-col">
      {isPending && <Loading />}
      <WorkspacePageHeader />
      <WorkspaceContent />
    </div>
  );
};
