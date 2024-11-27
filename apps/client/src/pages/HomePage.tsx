import { GuidesBox, HomeHeader, WorkspaceContainer, WorkspaceModal } from '@/widgets';

import { Loading } from '@/shared/ui';
import { useClassBlockStore, useLoadingStore, useWorkspaceStore } from '@/shared/store';
import { useEffect } from 'react';

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
        <HomeHeader isBlack={true} />
        <GuidesBox />
        <WorkspaceContainer />
        <WorkspaceModal />
      </div>
    </>
  );
};
