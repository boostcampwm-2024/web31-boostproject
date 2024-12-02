import { create } from 'zustand';

type TModalStore = {
  isModalOpen: boolean;
  modalContent: string;
  isLoading: boolean;
  isImageUpload: boolean;
  imagePathList: Map<string, string>;
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
  pushImagePath: (filename: string, item: string) => void;
  deleteImagePath: (filename: string) => void;
  updateImageMap: (path: string) => void;
  setNowImage: (filename: string) => void;
  setInitialImageMap: (imageMapStr: string) => void;
  setInitialImageList: (imageListStr: string) => void;
};

export const useModalStore = create<TModalStore>()((set) => ({
  isModalOpen: false,
  modalContent: '워크스페이스 이름',
  isLoading: false,
  isImageUpload: false,
  imagePathList: new Map<string, string>(),
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
    set((state) => {
      const newImagePathList = new Map(state.imagePathList);
      newImagePathList.set(filename, item);
      return { imagePathList: newImagePathList };
    }),
  deleteImagePath: (filename) =>
    set((state) => {
      const newImagePathList = new Map(state.imagePathList);
      newImagePathList.delete(filename);
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
  setInitialImageMap: (imageMapStr) =>
    set(() => {
      const imageMapJson =
        imageMapStr === ''
          ? new Map<string, string>()
          : new Map(Object.entries(JSON.parse(imageMapStr)));
      return { imageMap: imageMapJson as Map<string, string> };
    }),
  setInitialImageList: (imageListStr) =>
    set(() => {
      const imageListJson =
        imageListStr === ''
          ? new Map<string, string>()
          : new Map(Object.entries(JSON.parse(imageListStr)));

      return { imagePathList: imageListJson as Map<string, string> };
    }),
}));
