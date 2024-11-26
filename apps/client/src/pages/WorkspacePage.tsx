import { WorkspaceContent, WorkspacePageHeader } from '@/widgets';
import { useCssPropsStore, useWorkspaceChangeStatusStore } from '@/shared/store';
import { useGetWorkspace, usePreventLeaveWorkspacePage } from '@/shared/hooks';

import { Loading } from '@/shared/ui';
import { NotFound } from '@/pages/NotFound';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const WorkspacePage = () => {
  const { workspaceId } = useParams();
  const { isPending, isError } = useGetWorkspace(workspaceId as string);
  const { resetChangedStatusState } = useWorkspaceChangeStatusStore();
  usePreventLeaveWorkspacePage();
  useEffect(() => {
    resetChangedStatusState();
  }, []);

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
