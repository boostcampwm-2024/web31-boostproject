import { useCssPropsStore } from '@/shared/store';
import { useState } from 'react';

export const CssPropsSelectBoxHeader = () => {
  const { setCurrentCssClassName } = useCssPropsStore();

  // TODO: css class 동적으로 추가히기 (전역 상태 변수로 변경)
  const [cssClassList, _setCssClassList] = useState<string[]>(['abc', 'def', '123']);

  const handleSelectClassName = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentCssClassName(e.target.value);
  };

  return (
    <header className="py-border flex h-12 items-center justify-between border-b-yellow-500 bg-yellow-200 px-4">
      <p className="text-semibold-md text-gray-black">CSS 클래스 속성 편집</p>
      <select
        className="bg-gray-white focus:ring-gray-black text-semibold-md focus:border-gray-black truncate rounded-lg border border-gray-100 px-2 py-1 outline-none"
        onChange={handleSelectClassName}
      >
        <option value="">클래스를 선택해주세요</option>
        {cssClassList.map((cssClass) => (
          <option key={cssClass} value={cssClass}>
            {cssClass}
          </option>
        ))}
      </select>
    </header>
  );
};
