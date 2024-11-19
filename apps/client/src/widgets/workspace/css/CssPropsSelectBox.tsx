import { useEffect, useRef, useState } from 'react';

import Question from '@/shared/assets/question.svg?react';
import { TcssCategory } from '@/shared/types';
import { cssCategoryList } from '@/widgets/workspace/css/cssCategory';

type Ttooltip = {
  visible: boolean;
  x: number;
  y: number;
  description: string;
};

export const CssPropsSelectBox = () => {
  const [selectedCssCategory, setSelectedCssCategory] = useState<TcssCategory>('레이아웃');
  const [checkedProperties, setCheckedProperties] = useState<{ [key: string]: boolean }>({});
  const [styleProperty, setStyleProperty] = useState<{ [key: string]: string }>({});
  const [isHover, setIsHover] = useState<boolean>(false);
  const [indexOfHover, setIndexOfHover] = useState<number>(-1);
  const [tooltip, setTooltip] = useState<Ttooltip>({
    visible: false,
    x: 0,
    y: 0,
    description: '',
  });

  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);

  const [leftX, setLeftX] = useState<number>(0);
  const [downY, setDownY] = useState<number>(0);

  const cssPropSelectBoxRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const tooltipWidth = tooltipRef.current?.offsetWidth || 0;
    const cssPropSelectBoxWidth = cssPropSelectBoxRef.current?.offsetWidth || 0;

    const tooltopHeight = tooltipRef.current?.offsetHeight || 0;
    const cssPropSelectBoxHeight = cssPropSelectBoxRef.current?.offsetHeight || 0;

    if (offsetX + tooltipWidth > cssPropSelectBoxWidth) {
      setLeftX(offsetX + tooltipWidth - cssPropSelectBoxWidth);
    } else {
      setLeftX(0);
    }

    if (offsetY + tooltopHeight > cssPropSelectBoxHeight) {
      setDownY(offsetY + tooltopHeight - cssPropSelectBoxHeight);
    } else {
      setDownY(0);
    }
  }, [offsetX, offsetY, screenWidth]);

  /**
   * @description 체크박스 변경 이벤트 핸들러
   */
  const handleCheckboxChange = (property: string) => {
    setCheckedProperties((prev) => ({
      ...prev,
      [property]: !prev[property],
    }));
  };

  /**
   * @description 스타일 프로퍼티 변경 이벤트 핸들러
   */
  const handleStylePropertyChange = (property: string, value: string) => {
    if (styleProperty[property] === value) {
      return;
    }
    setStyleProperty((prev) => ({
      ...prev,
      [property]: value,
    }));
  };

  /**
   * @description 엔터키 입력시 스타일 프로퍼티 변경 이벤트 핸들러
   */
  const handleEnterKey = (property: string, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleStylePropertyChange(property, e.currentTarget.value);
      e.currentTarget.blur();
      e.preventDefault();
    }
  };

  const handleMouseEnter = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    index: number,
    description: string
  ) => {
    setIsHover(true);
    setIndexOfHover(index);
    setTooltip({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      description: description,
    });
  };

  const handleMouseLeave = () => {
    setIsHover(false);
    setIndexOfHover(-1);
    setTooltip({
      visible: false,
      x: 0,
      y: 0,
      description: '',
    });
  };

  useEffect(() => {
    console.log(checkedProperties);
  }, [checkedProperties]);

  useEffect(() => {
    console.log(styleProperty);
  }, [styleProperty]);

  return (
    <section className="flex h-[26rem] w-full" ref={cssPropSelectBoxRef}>
      <nav className="flex flex-shrink-0 flex-col gap-1.5 overflow-y-scroll border-r border-r-gray-100 px-4 py-3">
        {cssCategoryList.map((cssCategory) => (
          <button
            key={cssCategory.category}
            onClick={() => setSelectedCssCategory(cssCategory.category)}
            className={`text-bold-sm flex cursor-pointer rounded p-3 text-gray-200 ${selectedCssCategory === cssCategory.category && 'text-gray-black bg-yellow-500'}`}
          >
            {cssCategory.category}
          </button>
        ))}
      </nav>
      <article className="flex h-full w-full flex-col gap-4 overflow-y-scroll p-3">
        {cssCategoryList
          .filter((cssCategory) => cssCategory.category === selectedCssCategory)
          .map((cssCategory) =>
            cssCategory.items.map((cssItem, index) => (
              <div
                key={index}
                className={`flex h-[66px] w-full flex-shrink-0 items-center justify-between rounded-lg px-4 ${
                  checkedProperties[cssItem.label] ? 'bg-yellow-500' : 'bg-gray-50'
                } `}
              >
                <div className="flex items-center gap-5">
                  <input
                    type="checkbox"
                    checked={!!checkedProperties[cssItem.label]}
                    onChange={() => handleCheckboxChange(cssItem.label)}
                    title={cssItem.label}
                    className="h-5 w-5 appearance-none rounded border border-gray-100 bg-center bg-no-repeat checked:bg-white checked:bg-[url('@/shared/assets/check.svg')]"
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-semibold-md text-gray-black max-w-32 truncate border-gray-100">
                      {cssItem.label}
                    </span>
                    <div className="relative">
                      <Question
                        onMouseEnter={(e) => handleMouseEnter(e, index, cssItem.description)}
                        onMouseLeave={handleMouseLeave}
                      />
                      {isHover && indexOfHover === index && (
                        <div className="absolute left-3 w-40 rounded-lg bg-green-500 px-4 py-2 text-white">
                          <p>{cssItem.description}</p>
                          <div className="absolute z-10">
                            <div className="rounded-sm before:absolute before:-left-5 before:bottom-[36px] before:h-4 before:w-4 before:-rotate-45 before:transform before:border-l-2 before:border-t-2 before:border-green-500 before:bg-green-500"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {cssItem.type === 'select' && (
                  <select
                    id={cssItem.label}
                    className="bg-gray-white focus:ring-gray-black text-semibold-md focus:border-gray-black w-[120px] truncate rounded-lg border border-gray-100 px-2 py-1 outline-none"
                    onChange={(e) => handleStylePropertyChange(cssItem.label, e.target.value)}
                  >
                    {cssItem.option?.map((option) => <option value={option}>{option}</option>)}
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
      {tooltip.visible && (
        <div
          className="absolute z-50 rounded bg-gray-700 p-2 text-white"
          style={{ top: tooltip.y + 10, left: tooltip.x + 10 }}
          ref={tooltipRef}
        >
          {tooltip.description}
        </div>
      )}
    </section>
  );
};
