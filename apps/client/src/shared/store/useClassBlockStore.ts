import { create } from 'zustand';
import { removeCssClassNamePrefix } from '../utils';

type TClassBlock = {
  classBlockList: string[];
  addClassBlock: (newClassBlockName: string) => void;
  removeClassBlock: (classBlockName: string) => void;
  initClassBlockList: (classList: string[]) => void;
};

export const useClassBlockStore = create<TClassBlock>((set) => ({
  classBlockList: [],
  addClassBlock: (newClassBlockName: string) => {
    set((state) => ({
      classBlockList: [...state.classBlockList, removeCssClassNamePrefix(newClassBlockName)],
    }));
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
