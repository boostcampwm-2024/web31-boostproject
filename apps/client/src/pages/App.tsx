import { GuidesBox, WorkspaceModal, WorkspaceContainer } from '@/widgets/index';
import { HomeHeader } from '@/widgets/index';

export const App = () => {
  return (
    <>
      <HomeHeader />
      <GuidesBox />
      <WorkspaceContainer />
      <WorkspaceModal />
    </>
  );
};

export default App;
