import { WorkspaceNameInput } from '@/entities';

import { Logo } from '@/shared/ui';
import { WorkspaceHeaderButtons } from '../WorkspaceHeaderButtons/WorkspaceHeaderButtons';
import { useCoachMarkStore } from '@/shared/store/useCoachMarkStore';

/**
 *
 * @description
 * 워크스페이스 페이지 헤더 컴포넌트
 */
export const WorkspacePageHeader = () => {
  const { openCoachMark } = useCoachMarkStore();

  return (
    <div className="flex h-14 w-full flex-shrink-0 items-center justify-between border-b border-gray-100 bg-white pl-8 pr-4">
      <div className="flex items-center gap-5">
        <Logo isBlack={false} />
        <WorkspaceNameInput />
      </div>
      <div className="flex gap-11">
        <button className="text-medium-rg text-gray-300" onClick={openCoachMark}>
          도움말
        </button>
        <WorkspaceHeaderButtons />
      </div>
    </div>
  );
};
