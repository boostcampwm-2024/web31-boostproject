import { CssCategoryBar, CssOptionItemList, CssPropsSelectBoxHeader } from '@/widgets';

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
