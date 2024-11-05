type WorkspaceItemProps = {
  title: string;
  thumnail: string;
  lastEdited: string;
};

export const WorkspcaeItem = ({ title, thumnail, lastEdited }: WorkspaceItemProps) => {
  return (
    <article className="rounded-lg">
      <img src={thumnail} />
      <aside>
        <h4>{title}</h4>
        <p>{lastEdited}</p>
      </aside>
    </article>
  );
};
