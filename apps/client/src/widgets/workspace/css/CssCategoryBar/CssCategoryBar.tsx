import { CssCategoryButton } from '@/entities';
import { cssCategoryList } from '@/shared/utils';

/**
 *
 * @description
 * CSS 카테고리 목록을 보여주고 선택할 수 있는 컴포넌트
 */
export const CssCategoryBar = () => {
  return (
    <nav className="flex flex-shrink-0 flex-col gap-1.5 border-r border-r-gray-100 px-4 py-3">
      {cssCategoryList.map((cssCategory) => (
        <CssCategoryButton cssCategory={cssCategory.category} key={cssCategory.category} />
      ))}
    </nav>
  );
};
