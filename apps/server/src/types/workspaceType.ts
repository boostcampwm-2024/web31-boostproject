export type TtotalCssPropertyObj = {
  [key: string]: {
    checkedCssPropertyObj: {
      [key: string]: boolean;
    };
    cssOptionObj: {
      [key: string]: string;
    };
  };
};

export type TcssList = Tcss[];

export type Tcss = {
  class_name: string;
  option_list: Toption[];
};

export type Toption = {
  property: string;
  value: string;
  is_checked: boolean;
};

export type Tworkspace = {
  user_id: string;
  workspace_id: string;
  css_list: TcssList;
  updated_at: Date;
  is_css_reset: boolean;
};
