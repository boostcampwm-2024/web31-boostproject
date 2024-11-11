import { WorkspacePageHeader, WorkspaceContent } from '@/widgets';

// TODO: useParams 훅을 통해 workspaceId 가져오기
export const WorkspacePage = () => {
  return (
    <>
      <WorkspacePageHeader />
      <WorkspaceContent />
    </>
  );
};
