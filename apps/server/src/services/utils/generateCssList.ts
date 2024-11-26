import { Tcss, TcssList, TtotalCssPropertyObj } from '@/types/workspaceType';

/**
 * @description
 * checkedCssPropertyObj와 cssOptionObj의 길이를 비교
 * checkedCssPropertyObj의 길이가 더 길면 cssOptionObj보다 더 많은 css property를 저장하고 있는 것임
 * 그러므로 checkedCssPropertyObj를 기준으로 optionList에 값을 저장함
 * 그렇지 않다면 cssOptionObj를 기준으로 optionList에 값을 저장
 */
export const generateCssList = (totalCssPropertyObj: TtotalCssPropertyObj) => {
  const cssList: TcssList = [];
  Object.keys(totalCssPropertyObj).forEach((className) => {
    const css: Tcss = { class_name: className, option_list: [] };

    const checkedCssPropertyObj = totalCssPropertyObj[className].checkedCssPropertyObj;
    const cssOptionObj = totalCssPropertyObj[className].cssOptionObj;

    if (Object.keys(checkedCssPropertyObj).length >= Object.keys(cssOptionObj).length) {
      Object.keys(checkedCssPropertyObj).forEach((property: string) => {
        css.option_list.push({
          property,
          value: cssOptionObj[property],
          is_checked: checkedCssPropertyObj[property],
        });
      });
    } else {
      Object.keys(cssOptionObj).forEach((property: string) => {
        css.option_list.push({
          property,
          value: cssOptionObj[property],
          is_checked: checkedCssPropertyObj[property] || false,
        });
      });
    }
    cssList.push(css);
  });
  return cssList;
};
