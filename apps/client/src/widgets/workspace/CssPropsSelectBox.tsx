import { useState } from 'react';
import Question from '@/shared/assets/question.svg?react';

export const CssPropsSelectBox = () => {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof categories>('레이아웃');
  const [checkedProperties, setCheckedProperties] = useState<{ [key: string]: boolean }>({});

  const categories: { [key: string]: string[] } = {
    레이아웃: ['display', 'position', 'top', 'right', 'bottom', 'left', 'float', 'z-index'],
    박스모델: ['width', 'height', 'box-sizing', 'overflow'],
    타이포그래피: ['line-height', 'font-size', 'text-align', 'color'],
    배경: ['background-color'],
    테두리: ['border', 'border-radius', 'border-width'],
    간격: ['margin', 'padding'],
    'flex 속성': ['flex', 'flex-direction', 'justify-content', 'align-items'],
    'grid 속성': ['grid', 'grid-template-rows', 'grid-template-comumns', 'gap'],
  };

  // 체크박스 상태 변경 함수
  const handleCheckboxChange = (property: string) => {
    setCheckedProperties((prev) => ({
      ...prev,
      [property]: !prev[property],
    }));
  };

  return (
    <div className="flex h-[392px] w-[504px]">
      <div className="border-r border-r-gray-100 p-2">
        {Object.keys(categories).map((category) => (
          <div
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`text-bold-sm flex h-[36px] w-[100px] cursor-pointer items-center rounded p-2 text-gray-200 ${selectedCategory === category && 'text-gray-black bg-yellow-500'}`}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="space-y-2 overflow-hidden p-3">
        {categories[selectedCategory].map((property, index) => (
          <div
            key={index}
            className={`flex h-[66px] w-[344px] items-center rounded-lg px-4 ${
              checkedProperties[property] ? 'bg-yellow-500' : 'bg-gray-50'
            }`}
          >
            <input
              type="checkbox"
              checked={!!checkedProperties[property]}
              onChange={() => handleCheckboxChange(property)}
              title={property}
              className="h-5 w-5 appearance-none rounded border border-gray-100 bg-center bg-no-repeat checked:bg-white checked:bg-[url('@/shared/assets/check.svg')]"
            />
            <p className="text-semibold-md text-gray-black border-gray-100 pl-5 pr-2">{property}</p>
            <Question />
          </div>
        ))}
      </div>
    </div>
  );
};
