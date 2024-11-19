import { useEffect, useRef, useState } from 'react';

import Question from '@/shared/assets/question.svg?react';
import { TcssCategory } from '@/shared/types';
import { cssCategoryList } from '@/widgets/workspace/css/cssCategory';
import { CssTooltip } from '@/entities';

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

  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight);
  const [offsetX, setOffsetX] = useState<number>(-1);
  const [offsetY, setOffsetY] = useState<number>(-1);

  const [leftX, setLeftX] = useState<number>(0);
  const [topY, setTopY] = useState<number>(0);

  const cssPropSelectBoxRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const debounce = <T extends (...args: any[]) => any>(fn: T, delay: number) => {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
      let result: any;
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        result = fn(...args);
      }, delay);
      return result;
    };
  };

  useEffect(() => {
    const handleResize = debounce(() => {
      console.log('handleResize');
      console.log(window.innerWidth, window.innerHeight);
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    }, 200);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    console.log('screenWidth, screenHeight');
  }, [screenWidth, screenHeight]);

  useEffect(() => {
    console.log(`window.innerWidth: ${screenWidth} window.innerHeight: ${screenHeight}`);
    const tooltipWidth = tooltipRef.current?.offsetWidth || 0;
    const tooltipHeight = tooltipRef.current?.offsetHeight || 0;

    const cssPropSelectBoxWidth = cssPropSelectBoxRef.current?.offsetWidth || 0;

    console.log(tooltipRef, tooltipHeight);

    if (tooltipWidth + offsetX > cssPropSelectBoxWidth) {
      setLeftX(offsetX + tooltipWidth - cssPropSelectBoxWidth);
    } else {
      setLeftX(0);
    }

    if (tooltipHeight + offsetY > screenHeight) {
      console.log(tooltipHeight, offsetY, screenHeight);
      setTopY(tooltipHeight);
    } else {
      console.log('asdsadasd');
      setTopY(0);
    }
  }, [offsetX, offsetY, screenWidth, screenHeight, indexOfHover]);

  useEffect(() => {
    if (!tooltipRef.current) {
      return;
    }
    console.log(`leftX: ${leftX} downY: ${topY}`);
    // tooltipRef.current.style.left = `${leftX}px`;
    // tooltipRef.current.style.top = `${topY}px`;
    console.log(`tooltipRef.current.style.left: ${tooltipRef.current.style.left}`);
    console.log(`tooltipRef.current.style.top: ${tooltipRef.current.style.top}`);
  }, [leftX, topY, indexOfHover]);

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
    console.log(e.currentTarget.getBoundingClientRect());
    setOffsetX(e.currentTarget.getBoundingClientRect().x);
    setOffsetY(e.currentTarget.getBoundingClientRect().y);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
    setIndexOfHover(-1);
  };

  useEffect(() => {
    console.log(checkedProperties);
  }, [checkedProperties]);

  useEffect(() => {
    console.log(styleProperty);
  }, [styleProperty]);

  return (
    <section className="relative flex h-[26rem] w-full" ref={cssPropSelectBoxRef}>
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
      <article className="flex h-full w-full flex-col gap-4 overflow-visible overflow-x-hidden overflow-y-scroll p-3">
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
                    <p className="text-semibold-md text-gray-black max-w-36 border-gray-100">
                      {cssItem.label}
                    </p>
                    <Question
                      onMouseEnter={(e) => handleMouseEnter(e, index, cssItem.description)}
                      onMouseLeave={handleMouseLeave}
                    />
                    <CssTooltip
                      description={cssItem.description}
                      isOpen={isHover && indexOfHover === index}
                      leftX={leftX}
                      topY={topY}
                      ref={tooltipRef}
                    />
                  </div>
                </div>
                {cssItem.type === 'select' && (
                  <select
                    id={cssItem.label}
                    className="bg-gray-white focus:ring-gray-black text-semibold-md focus:border-gray-black w-[120px] truncate rounded-lg border border-gray-100 px-2 py-1 outline-none"
                    onChange={(e) => handleStylePropertyChange(cssItem.label, e.target.value)}
                  >
                    {cssItem.option?.map((option) => (
                      <option id={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                )}
                {cssItem.type === 'input' && (
                  <input
                    type="text"
                    className="text-semibold-md focus:border-gray-black placeholder:text-semibold-sm w-28 rounded-lg border border-gray-100 px-2 py-1 placeholder-gray-100 focus:border focus:outline-none"
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

      {/* {tooltip.visible && (
        <div
          className="absolute z-50 rounded bg-gray-700 p-2 text-white"
          style={{
            left: `-${leftX}px`,
            bottom: `-${downY}px`,
          }}
          ref={tooltipRef}
        >
          {tooltip.description}
        </div>
      )} */}
    </section>
  );
};
