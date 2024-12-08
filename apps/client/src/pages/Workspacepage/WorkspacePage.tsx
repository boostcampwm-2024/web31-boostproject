import { ImageTagModal, CoachMark, WorkspaceContent, WorkspacePageHeader } from '@/widgets';
import { useGetWorkspace, usePreventLeaveWorkspacePage } from '@/shared/hooks';
import { Loading } from '@/shared/ui';
import { NotFound } from '@/pages/NotFound/NotFound';
import { useParams } from 'react-router-dom';
import { useLayoutEffect, useEffect } from 'react';
import { useCoachMarkStore } from '@/shared/store/useCoachMarkStore';

/**
 *
 * @description
 * 워크스페이스 페이지 컴포넌트
 */
export const WorkspacePage = () => {
  const { workspaceId } = useParams();
  const { isPending, isError } = useGetWorkspace(workspaceId as string);
  usePreventLeaveWorkspacePage();
  const { currentStep, isCoachMarkOpen, openCoachMark } = useCoachMarkStore();
  const toolboxDiv = document.querySelector('.blocklyToolboxDiv');

  useLayoutEffect(() => {
    const isCoachMarkDismissed = localStorage.getItem('isCoachMarkDismissed');

    if (!isCoachMarkDismissed) {
      openCoachMark();
    }
  }, []);

  useEffect(() => {
    if (!toolboxDiv) return;

    if (currentStep <= 1) {
      toolboxDiv.classList.add('coachMarkHighlight');
    } else {
      toolboxDiv.classList.remove('coachMarkHighlight');
    }
  }, [currentStep, toolboxDiv]);

  if (isError) {
    return <NotFound />;
  }

  return (
    <>
      <div className="flex h-screen flex-col">
        {isPending && <Loading />}
        {isCoachMarkOpen && <CoachMark />}
        <WorkspacePageHeader />
        <WorkspaceContent />
      </div>
      <ImageTagModal />
    </>
  );
};
