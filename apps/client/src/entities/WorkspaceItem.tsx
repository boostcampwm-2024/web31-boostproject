type WorkspaceItemProps = {
  title: string;
  thumbnail: string;
  lastEdited: string;
};

export const WorkspcaeItem = ({ title, thumbnail, lastEdited }: WorkspaceItemProps) => {
  return (
    <li className="shadow-drop w-[264px] overflow-hidden rounded-lg">
      <div className="flex h-[180px] items-center justify-center overflow-hidden bg-gray-50">
        {thumbnail && (
          <img src={thumbnail} alt="workspace thumbnail" className="h-32 w-full object-cover" />
        )}
      </div>

      <aside className="p-4 pb-6">
        <h4 className="text-bold-md mb-1.5 text-gray-500">{title}</h4>
        <p className="text-medium-sm text-gray-200">{lastEdited}</p>
      </aside>
    </li>
  );
};
