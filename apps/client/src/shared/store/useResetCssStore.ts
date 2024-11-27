import { create } from 'zustand';

type TResetCss = {
  isResetCssChecked: boolean;
  toggleResetCss: () => void;
};

export const useResetCssStore = create<TResetCss>((set) => ({
  isResetCssChecked: false,
  toggleResetCss: () => set((state) => ({ isResetCssChecked: !state.isResetCssChecked })),
}));
