import { CssCategoryBar, CssOptionItemList, CssPropsSelectBoxHeader } from '@/widgets';
import { useCoachMarkStore } from '@/shared/store/useCoachMarkStore';

/**
 *
 * @description
 * CSS 클래스를 선택하고 CSS 속성을 선택할 수 있는 컴포넌트
 */
export const CssPropsSelectBox = () => {
  const { currentStep } = useCoachMarkStore();

  return (
    <section
      className={`flex h-[26rem] w-full flex-col ${currentStep === 2 ? 'z-[99999] bg-white' : ''}`}
    >
      <CssPropsSelectBoxHeader />
      <div className="flex h-full w-full overflow-hidden">
        <CssCategoryBar />
        <CssOptionItemList />
      </div>
    </section>
  );
};
