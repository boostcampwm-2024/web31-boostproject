import { CssOptionItem } from '@/entities';
import { cssCategoryList } from '@/shared/utils';
import { useCssPropsStore } from '@/shared/store';

/**
 *
 * @description
 * CSS 속성을 설정할 수 있는 컴포넌트의 목록을 보여주는 컴포넌트
 */
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
