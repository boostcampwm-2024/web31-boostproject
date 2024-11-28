export type TTotalCssPropertyObj = {
  [key: string]: {
    checkedCssPropertyObj: {
      [key: string]: boolean;
    };
    cssOptionObj: {
      [key: string]: string;
    };
  };
};

export type TCssList = TCss[];

export type TCss = {
  class_name: string;
  option_list: TOption[];
};

export type TOption = {
  property: string;
  value: string;
  is_checked: boolean;
};

export type TWorkspace = {
  user_id: string;
  workspace_id: string;
  css_list: TCssList;
  updated_at: Date;
  is_css_reset: boolean;
};
