import { create } from 'zustand';
import { TImageMap, TImageItem } from '../types';

type TModalStore = {
  isModalOpen: boolean;
  modalContent: string;
  isLoading: boolean;
  isImageUpload: boolean;
  imagePathList: TImageMap;
  imageMap: Map<string, string>;
  nowId: string;
  nowImage: string;
  handleModalConfirmButton: () => void;
  handleModalCloseButton: () => void;
  openModal: () => void;
  closeModal: () => void;
  setModalContent: (content: string) => void;
  setIsLoading: (loading: boolean) => void;
  setHandleModalConfirmButton: (action: () => void) => void;
  setHandleModalCloseButton: (action: () => void) => void;
  setNowId: (id: string) => void;
  setIsImageUpload: (isImageUpload: boolean) => void;
  pushImagePath: (filename: string, item: TImageItem) => void;
  deleteImagePath: (filename: string) => void;
  updateImageMap: (id: string, path: string) => void;
  setNowImage: (filename: string) => void;
};

export const useModalStore = create<TModalStore>()((set) => ({
  isModalOpen: false,
  modalContent: '워크스페이스 이름',
  isLoading: false,
  isImageUpload: false,
  imagePathList: {},
  nowId: '',
  nowImage: '',
  imageMap: new Map<string, string>(),
  handleModalConfirmButton: () => {},
  handleModalCloseButton: () => {},
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  setModalContent: (content) => set({ modalContent: content }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  setHandleModalConfirmButton: (action) => set({ handleModalConfirmButton: action }),
  setHandleModalCloseButton: (action) => set({ handleModalCloseButton: action }),
  setNowId: (id) => set({ nowId: id }),
  setIsImageUpload: (isImageUpload) => set({ isImageUpload: isImageUpload }),
  pushImagePath: (filename, item) =>
    set((state) => ({
      imagePathList: { ...state.imagePathList, [filename]: item },
    })),
  deleteImagePath: (filename) =>
    set((state) => {
      const newImagePathList = { ...state.imagePathList };
      delete newImagePathList[filename];
      const newImageMap = new Map(state.imageMap);
      for (const [key, value] of newImageMap) {
        if (value === filename) {
          newImageMap.set(key, '');
        }
      }
      return { imagePathList: newImagePathList, imageMap: newImageMap };
    }),
  updateImageMap: (path) =>
    set((state) => {
      const newMap = new Map(state.imageMap);
      newMap.set(state.nowId, path);
      return { imageMap: newMap };
    }),
  setNowImage: (filename) => set({ nowImage: filename }),
}));
