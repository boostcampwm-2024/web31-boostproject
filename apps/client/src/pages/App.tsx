import { GuidesBox } from '@/widgets/index';
import { HomeHeader } from '@/widgets/index';
import { WorkspaceContainer } from '@/widgets/home/WorkspaceContainer';
import { EmptyWorkspace } from '@/widgets/index';

export const App = () => {
  return (
    <>
      <HomeHeader />
      <GuidesBox />
      <WorkspaceContainer />
      <EmptyWorkspace />
    </>
  );
};

export default App;
