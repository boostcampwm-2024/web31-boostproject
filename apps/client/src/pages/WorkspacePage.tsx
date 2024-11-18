import { WorkspaceContent, WorkspacePageHeader } from '@/widgets';

import { Loading } from '@/shared/ui';
import { NotFound } from '@/pages/NotFound';
import { useGetWorkspace } from '@/shared/hooks';
import { useParams } from 'react-router-dom';

export const WorkspacePage = () => {
  const { workspaceId } = useParams();

  const { isPending, isError } = useGetWorkspace(workspaceId as string);

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
