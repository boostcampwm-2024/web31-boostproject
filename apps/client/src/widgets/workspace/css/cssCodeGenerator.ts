import { TtotalCssPropertyObj } from '@/shared/types';

export const cssCodeGenerator = (totalCssPropertyObj: TtotalCssPropertyObj) => {
  let cssCode = '';

  Object.keys(totalCssPropertyObj)
    .filter((className) => className.length > 0)
    .forEach((className) => {
      cssCode += `.${className} {\n`;
      Object.keys(totalCssPropertyObj[className].cssOptionObj).forEach((label) => {
        if (
          totalCssPropertyObj[className].checkedCssPropertyObj[label] &&
          totalCssPropertyObj[className].cssOptionObj[label].length > 0
        ) {
          cssCode += `  ${label} : ${totalCssPropertyObj[className].cssOptionObj[label]};\n`;
        }
      });
      cssCode += '}\n';
    });

  return cssCode;
};
