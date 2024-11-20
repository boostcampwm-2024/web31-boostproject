import { create } from 'zustand';

type TcssProps = {
  cssClassName: string;
  selectedCssCategory: string;
  checkedCssPropertyObj: { [key: string]: boolean };
  cssOptionObj: { [key: string]: string };

  setCssClassName: (cssClassName: string) => void;
  setSelectedCssCategory: (cssCategory: string) => void;
  setCheckedCssPropertyObj: (checkedCssPropertyObj: { [key: string]: boolean }) => void;
  setCssOptionObj: (cssOptionObj: { [key: string]: string }) => void;
};

export const useCssPropsStore = create<TcssProps>((set) => ({
  cssClassName: '',
  selectedCssCategory: '레이아웃',
  checkedCssPropertyObj: {},
  cssOptionObj: {},
  setCssClassName: (cssClassName) => set({ cssClassName }),
  setSelectedCssCategory: (cssCategory) => set({ selectedCssCategory: cssCategory }),
  setCheckedCssPropertyObj: (checkedCssPropertyObj) => set({ checkedCssPropertyObj }),
  setCssOptionObj: (cssOptionObj) => set({ cssOptionObj }),
}));
