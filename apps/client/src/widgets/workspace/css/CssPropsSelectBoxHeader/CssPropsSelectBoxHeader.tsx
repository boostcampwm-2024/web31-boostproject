import { Select, TOption } from '@/shared/ui';
import { useClassBlockStore, useCssPropsStore } from '@/shared/store';
import { useEffect, useState } from 'react';

/**
 *
 * @description
 * CSS 클래스를 선택할 수 있는 헤더 컴포넌트
 */
export const CssPropsSelectBoxHeader = () => {
  const { currentCssClassName, setCurrentCssClassName } = useCssPropsStore();
  const { classBlockList } = useClassBlockStore();
  const [cssClassList, setCssClassList] = useState<string[]>([]);

  useEffect(() => {
    setCssClassList(classBlockList);
  }, [classBlockList]);

  const selectOptions: TOption[] = [
    { value: '', label: '클래스를 선택해주세요' },
    ...cssClassList.map((cssClass) => ({
      value: cssClass,
      label: cssClass,
    })),
  ];

  return (
    <header className="py-border flex h-12 items-center justify-between border-b-yellow-500 bg-yellow-200 px-4">
      <p className="text-semibold-md text-gray-black truncate">CSS 클래스 속성 편집</p>
      <Select
        options={selectOptions}
        value={currentCssClassName}
        onChange={(selected: string) => setCurrentCssClassName(selected)}
        placeholder="클래스를 선택해주세요"
      />
    </header>
  );
};
