import { useCssPropsStore, useCssTooltipStore } from '@/shared/store';
import { useEffect, useState } from 'react';

import { TCssCategoryItem } from '@/shared/types';
import { useCssOptions } from '@/shared/hooks';

export const useCssOptionItem = (cssItem: TCssCategoryItem) => {
  const { handleCssOptionChange } = useCssOptions();
  const { setOffsetX, setOffsetY } = useCssTooltipStore();
  const { currentCssClassName, totalCssPropertyObj, selectedCssCategory } = useCssPropsStore();

  const [cssOptionValue, setCssOptionValue] = useState<string>('');
  const [isHover, setIsHover] = useState<boolean>(false);
  const [indexOfHover, setIndexOfHover] = useState<number>(-1);

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [cssOption, setCssOption] = useState<string>(
    cssItem.type === 'select' && cssItem.option!.length > 0 ? cssItem.option![0] : ''
  );

  useEffect(() => {
    if (totalCssPropertyObj[currentCssClassName]) {
      setCssOptionValue(totalCssPropertyObj[currentCssClassName].cssOptionObj[cssItem.label] || '');
    }
  }, [currentCssClassName, totalCssPropertyObj, cssItem.label]);

  useEffect(() => {
    if (!totalCssPropertyObj[currentCssClassName]) {
      setIsChecked(false);
      setCssOption(
        cssItem.type === 'select' ? cssItem.option![0] : cssItem.type === 'color' ? '#000000' : ''
      );
      return;
    }
    setIsChecked(
      totalCssPropertyObj[currentCssClassName].checkedCssPropertyObj[cssItem.label] ?? false
    );
    if (!totalCssPropertyObj[currentCssClassName].cssOptionObj[cssItem.label]) {
      setCssOption(
        cssItem.type === 'select' ? cssItem.option![0] : cssItem.type === 'color' ? '#000000' : ''
      );
      return;
    }
    setCssOption(totalCssPropertyObj[currentCssClassName].cssOptionObj[cssItem.label]);
  }, [totalCssPropertyObj, currentCssClassName, cssItem, selectedCssCategory]);

  /**
   * @description 엔터키 입력시 스타일 프로퍼티 변경 이벤트 핸들러
   */
  const handleEnterKey = (property: string, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCssOptionChange(property, e.currentTarget.value);
      e.currentTarget.blur();
      e.preventDefault();
    }
  };

  /**
   * @description 마우스 엔터 이벤드 핸들러
   */
  const handleMouseEnter = (e: React.MouseEvent<SVGElement, MouseEvent>, index: number) => {
    setIsHover(true);
    setIndexOfHover(index);
    setOffsetX(e.currentTarget.getBoundingClientRect().x);
    setOffsetY(e.currentTarget.getBoundingClientRect().y);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
    setIndexOfHover(-1);
  };

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCssOptionValue(e.target.value);
  };

  return {
    cssOptionValue,
    isHover,
    indexOfHover,
    isChecked,
    cssOption,
    handleEnterKey,
    handleMouseEnter,
    handleMouseLeave,
    handleChangeInputValue,
  };
};
