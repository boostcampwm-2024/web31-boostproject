import { create } from 'zustand';

type TworkspaceChangeStatus = {
  isBlockChanged: boolean;
  isCssChanged: boolean;

  setIsBlockChanged: (isBlockChanged: boolean) => void;
  setIsCssChanged: (isCssChanged: boolean) => void;
};

export const useWorkspaceChangeStatusStore = create<TworkspaceChangeStatus>((set) => ({
  isBlockChanged: false,
  isCssChanged: false,
  setIsBlockChanged: (isBlockChanged) => set({ isBlockChanged }),
  setIsCssChanged: (isCssChanged) => set({ isCssChanged }),
}));
