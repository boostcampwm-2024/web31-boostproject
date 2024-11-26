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
