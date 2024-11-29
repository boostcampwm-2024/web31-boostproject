import { TWorkspace } from '@/types/workspaceType';

export const generateTotalCssPropertyObj = (workspace: TWorkspace) => {
  return {
    ...workspace.css_list.reduce((acc, css) => {
      return {
        ...acc,
        [css.class_name as string]: {
          checkedCssPropertyObj: css.option_list.reduce((acc, option) => {
            return { ...acc, [option.property as string]: option.is_checked };
          }, {}),
          cssOptionObj: css.option_list.reduce((acc, option) => {
            return { ...acc, [option.property as string]: option.value };
          }, {}),
        },
      };
    }, {}),
  };
};
