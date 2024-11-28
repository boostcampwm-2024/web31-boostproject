import { TCssCategory } from '@/shared/types';
import { useCssPropsStore } from '@/shared/store';

type CssCategoryButtonProps = {
  cssCategory: {
    category: TCssCategory;
  };
};

export const CssCategoryButton = ({ cssCategory }: CssCategoryButtonProps) => {
  const { selectedCssCategory, setSelectedCssCategory } = useCssPropsStore();
  return (
    <button
      key={cssCategory.category}
      onClick={() => setSelectedCssCategory(cssCategory.category)}
      className={`text-bold-sm flex cursor-pointer rounded px-3 py-2.5 text-gray-200 ${selectedCssCategory === cssCategory.category && 'text-gray-black bg-yellow-500'}`}
    >
      {cssCategory.category}
    </button>
  );
};
