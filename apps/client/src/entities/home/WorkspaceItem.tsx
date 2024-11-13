import TrashSVG from '@/shared/assets/trash.svg?react';
import { useModalStore } from '@/shared/store';

type WorkspaceItemProps = {
  title: string;
  thumbnail: string;
  lastEdited: string;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const rtf = new Intl.RelativeTimeFormat('ko', { numeric: 'auto' });
  const diffMinutes = Math.floor((date.getTime() - now.getTime()) / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);
  if (diffMinutes > -60) {
    return rtf.format(diffMinutes, 'minute');
  }

  if (diffHours > -24) {
    return rtf.format(diffHours, 'hour');
  }
  return new Intl.DateTimeFormat('ko', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
};

export const WorkspaceItem = ({ title, thumbnail, lastEdited }: WorkspaceItemProps) => {
  const { openModal: onOpen } = useModalStore();
  return (
    <li className="shadow-drop relative rounded-lg">
      <button className="absolute right-2 top-2 text-gray-300 hover:text-red-500" onClick={onOpen}>
        <TrashSVG width={16} />
      </button>
      <div className="flex h-[180px] overflow-hidden bg-gray-50">
        {/* TODO: 썸네일 형태에 따라 이미지 태그 OR 백그라운드로 지정 */}
        {thumbnail && (
          <img src={thumbnail} alt="workspace thumbnail" className="h-32 w-full object-cover" />
        )}
      </div>

      <aside className="p-4 pb-6">
        <h4 className="text-bold-md mb-1.5 text-gray-500">{title}</h4>
        <p className="text-medium-sm text-gray-200">{formatDate(lastEdited)}</p>
      </aside>
    </li>
  );
};
