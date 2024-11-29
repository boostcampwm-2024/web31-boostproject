import PictureIcon from '@/shared/assets/picture_icon.svg?react';

/**
 *
 * @description
 * 워크스페이스 스켈레톤 UI 컴포넌트
 */
export const SkeletonWorkspace = () => {
  return (
    <div className="shadow-drop flex w-full animate-pulse flex-col rounded-lg">
      <div className="flex h-48 w-full items-center justify-center rounded bg-gray-50 text-gray-200">
        <PictureIcon />
      </div>
      <div className="flex flex-col items-start gap-2 p-4 pb-6">
        <div className="h-2.5 w-48 rounded-full bg-gray-100"></div>
        <div className="h-2.5 w-24 rounded-full bg-gray-100"></div>
      </div>
    </div>
  );
};
