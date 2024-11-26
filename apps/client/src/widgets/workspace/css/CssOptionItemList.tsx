import { CssOptionItem } from '@/entities';
import { cssCategoryList } from '@/shared/utils';
import { useCssPropsStore } from '@/shared/store';

export const CssOptionItemList = () => {
  const { selectedCssCategory } = useCssPropsStore();
  return (
    <article className="flex h-full w-full flex-col gap-4 overflow-y-auto p-3">
      {cssCategoryList
        .filter((cssCategory) => cssCategory.category === selectedCssCategory)
        .map((cssCategory) =>
          cssCategory.items.map((cssItem, index) => (
            <CssOptionItem cssItem={cssItem} index={index} key={cssItem.label} />
          ))
        )}
    </article>
  );
};
