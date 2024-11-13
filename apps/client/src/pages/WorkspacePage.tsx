import { WorkspaceContent, WorkspacePageHeader } from '@/widgets';

import { Loading } from '@/shared/ui';
import { useEffect } from 'react';
import { useGetWorkspace } from '@/shared/hooks';
import { useParams } from 'react-router-dom';

// TODO: useParams 훅을 통해 workspaceId 가져오기
export const WorkspacePage = () => {
  const params = useParams();
  const { workspaceId } = params;

  const { data, isPending, isError } = useGetWorkspace(workspaceId as string);
  useEffect(() => {
    console.log(data);
  }, [isPending]);

  if (isError) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <>
      {isPending && <Loading />}
      {data && !isError && <WorkspacePageHeader workspace={data} />}
      <WorkspaceContent />
    </>
  );
};
