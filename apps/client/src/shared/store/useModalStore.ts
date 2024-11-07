import { create } from 'zustand';

type ModalStoreType = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalStoreType>()((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));
