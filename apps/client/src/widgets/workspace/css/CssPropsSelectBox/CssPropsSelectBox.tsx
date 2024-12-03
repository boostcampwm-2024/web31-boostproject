import { CssCategoryBar, CssOptionItemList, CssPropsSelectBoxHeader } from '@/widgets';

/**
 *
 * @description
 * CSS 클래스를 선택하고 CSS 속성을 선택할 수 있는 컴포넌트
 */
export const CssPropsSelectBox = () => {
  return (
    <section className="flex h-[26rem] w-full flex-col">
      <CssPropsSelectBoxHeader />
      <div className="flex h-[calc(100%-48px)] w-full overflow-hidden">
        <CssCategoryBar />
        <CssOptionItemList />
      </div>
    </section>
  );
};
