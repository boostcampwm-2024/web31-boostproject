import { WorkspaceAddBtn } from '@/entities';

export const WorkspaceHeader = () => {
  return (
    <header className="mb-5 flex gap-3">
      <h2 className="text-bold-xl">워크스페이스</h2>
      <WorkspaceAddBtn />
    </header>
  );
};
