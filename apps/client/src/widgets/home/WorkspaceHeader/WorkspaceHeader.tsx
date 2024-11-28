import { WorkspaceAddBtn } from '@/entities';

/**
 *
 * @description
 * 워크스페이스 헤더 컴포넌트
 */
export const WorkspaceHeader = () => {
  return (
    <header className="mb-5 mt-[60px] flex w-[1128px] gap-3">
      <h2 className="text-bold-xl">워크스페이스</h2>
      <WorkspaceAddBtn />
    </header>
  );
};
