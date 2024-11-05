import { WorkspcaeItem } from '@/entities/WorkspaceItem';

export const WorkspcaeList = () => {
  const mockData = [
    { name: '워크스페이스 이름', thumnail: '', updated_at: '2024.10.30 last edited' },
  ];
  return (
    <>
      {mockData.map((data) => (
        <WorkspcaeItem title={data.name} thumnail={data.thumnail} lastEdited={data.updated_at} />
      ))}
    </>
  );
};
