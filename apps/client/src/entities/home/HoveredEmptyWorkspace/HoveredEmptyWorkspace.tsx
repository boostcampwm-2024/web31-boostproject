import PlusGreen from '@/shared/assets/plus_green.svg?react';
import { useCreateWorkspace } from '@/shared/hooks';

/**
 *
 * @description
 * 빈 워크스페이스에 마우스를 올렸을 때 보여지는 컴포넌트
 */
export const HoveredEmptyWorkspace = () => {
  const { mutate: createWorkspace } = useCreateWorkspace();

  const handleClick = () => {
    createWorkspace();
  };

  return (
    <div
      className="flex h-[23rem] items-center justify-center border-4 border-dashed border-green-300 bg-green-100"
      onClick={handleClick}
    >
      <PlusGreen fill="green" />
    </div>
  );
};
