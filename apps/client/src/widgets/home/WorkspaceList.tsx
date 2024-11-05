import { WorkspaceItem } from '@/entities/home/WorkspaceItem';

export const WorkspaceList = () => {
  const mockData = [
    { room_id: 1, name: '워크스페이스 이름', thumbnail: '', updated_at: '2024.10.30 last edited' },
    { room_id: 2, name: '워크스페이스 이름', thumbnail: '', updated_at: '2024.10.30 last edited' },
    { room_id: 3, name: '워크스페이스 이름', thumbnail: '', updated_at: '2024.10.30 last edited' },
    { room_id: 4, name: '워크스페이스 이름', thumbnail: '', updated_at: '2024.10.30 last edited' },
    { room_id: 5, name: '워크스페이스 이름', thumbnail: '', updated_at: '2024.10.30 last edited' },
  ];
  return (
    <ul className="grid-cols-list grid justify-start gap-x-6 gap-y-8">
      {mockData.map((data) => (
        <WorkspaceItem
          key={data.room_id}
          title={data.name}
          thumbnail={data.thumbnail}
          lastEdited={data.updated_at}
        />
      ))}
    </ul>
  );
};
