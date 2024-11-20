import { CssCategoryBar, CssOptionItemList, CssPropsSelectBoxHeader } from '@/widgets';

// TODO: css 코드 변경 로직 추가 필요
export const CssPropsSelectBox = () => {
  return (
    <section className="flex h-[26rem] w-full flex-col">
      <CssPropsSelectBoxHeader />
      <div className="flex h-full w-full overflow-hidden">
        <CssCategoryBar />
        <CssOptionItemList />
      </div>
    </section>
  );
};
