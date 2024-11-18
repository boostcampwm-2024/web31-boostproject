import { create } from 'zustand';

type TWorkspace = {
  name: string;
  setName: (newName: string) => void;
};

export const useWorkspaceStore = create<TWorkspace>((set) => ({
  name: '워크스페이스 이름',
  setName: (newName) => set({ name: newName }),
}));
