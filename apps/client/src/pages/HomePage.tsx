import {
  EmptyWorkspace,
  GuidesBox,
  HomeHeader,
  WorkspaceContainer,
  WorkspaceModal,
} from '@/widgets';

import { Loading } from '@/shared/ui';
import { useLoadingStore } from '@/shared/store';

export const HomePage = () => {
  const { isPending } = useLoadingStore();
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
