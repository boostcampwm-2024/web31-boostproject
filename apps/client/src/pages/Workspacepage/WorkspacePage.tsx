import { ImageTagModal, CoachMark, WorkspaceContent, WorkspacePageHeader } from '@/widgets';
import { useGetWorkspace, usePreventLeaveWorkspacePage } from '@/shared/hooks';
import { Helmet } from 'react-helmet-async';
import { Loading } from '@/shared/ui';
import { NotFound } from '@/pages/NotFound/NotFound';
import { useParams } from 'react-router-dom';

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
  const { isCoachMarkOpen } = useCoachMarkStore();

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
