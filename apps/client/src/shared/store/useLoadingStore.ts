import { create } from 'zustand';

type TLoading = {
  isPending: boolean;
  setIsPending: (status: boolean) => void;
};

export const useLoadingStore = create<TLoading>((set) => ({
  isPending: false,
  setIsPending: (status) => set({ isPending: status }),
}));
