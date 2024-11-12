import { SkeletonWorkspace } from '@/shared/ui/skeleton/SkeletonWorkspace';

export const SkeletonWorkspaceList = ({ skeletonNum }: { skeletonNum: number }) => {
  return (
    <>
      {new Array(skeletonNum).fill(0).map((_, idx) => {
        return <SkeletonWorkspace key={idx} />;
      })}
    </>
  );
};
