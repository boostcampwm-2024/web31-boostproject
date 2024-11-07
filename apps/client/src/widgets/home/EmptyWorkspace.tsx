import { useState } from 'react';

// TODO: 빈 워크스페이스 코드로 구현하기
export const EmptyWorkspace = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <></>
    // <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
    //   {isHovered ? <HoveredEmptyWorkspace /> : <EmptyIcon />}
    // </div>
  );
};
