import { useEffect, useState } from 'react';

import Question from '@/shared/assets/question.svg?react';
import { TcssCategory } from '@/shared/types';
import { cssCategoryList } from '@/widgets/workspace/css/cssCategory';

export const CssPropsSelectBox = () => {
  const [selectedCssCategory, setSelectedCssCategory] = useState<TcssCategory>('레이아웃');
  const [checkedProperties, setCheckedProperties] = useState<{ [key: string]: boolean }>({});
  const [styleProperty, setStyleProperty] = useState<{ [key: string]: string }>({});
  // 체크박스 상태 변경 함수
  const handleCheckboxChange = (property: string) => {
    setCheckedProperties((prev) => ({
      ...prev,
      [property]: !prev[property],
    }));
  };

  const handleStylePropertyChange = (property: string, value: string) => {
    setStyleProperty((prev) => ({
      ...prev,
      [property]: value,
    }));
  };

  const handleEnterKey = (property: string, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleStylePropertyChange(property, e.currentTarget.value);
      e.currentTarget.blur();
      e.preventDefault();
    }
  };

  useEffect(() => {
    console.log(checkedProperties);
  }, [checkedProperties]);

  useEffect(() => {
    console.log(styleProperty);
  }, [styleProperty]);

  return (
    <section className="flex h-[392px] w-full">
      <nav className="border-r border-r-gray-100 px-4 py-3">
        {cssCategoryList.map((cssCategory) => (
          <button
            key={cssCategory.category}
            onClick={() => setSelectedCssCategory(cssCategory.category)}
            className={`text-bold-sm mb-1.5 flex h-[36px] w-[100px] cursor-pointer items-center rounded p-2 text-gray-200 ${selectedCssCategory === cssCategory.category && 'text-gray-black bg-yellow-500'}`}
          >
            {cssCategory.category}
          </button>
        ))}
      </nav>
      <article className="space-y-2 overflow-y-auto p-3 pr-1">
        {cssCategoryList
          .filter((cssCategory) => cssCategory.category === selectedCssCategory)
          .map((cssCategory) =>
            cssCategory.items.map((cssItem, index) => (
              <div
                key={index}
                className={`flex h-[66px] w-[344px] items-center rounded-lg px-4 ${
                  checkedProperties[cssItem.label] ? 'bg-yellow-500' : 'bg-gray-50'
                } justify-between`}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={!!checkedProperties[cssItem.label]}
                    onChange={() => handleCheckboxChange(cssItem.label)}
                    title={cssItem.label}
                    className="h-5 w-5 appearance-none rounded border border-gray-100 bg-center bg-no-repeat checked:bg-white checked:bg-[url('@/shared/assets/check.svg')]"
                  />
                  <span className="text-semibold-md text-gray-black border-gray-100 pl-5 pr-2">
                    {cssItem.label}
                  </span>
                  <Question />
                </div>

                {cssItem.type === 'select' && (
                  <select
                    id={cssItem.label}
                    className="bg-gray-white focus:ring-gray-black text-semibold-md focus:border-gray-black w-[120px] truncate rounded-lg border border-gray-100 px-2 py-1 outline-none"
                    onChange={(e) => handleStylePropertyChange(cssItem.label, e.target.value)}
                  >
                    {cssItem.option?.map((option) => (
                      <option value={option} className="">
                        {option}
                      </option>
                    ))}
                  </select>
                )}
                {cssItem.type === 'input' && (
                  <input
                    type="text"
                    className="text-semibold-md focus:border-gray-black w-[120px] rounded-lg border border-gray-100 px-2 py-1 placeholder-gray-100 focus:border focus:outline-none"
                    placeholder="값을 입력하세요"
                    onBlur={(e) => handleStylePropertyChange(cssItem.label, e.target.value)}
                    onKeyDown={(e) => handleEnterKey(cssItem.label, e)}
                  />
                )}
                {cssItem.type === 'color' && <div>123</div>}
              </div>
            ))
          )}
      </article>
    </section>
  );
};
