import { GuidesBox } from '@/widgets/index';
import { HomeHeader } from '@/widgets/index';
import { WorkspaceContainer } from '@/widgets/home/WorkspaceContainer';

export const App = () => {
  return (
    <>
      <HomeHeader />
      <GuidesBox />
      <WorkspaceContainer />
    </>
  );
};

export default App;
