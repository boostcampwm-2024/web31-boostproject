import { useCssOptionItem, useCssOptions, useCssTooltip } from '@/shared/hooks';

import { CssTooltip } from '@/entities';
import Question from '@/shared/assets/question.svg?react';
import { TCssCategoryItem } from '@/shared/types';
import { useCssPropsStore } from '@/shared/store';
import { Select, SelectSize } from '@/shared/ui';

type CssOptionItemProps = {
  cssItem: TCssCategoryItem;
  index: number;
};

export const CssOptionItem = ({ cssItem, index }: CssOptionItemProps) => {
  const { totalCssPropertyObj, currentCssClassName } = useCssPropsStore();
  const { handleCssPropertyCheckboxChange, handleCssOptionChange, handleColorChange } =
    useCssOptions();

  const {
    cssOptionValue,
    isHover,
    indexOfHover,
    isChecked,
    cssOption,
    handleMouseEnter,
    handleEnterKey,
    handleMouseLeave,
    handleChangeInputValue,
  } = useCssOptionItem(cssItem);

  const { leftX, topY } = useCssTooltip();

  return (
    <div
      className={`flex h-[66px] w-full flex-shrink-0 items-center justify-between rounded-lg px-4 ${
        totalCssPropertyObj[currentCssClassName] &&
        totalCssPropertyObj[currentCssClassName].checkedCssPropertyObj[cssItem.label]
          ? 'bg-yellow-500'
          : 'bg-gray-50'
      } `}
    >
      <div className="flex items-center gap-5">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => handleCssPropertyCheckboxChange(cssItem.label, isChecked, cssOption)}
          title={cssItem.label}
          className="h-5 w-5 appearance-none rounded border border-gray-100 bg-center bg-no-repeat checked:bg-white checked:bg-[url('@/shared/assets/check.svg')]"
          disabled={currentCssClassName.length === 0}
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
        <Select
          id={cssItem.label}
          options={cssItem.option!}
          value={cssOption}
          onChange={(selected) => handleCssOptionChange(cssItem.label, selected)}
          disabled={currentCssClassName.length === 0}
          size={SelectSize.SMALL}
        />
      )}
      {cssItem.type === 'input' && (
        <input
          type="text"
          className="text-medium-md placeholder:text-medium-md w-36 rounded-lg border border-gray-100 px-4 py-1.5 text-gray-500 placeholder-gray-100 focus:border-gray-200 focus:outline-none disabled:border disabled:border-gray-100 disabled:bg-gray-50"
          placeholder="값을 입력하세요"
          onBlur={(e) => handleCssOptionChange(cssItem.label, e.target.value)}
          onKeyDown={(e) => handleEnterKey(cssItem.label, e)}
          value={cssOptionValue}
          onChange={handleChangeInputValue}
          disabled={currentCssClassName.length === 0}
        />
      )}
      {cssItem.type === 'color' && (
        <div className="flex items-center gap-4">
          <p className="text-medium-md text-gray-500">{cssOption}</p>
          <input
            type="color"
            title={cssOption}
            onChange={(e) => handleColorChange(cssItem.label, e.target.value)}
            value={cssOption}
            className="h-5 w-5 cursor-pointer appearance-none bg-transparent"
            disabled={currentCssClassName.length === 0}
          />
        </div>
      )}
    </div>
  );
};
