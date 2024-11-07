import {
  EmptyWorkspace,
  GuidesBox,
  HomeHeader,
  WorkspaceContainer,
  WorkspaceModal,
} from '@/widgets';

export const HomePage = () => {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <HomeHeader isBlack={true} />
      <GuidesBox />
      <WorkspaceContainer />
      <EmptyWorkspace />

      <WorkspaceModal />
    </div>
  );
};
