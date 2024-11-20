import { debounce } from '@/shared/utils';
import { useState } from 'react';

export const useCssOptions = () => {
  const [checkedCssPropertyObj, setCheckedCssPropertyObj] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [cssOptionObj, setCssOptionObj] = useState<{ [key: string]: string }>({});

  const handleCssPropertyCheckboxChange = (property: string) => {
    setCheckedCssPropertyObj((prev) => ({
      ...prev,
      [property]: !prev[property],
    }));
  };

  const handleCssOptionChange = (property: string, value: string) => {
    setCssOptionObj((prev) => ({
      ...prev,
      [property]: value,
    }));
  };

  const handleColorChange = debounce((property: string, value: string) => {
    handleCssOptionChange(property, value);
  }, 200);

  return {
    checkedCssPropertyObj,
    cssOptionObj,
    handleCssPropertyCheckboxChange,
    handleCssOptionChange,
    handleColorChange,
  };
};
