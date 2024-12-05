import { ImageTagModal, CoachMark, WorkspaceContent, WorkspacePageHeader } from '@/widgets';
import { useGetWorkspace, usePreventLeaveWorkspacePage } from '@/shared/hooks';
import { Helmet } from 'react-helmet-async';
import { Loading } from '@/shared/ui';
import { NotFound } from '@/pages/NotFound/NotFound';
import { useParams } from 'react-router-dom';
import { useLayoutEffect, useEffect } from 'react';
import { useCoachMarkStore } from '@/shared/store/useCoachMarkStore';
import * as Blockly from 'blockly/core';
import TabbedToolbox from '@/core/tabbedToolbox';

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
    const workspace = Blockly.getMainWorkspace() as Blockly.WorkspaceSvg;
    if (!workspace) {
      return;
    }

    const toolbox = workspace.getToolbox() as TabbedToolbox;

    if (!toolbox) return;

    switch (currentStep < 5) {
      case 0:
        toolbox.clickTab('html');
        break;
      case 1:
        toolbox.clickTab('css');
        break;
      case 2:
        toolbox.clickTab('html');
    }

    if (toolboxDiv) {
      if (currentStep <= 1) {
        toolboxDiv.classList.add('coachMarkHighlight');
      } else {
        toolboxDiv.classList.remove('coachMarkHighlight');
      }
    }
  }, [currentStep, toolboxDiv]);

  if (isError) {
    return <NotFound />;
  }

  return (
    <>
      <Helmet>
        <title>BooLock - 작업 공간</title>
        <meta
          name="description"
          content={`작업 공간 ID: ${workspaceId}에서 HTML과 CSS를 연습해보세요.`}
        />
      </Helmet>
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
