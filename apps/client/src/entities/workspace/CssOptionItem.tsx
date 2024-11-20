import { useCssOptionItem, useCssOptions, useCssTooltip } from '@/shared/hooks';

import { CssTooltip } from '@/entities';
import Question from '@/shared/assets/question.svg?react';
import { TcssCategoryItem } from '@/shared/types';
import { useCssPropsStore } from '@/shared/store';

type CssOptionItemProps = {
  cssItem: TcssCategoryItem;
  index: number;
};

export const CssOptionItem = ({ cssItem, index }: CssOptionItemProps) => {
  const { checkedCssPropertyObj, cssOptionObj } = useCssPropsStore();
  const { handleCssPropertyCheckboxChange, handleCssOptionChange, handleColorChange } =
    useCssOptions();

  const {
    cssOptionValue,
    isHover,
    indexOfHover,
    handleMouseEnter,
    handleEnterKey,
    handleMouseLeave,
    handleChangeInputValue,
  } = useCssOptionItem(cssOptionObj[cssItem.label] || '');

  const { leftX, topY } = useCssTooltip();

  return (
    <div
      className={`flex h-[66px] w-full flex-shrink-0 items-center justify-between rounded-lg px-4 ${
        checkedCssPropertyObj[cssItem.label] ? 'bg-yellow-500' : 'bg-gray-50'
      } `}
    >
      <div className="flex items-center gap-5">
        <input
          type="checkbox"
          checked={!!checkedCssPropertyObj[cssItem.label]}
          onChange={() => handleCssPropertyCheckboxChange(cssItem.label)}
          title={cssItem.label}
          className="h-5 w-5 appearance-none rounded border border-gray-100 bg-center bg-no-repeat checked:bg-white checked:bg-[url('@/shared/assets/check.svg')]"
        />
        <div className="flex items-center gap-2">
          <p className="text-semibold-md text-gray-black max-w-36 border-gray-100">
            {cssItem.label}
          </p>
          <Question
            onMouseEnter={(e) => handleMouseEnter(e, index)}
            onMouseLeave={handleMouseLeave}
          />
          <CssTooltip
            description={cssItem.description}
            isOpen={isHover && indexOfHover === index}
            leftX={leftX}
            topY={topY}
          />
        </div>
      </div>
      {cssItem.type === 'select' && (
        <select
          id={cssItem.label}
          className="bg-gray-white focus:ring-gray-black text-semibold-md focus:border-gray-black w-[120px] truncate rounded-lg border border-gray-100 px-2 py-1 outline-none"
          onChange={(e) => handleCssOptionChange(cssItem.label, e.target.value)}
          value={cssOptionObj[cssItem.label] || cssItem.option![0]}
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
          onBlur={(e) => handleCssOptionChange(cssItem.label, e.target.value)}
          onKeyDown={(e) => handleEnterKey(cssItem.label, e)}
          value={cssOptionValue}
          onChange={handleChangeInputValue}
        />
      )}
      {cssItem.type === 'color' && (
        <div className="flex items-center gap-4">
          <p>{cssOptionObj[cssItem.label] || '#000000'}</p>
          <input
            type="color"
            onChange={(e) => handleColorChange(cssItem.label, e.target.value)}
            value={cssOptionObj[cssItem.label] || '#000000'}
            className="h-5 w-5 cursor-pointer appearance-none bg-transparent"
          />
        </div>
      )}
    </div>
  );
};
