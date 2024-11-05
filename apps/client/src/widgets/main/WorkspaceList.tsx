import { WorkspcaeItem } from '@/entities/WorkspaceItem';

export const WorkspcaeList = () => {
  const mockData = [
    { room_id: 1, name: '워크스페이스 이름', thumbnail: '', updated_at: '2024.10.30 last edited' },
    { room_id: 2, name: '워크스페이스 이름', thumbnail: '', updated_at: '2024.10.30 last edited' },
    { room_id: 3, name: '워크스페이스 이름', thumbnail: '', updated_at: '2024.10.30 last edited' },
    { room_id: 4, name: '워크스페이스 이름', thumbnail: '', updated_at: '2024.10.30 last edited' },
    { room_id: 5, name: '워크스페이스 이름', thumbnail: '', updated_at: '2024.10.30 last edited' },
  ];
  return (
    <ul className="grid grid-cols-4 gap-6">
      {mockData.map((data) => (
        <WorkspcaeItem
          key={data.room_id}
          title={data.name}
          thumbnail={data.thumbnail}
          lastEdited={data.updated_at}
        />
      ))}
    </ul>
  );
};
