import { Banner, HomeHeader, WorkspaceContainer, WorkspaceModal } from '@/widgets';
import { useClassBlockStore, useLoadingStore, useWorkspaceStore } from '@/shared/store';

import { Loading } from '@/shared/ui';
import { useEffect } from 'react';

/**
 *
 * @description
 * Boolock 홈페이지 컴포넌트
 */
export const HomePage = () => {
  const { isPending } = useLoadingStore();
  const { setWorkspace, setCanvasInfo: setBlockInfo } = useWorkspaceStore();
  const { initClassBlockList } = useClassBlockStore();

  useEffect(() => {
    setWorkspace(null);
    setBlockInfo('');
    initClassBlockList([]);
  }, []);

  return (
    <>
      {isPending && <Loading />}
      <div className="flex h-full w-full flex-col items-center">
        <HomeHeader />
        <Banner />
        <WorkspaceContainer />
        <WorkspaceModal />
      </div>
    </>
  );
};
