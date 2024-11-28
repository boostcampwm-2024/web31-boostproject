export const NotHoveredEmptyWorkspace = () => {
  return (
    <div className="flex h-[23rem] flex-col items-center justify-center bg-gray-50 text-gray-200">
      <img src="/images/empty_logo.png" alt="" className="h-40 w-40 grayscale" />
      <p className="text-center">
        아직 워크스페이스가 없어요! <br /> 새로운 웹 페이지를 만들어보세요!
      </p>
    </div>
  );
};
