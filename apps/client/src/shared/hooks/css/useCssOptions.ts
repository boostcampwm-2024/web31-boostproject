import { debounce } from '@/shared/utils';
import { useCallback } from 'react';
import { useCssPropsStore } from '@/shared/store';

export const useCssOptions = () => {
  const { checkedCssPropertyObj, cssOptionObj, setCheckedCssPropertyObj, setCssOptionObj } =
    useCssPropsStore();

  const handleCssPropertyCheckboxChange = (property: string) => {
    setCheckedCssPropertyObj({
      ...checkedCssPropertyObj,
      [property]: !checkedCssPropertyObj[property],
    });
  };

  const handleCssOptionChange = (property: string, value: string) => {
    setCssOptionObj({ ...cssOptionObj, [property]: value });
  };

  const handleColorChange = useCallback(
    debounce((property: string, value: string) => {
      handleCssOptionChange(property, value);
    }, 200),
    [handleCssOptionChange]
  );

  return {
    checkedCssPropertyObj,
    cssOptionObj,
    handleCssPropertyCheckboxChange,
    handleCssOptionChange,
    handleColorChange,
  };
};
