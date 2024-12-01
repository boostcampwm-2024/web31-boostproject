import { create } from 'zustand';

type TClassBlock = {
  classBlockList: string[];
  addClassBlock: (newClassBlockName: string) => void;
  findClassBlock: (classBlockName: string) => boolean;
  removeClassBlock: (classBlockName: string) => void;
  initClassBlockList: (classList: string[]) => void;
};

export const useClassBlockStore = create<TClassBlock>((set, get) => ({
  classBlockList: [],
  addClassBlock: (newClassBlockName: string) => {
    set((state) => ({
      classBlockList: [...state.classBlockList, newClassBlockName],
    }));
  },
  findClassBlock: (classBlockName: string) => {
    const state = get();
    return state.classBlockList.includes(classBlockName);
  },
  removeClassBlock: (classBlockName: string) => {
    set((state) => ({
      classBlockList: state.classBlockList.filter((name) => name !== classBlockName),
    }));
  },
  initClassBlockList: (classList: string[]) => {
    set({ classBlockList: classList });
  },
}));
