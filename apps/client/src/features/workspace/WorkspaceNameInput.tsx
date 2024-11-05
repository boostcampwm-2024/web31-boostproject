export const WorkspaceNameInput = () => {
  //TODO 워크스페이스 이름 변경 로직 필요
  const handleBlur = () => {};

  //TODO 워크스페이스 이름 존재 시 placeholder가 그에 맞추어 변경되어야함
  return (
    <input
      placeholder="워크스페이스 이름"
      className="placeholder:text-semibold-rg w-[272px] rounded-md border border-green-500 px-3 py-1 placeholder:text-gray-100 focus:outline-none"
      onBlur={handleBlur}
    />
  );
};
