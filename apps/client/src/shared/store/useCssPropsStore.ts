import { TtotalCssPropertyObj } from '@/shared/types';
import { create } from 'zustand';

type TcssProps = {
  currentCssClassName: string;
  selectedCssCategory: string;
  totalCssPropertyObj: TtotalCssPropertyObj;

  addNewCssClass: (newCssClass: string) => void;
  setCurrentCssClassName: (currentCssClassName: string) => void;
  setSelectedCssCategory: (cssCategory: string) => void;
  setCheckedCssPropertyObj: (className: string, label: string, value: boolean) => void;
  setCssOptionObj: (className: string, label: string, value: string) => void;
  resetCssPropsStore: () => void;
};

export const useCssPropsStore = create<TcssProps>((set) => {
  return {
    currentCssClassName: '',
    selectedCssCategory: '레이아웃',
    totalCssPropertyObj: {},
    addNewCssClass: (newCssClass) =>
      set((state) => {
        if (!state.totalCssPropertyObj[newCssClass]) {
          return {
            totalCssPropertyObj: {
              ...state.totalCssPropertyObj,
              [newCssClass]: {
                checkedCssPropertyObj: {},
                cssOptionObj: {},
              },
            },
          };
        }
        return {};
      }),
    setCurrentCssClassName: (currentCssClassName) => set({ currentCssClassName }),
    setSelectedCssCategory: (selectedCssCategory) => set({ selectedCssCategory }),
    setCheckedCssPropertyObj: (className, label, value) =>
      set((state) => {
        const updatedObj = state.totalCssPropertyObj[className] || {
          checkedCssPropertyObj: {},
          cssOptionObh: {},
        };
        updatedObj.checkedCssPropertyObj[label] = value;
        return {
          totalCssPropertyObj: {
            ...state.totalCssPropertyObj,
            [className]: updatedObj,
          },
        };
      }),
    setCssOptionObj: (className, label, value) =>
      set((state) => {
        const updatedObj = state.totalCssPropertyObj[className] || {
          checkedCssPropertyObj: {},
          cssOptionObj: {},
        };
        updatedObj.cssOptionObj[label] = value;
        return {
          totalCssPropertyObj: {
            ...state.totalCssPropertyObj,
            [className]: updatedObj,
          },
        };
      }),
    resetCssPropsStore: () =>
      set({ currentCssClassName: '', selectedCssCategory: '레이아웃', totalCssPropertyObj: {} }),
  };
});
