import { WorkspaceContent, WorkspacePageHeader } from '@/widgets';

import { Loading } from '@/shared/ui';
import { NotFound } from '@/pages/NotFound';
import { useCssPropsStore } from '@/shared/store';
import { useEffect } from 'react';
import { useGetWorkspace } from '@/shared/hooks';
import { useParams } from 'react-router-dom';

export const WorkspacePage = () => {
  const { workspaceId } = useParams();
  const { resetCssPropsStore } = useCssPropsStore();
  const { isPending, isError } = useGetWorkspace(workspaceId as string);

  useEffect(() => {
    resetCssPropsStore();
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
