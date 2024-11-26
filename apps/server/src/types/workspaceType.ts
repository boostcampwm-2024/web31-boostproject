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
  className: string;
  optionList: Toption[];
};

export type Toption = {
  property: string;
  value: string;
  isChecked: boolean;
};
