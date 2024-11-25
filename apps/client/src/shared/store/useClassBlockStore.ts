import { create } from 'zustand';

type TclassBlock = {
  classBlockList: string[];
  addClassBlock: (newClassBlockName: string) => void;
  removeClassBlock: (classBlockName: string) => void;
};

export const useClassBlockStore = create<TclassBlock>((set) => ({
  classBlockList: [],
  addClassBlock: (newClassBlockName: string) => {
    set((state) => ({
      classBlockList: [...state.classBlockList, newClassBlockName],
    }));
  },
  removeClassBlock: (classBlockName: string) => {
    set((state) => ({
      classBlockList: state.classBlockList.filter((name) => name !== classBlockName),
    }));
  },
}));
