import { create } from 'zustand';

type ModalStoreType = {
  isModalOpen: boolean;
  modalContent: string;
  isLoading: boolean;
  modalAction: () => void;
  openModal: () => void;
  closeModal: () => void;
  setModalContent: (content: string) => void;
  setModalAction: (action: () => void) => void;
  setIsLoading: (loading: boolean) => void;
};

export const useModalStore = create<ModalStoreType>()((set) => ({
  modalContent: '워크스페이스 이름',
  modalAction: () => {},
  isModalOpen: false,
  isLoading: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  setModalContent: (content) => set({ modalContent: content }),
  setModalAction: (action) => set({ modalAction: action }),
  setIsLoading: (loading) => set({ isLoading: loading }),
}));
