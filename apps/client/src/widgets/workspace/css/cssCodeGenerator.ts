export const cssCodeGenerator = (totalCssPropertyObj: any) => {
  let cssCode = '';
  Object.keys(totalCssPropertyObj).forEach((className) => {
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
  console.log(cssCode);
  return cssCode;
};
