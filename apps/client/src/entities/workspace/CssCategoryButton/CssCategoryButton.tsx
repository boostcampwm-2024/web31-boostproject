import { TCssCategory } from '@/shared/types';
import { useCssPropsStore } from '@/shared/store';

type CssCategoryButtonProps = {
  cssCategory: TCssCategory;
};

/**
 *
 * @description
 * CSS 카테고리를 선택할 수 있는 버튼 컴포넌트
 */
export const CssCategoryButton = ({ cssCategory }: CssCategoryButtonProps) => {
  const { selectedCssCategory, setSelectedCssCategory } = useCssPropsStore();
  return (
    <button
      key={cssCategory}
      onClick={() => setSelectedCssCategory(cssCategory)}
      className={`text-bold-sm flex cursor-pointer rounded px-3 py-2.5 text-gray-200 ${selectedCssCategory === cssCategory && 'text-gray-black bg-yellow-500'}`}
      aria-label=" CSS 카테고리 선택 버튼"
    >
      {cssCategory}
    </button>
  );
};
