import { WorkspaceItem } from '@/entities';
import { TworkspaceDto } from '@/shared/types';

type workspaceListProps = {
  workspaceList: Array<TworkspaceDto>;
};

export const WorkspaceList = ({ workspaceList }: workspaceListProps) => {
  return (
    <ul className="grid-cols-list grid w-[1128px] justify-start gap-x-6 gap-y-8">
      {workspaceList.map((workspace) => {
        console.log(workspace.updated_at);
        return (
          <WorkspaceItem
            key={workspace.workspace_id}
            title={workspace.name}
            thumbnail={workspace.thumbnail || ''}
            lastEdited={workspace.updated_at}
          />
        );
      })}
    </ul>
  );
};
