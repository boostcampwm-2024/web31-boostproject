import { useCssPropsStore, useWorkspaceChangeStatusStore } from '@/shared/store';

import { debounce } from '@/shared/utils';
import { useCallback } from 'react';

export const useCssOptions = () => {
  const { setCheckedCssPropertyObj, setCssOptionObj, currentCssClassName } = useCssPropsStore();
  const { setIsCssChanged } = useWorkspaceChangeStatusStore();
  const handleCssPropertyCheckboxChange = (
    property: string,
    isChecked: boolean,
    cssOption: string
  ) => {
    setIsCssChanged(true);
    setCheckedCssPropertyObj(currentCssClassName, property, !isChecked);
    if (!isChecked) {
      setCssOptionObj(currentCssClassName, property, cssOption);
    }
  };

  const handleCssOptionChange = (property: string, value: string) => {
    setIsCssChanged(true);
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
