/**
 *
 * @description
 * 워크스페이스 불러오기 실패 시 렌더링 되는 에러 컴포넌트
 */
export const WorkspaceLoadError = () => {
  return (
    <div className="flex h-[23rem] w-full flex-col items-center justify-center gap-4 rounded-lg bg-gray-50 text-gray-200">
      <img src="/images/not_found.png" className="h-40 w-40" />
      <p className="text-center">워크스페이스를 불러오지 못했습니다.</p>
    </div>
  );
};
