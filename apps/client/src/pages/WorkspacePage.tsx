import { ConfirmBackNavigationModal, WorkspaceContent, WorkspacePageHeader } from '@/widgets';
import { useCssPropsStore, useWorkspaceChangeStatusStore } from '@/shared/store';
import { useGetWorkspace, usePreventLeaveWorkspacePage } from '@/shared/hooks';

import { Loading } from '@/shared/ui';
import { NotFound } from '@/pages/NotFound';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const WorkspacePage = () => {
  const { workspaceId } = useParams();
  const { resetCssPropsStore } = useCssPropsStore();
  const { isPending, isError } = useGetWorkspace(workspaceId as string);
  const { resetChangedStatusState } = useWorkspaceChangeStatusStore();
  usePreventLeaveWorkspacePage();
  useEffect(() => {
    // TODO : cssPropStore 서버에 저장된 값으로 덮어쓰기
    resetCssPropsStore();
    resetChangedStatusState;
  }, []);

  if (isError) {
    return <NotFound />;
  }

  return (
    <div className="flex h-screen flex-col">
      {isPending && <Loading />}
      <WorkspacePageHeader onClickLogo={() => {}} />
      <WorkspaceContent />
      <ConfirmBackNavigationModal />
    </div>
  );
};
