import { create } from 'zustand';

type TclassBlock = {
  classBlockList: string[];
  addClassBlock: (newClassBlockName: string) => void
};

export const useClassBlockStore = create<TclassBlock>((set) => ({
  classBlockList: [],
  addClassBlock: (newClassBlockName: string) => {
    set((state) => ({
      classBlockList: [...state.classBlockList, newClassBlockName],
    }));
  },
}));
