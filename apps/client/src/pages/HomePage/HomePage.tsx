import { GuidesBox, HomeHeader, WorkspaceContainer, WorkspaceModal } from '@/widgets';
import { useClassBlockStore, useLoadingStore, useWorkspaceStore } from '@/shared/store';

import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>BooLock - 홈</title>
        <meta
          name="description"
          content="코딩 입문자들이 HTML과 CSS를 블록으로 배우는 BooLock의 메인 페이지입니다."
        />
      </Helmet>
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
