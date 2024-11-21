import { create } from 'zustand';

type TcssTooltip = {
  offsetX: number;
  offsetY: number;
  leftX: number;
  topY: number;

  setOffsetX: (offsetX: number) => void;
  setOffsetY: (offsetY: number) => void;
  setLeftX: (leftX: number) => void;
  setTopY: (topY: number) => void;
};

export const useCssTooltipStore = create<TcssTooltip>((set) => ({
  offsetX: -1,
  offsetY: -1,
  leftX: 0,
  topY: 0,
  setOffsetX: (offsetX) => set({ offsetX }),
  setOffsetY: (offsetY) => set({ offsetY }),
  setLeftX: (leftX) => set({ leftX }),
  setTopY: (topY) => set({ topY }),
}));
