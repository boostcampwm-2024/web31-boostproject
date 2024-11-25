import { create } from 'zustand';

type ModalStoreType = {
  isModalOpen: boolean;
  modalContent: string;
  isLoading: boolean;
  handleModalConfirmButton: () => void;
  handleModalCloseButton: () => void;
  openModal: () => void;
  closeModal: () => void;
  setModalContent: (content: string) => void;
  setIsLoading: (loading: boolean) => void;
  setHandleModalConfirmButton: (action: () => void) => void;
  setHandleModalCloseButton: (action: () => void) => void;
};

export const useModalStore = create<ModalStoreType>()((set) => ({
  isModalOpen: false,
  modalContent: '워크스페이스 이름',
  isLoading: false,
  handleModalConfirmButton: () => {},
  handleModalCloseButton: () => {},
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  setModalContent: (content) => set({ modalContent: content }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  setHandleModalConfirmButton: (action) => set({ handleModalConfirmButton: action }),
  setHandleModalCloseButton: (action) => set({ handleModalCloseButton: action }),
}));
