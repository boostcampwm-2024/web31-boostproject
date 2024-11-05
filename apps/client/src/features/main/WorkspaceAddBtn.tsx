import PlusSVG from '@/shared/assets/plus.svg?react';

export const WorkspaceAddBtn = () => {
  const handleClick = () => {};

  return (
    // TODO: 재사용컴포넌트(CircleButton) 활용
    <button className="h-5 w-5 rounded-full bg-green-500 text-green-100" onClick={handleClick}>
      <PlusSVG />
    </button>
  );
};
