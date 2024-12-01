import { create } from 'zustand';

type TCoachMarkStore = {
  isCoachMarkOpen: boolean;
  currentStep: number;
  openCoachMark: () => void;
  closeCoachMark: () => void;
  setCurrentStep: (step: number) => void;
};

export const useCoachMarkStore = create<TCoachMarkStore>()((set) => ({
  isCoachMarkOpen: true,
  currentStep: 0,
  openCoachMark: () => set({ isCoachMarkOpen: true }),
  closeCoachMark: () => set({ isCoachMarkOpen: false }),
  setCurrentStep: (step) => set({ currentStep: step }),
}));
