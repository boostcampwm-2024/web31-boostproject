import { create } from 'zustand';
import { useWorkspaceChangeStatusStore } from '@/shared/store';

type TcssProps = {
  currentCssClassName: string;
  selectedCssCategory: string;
  totalCssPropertyObj: {
    [key: string]: {
      checkedCssPropertyObj: { [key: string]: boolean };
      cssOptionObj: { [key: string]: string };
    };
  };

  setCurrentCssClassName: (currentCssClassName: string) => void;
  setSelectedCssCategory: (cssCategory: string) => void;
  setCheckedCssPropertyObj: (className: string, label: string, value: boolean) => void;
  setCssOptionObj: (className: string, label: string, value: string) => void;
  resetCssPropsStore: () => void;
};

export const useCssPropsStore = create<TcssProps>((set) => ({
  currentCssClassName: '',
  selectedCssCategory: '레이아웃',
  totalCssPropertyObj: {},
  setCurrentCssClassName: (currentCssClassName) =>
    set((state) => {
      if (
        state.totalCssPropertyObj[currentCssClassName] === undefined &&
        currentCssClassName !== '클래스를 선택해주세요'
      ) {
        return {
          currentCssClassName,
          totalCssPropertyObj: {
            ...state.totalCssPropertyObj,
            [currentCssClassName]: {
              checkedCssPropertyObj: {},
              cssOptionObj: {},
            },
          },
        };
      }
      return { currentCssClassName, totalCssPropertyObj: state.totalCssPropertyObj };
    }),
  setSelectedCssCategory: (selectedCssCategory) => set({ selectedCssCategory }),
  setCheckedCssPropertyObj: (className, label, value) =>
    set((state) => {
      const { setIsCssChanged } = useWorkspaceChangeStatusStore();
      setIsCssChanged(true);
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
      const { setIsCssChanged } = useWorkspaceChangeStatusStore();
      setIsCssChanged(true);
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
}));
