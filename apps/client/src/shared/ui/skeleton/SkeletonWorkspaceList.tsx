import { SkeletonWorkspace } from '@/shared/ui/skeleton/SkeletonWorkspace';

/**
 *
 * @description
 * 여러 개의 워크스페이스 스켈레톤 UI 컴포넌트
 */
export const SkeletonWorkspaceList = ({ skeletonNum }: { skeletonNum: number }) => {
  return (
    <>
      {new Array(skeletonNum).fill(0).map((_, idx) => {
        return <SkeletonWorkspace key={idx} />;
      })}
    </>
  );
};
