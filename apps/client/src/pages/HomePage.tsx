import { EmptyWorkspace, GuidesBox, HomeHeader, WorkspaceHeader, WorkspaceList } from '@/widgets';

export const HomePage = () => {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <HomeHeader isBlack={true} />
      <GuidesBox />
      <WorkspaceHeader />
      <WorkspaceList />
      <EmptyWorkspace />
    </div>
  );
};
