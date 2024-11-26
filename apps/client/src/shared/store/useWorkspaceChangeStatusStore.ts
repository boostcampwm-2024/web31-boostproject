import { create } from 'zustand';

type TworkspaceChangeStatus = {
  isBlockChanged: boolean;
  isCssChanged: boolean;

  setIsBlockChanged: (isBlockChanged: boolean) => void;
  setIsCssChanged: (isCssChanged: boolean) => void;
  resetChangedStatusState: () => void;
};

export const useWorkspaceChangeStatusStore = create<TworkspaceChangeStatus>((set) => ({
  isBlockChanged: false,
  isCssChanged: false,
  setIsBlockChanged: (isBlockChanged) => set({ isBlockChanged }),
  setIsCssChanged: (isCssChanged) => set({ isCssChanged }),
  resetChangedStatusState: () => set({ isBlockChanged: false, isCssChanged: false }),
}));
