import { create } from 'zustand';

type TResetCss = {
  isResetCssChecked: boolean;
  toggleResetCss: () => void;
  setIsResetCssChecked: (value: boolean) => void;
};

export const useResetCssStore = create<TResetCss>((set) => ({
  isResetCssChecked: false,
  toggleResetCss: () => set((state) => ({ isResetCssChecked: !state.isResetCssChecked })),
  setIsResetCssChecked: (value) => set({ isResetCssChecked: value }),
}));
