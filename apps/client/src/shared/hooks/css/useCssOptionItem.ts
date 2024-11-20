import { useCssOptions } from '@/shared/hooks';
import { useCssTooltipStore } from '@/shared/store';
import { useState } from 'react';

export const useCssOptionItem = (initialValue: string) => {
  const { handleCssOptionChange } = useCssOptions();
  const { setOffsetX, setOffsetY } = useCssTooltipStore();
  const [cssOptionValue, setCssOptionValue] = useState<string>(initialValue);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [indexOfHover, setIndexOfHover] = useState<number>(-1);

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
    handleEnterKey,
    handleMouseEnter,
    handleMouseLeave,
    handleChangeInputValue,
  };
};
