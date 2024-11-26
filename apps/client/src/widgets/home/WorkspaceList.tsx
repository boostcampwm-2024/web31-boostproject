import { Tworkspace } from '@/shared/types';
import { WorkspaceItem } from '@/entities';
import { useNavigate } from 'react-router-dom';

type workspaceListProps = {
  workspaceList: Array<Tworkspace>;
};

export const WorkspaceList = ({ workspaceList }: workspaceListProps) => {
  const navigate = useNavigate();
  return (
    <ul className="grid-cols-list grid w-[1128px] justify-start gap-x-6 gap-y-8">
      {workspaceList.map((workspace) => (
        <WorkspaceItem
          key={workspace.workspace_id}
          workspaceId={workspace.workspace_id}
          title={workspace.name}
          thumbnail={workspace.thumbnail || ''}
          lastEdited={workspace.updated_at}
          onClick={() => {
            navigate(`/workspace/${workspace.workspace_id}`);
          }}
        />
      ))}
    </ul>
  );
};
