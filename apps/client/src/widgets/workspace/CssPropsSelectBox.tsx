import { useState } from 'react';

import Question from '@/shared/assets/question.svg?react';

export const CssPropsSelectBox = () => {
  const cssCategoriesObj: { [key: string]: { label: string; items: string[] } } = {
    layout: {
      label: '레이아웃',
      items: ['display', 'position', 'top', 'right', 'bottom', 'left', 'float', 'z-index'],
    },
    boxmodel: {
      label: '박스모델',
      items: ['width', 'height', 'box-sizing', 'overflow'],
    },
    typography: {
      label: '타이포그래피',
      items: ['line-height', 'font-size', 'text-align', 'color'],
    },
    background: {
      label: '배경',
      items: ['background-color'],
    },
    border: {
      label: '테두리',
      items: ['border', 'border-radius', 'border-width'],
    },
    spacing: {
      label: '간격',
      items: ['margin', 'padding'],
    },
    flexProperties: {
      label: 'flex 속성',
      items: ['flex', 'flex-direction', 'justify-content', 'align-items'],
    },
    gridProperties: {
      label: 'grid 속성',
      items: ['grid', 'grid-template-rows', 'grid-template-columns', 'gap'],
    },
  };

  const [selectedCssCategory, setSelectedCssCategory] = useState('layout');
  const [checkedProperties, setCheckedProperties] = useState<{ [key: string]: boolean }>({});

  // 체크박스 상태 변경 함수
  const handleCheckboxChange = (property: string) => {
    setCheckedProperties((prev) => ({
      ...prev,
      [property]: !prev[property],
    }));
  };

  return (
    <section className="flex h-[26rem] w-full">
      <nav className="flex flex-shrink-0 flex-col gap-1.5 overflow-y-scroll border-r border-r-gray-100 px-4 py-3">
        {Object.keys(cssCategoriesObj).map((cssCategory) => (
          <button
            key={cssCategory}
            onClick={() => setSelectedCssCategory(cssCategory)}
            className={`text-bold-sm flex cursor-pointer rounded p-3 text-gray-200 ${selectedCssCategory === cssCategory && 'text-gray-black bg-yellow-500'}`}
          >
            {cssCategory}
          </button>
        ))}
      </nav>
      <article className="flex h-full w-full flex-col gap-4 overflow-y-scroll p-3">
        {cssCategoriesObj[selectedCssCategory].items.map((cssName, index) => (
          <div
            key={index}
            className={`flex h-[66px] w-full flex-shrink-0 items-center justify-between rounded-lg px-4 ${
              checkedProperties[cssName] ? 'bg-yellow-500' : 'bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                checked={!!checkedProperties[cssName]}
                onChange={() => handleCheckboxChange(cssName)}
                title={cssName}
                className="h-5 w-5 appearance-none rounded border border-gray-100 bg-center bg-no-repeat checked:bg-white checked:bg-[url('@/shared/assets/check.svg')]"
              />
              <div className="flex items-center gap-2">
                <span className="text-semibold-md text-gray-black max-w-32 truncate border-gray-100">
                  {cssName}
                </span>
                <Question />
              </div>
            </div>
            <div className="truncate">영재</div>
          </div>
        ))}
      </article>
    </section>
  );
};
