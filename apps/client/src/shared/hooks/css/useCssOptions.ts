import { debounce } from '@/shared/utils';
import { useCallback } from 'react';
import { useCssPropsStore } from '@/shared/store';

export const useCssOptions = () => {
  const { setCheckedCssPropertyObj, setCssOptionObj, currentCssClassName } = useCssPropsStore();

  const handleCssPropertyCheckboxChange = (
    property: string,
    isChecked: boolean,
    cssOption: string
  ) => {
    setCheckedCssPropertyObj(currentCssClassName, property, !isChecked);
    if (!isChecked) {
      setCssOptionObj(currentCssClassName, property, cssOption);
    }
  };

  const handleCssOptionChange = (property: string, value: string) => {
    setCssOptionObj(currentCssClassName, property, value);
  };

  const handleColorChange = useCallback(
    debounce((property: string, value: string) => {
      handleCssOptionChange(property, value);
    }, 200),
    [handleCssOptionChange]
  );

  return {
    handleCssPropertyCheckboxChange,
    handleCssOptionChange,
    handleColorChange,
  };
};
