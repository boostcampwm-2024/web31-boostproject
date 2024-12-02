import { create } from 'zustand';

type TImageModalStore = {
  isModalOpen: boolean;
  imageList: Map<string, string>;
  imageMap: Map<string, string>;
  nowId: string;
  nowImage: string;
  setNowId: (id: string) => void;
  setIsModalOpen: (isModalOpen: boolean) => void;
  pushImagePath: (filename: string, item: string) => void;
  deleteImagePath: (filename: string) => void;
  updateImageMap: (path: string) => void;
  setNowImage: (filename: string) => void;
  setInitialImageMap: (imageMapStr: string) => void;
  setInitialImageList: (imageListStr: string) => void;
};

export const useImageModalStore = create<TImageModalStore>()((set) => ({
  isModalOpen: false,
  imageList: new Map<string, string>(),
  nowId: '',
  nowImage: '',
  imageMap: new Map<string, string>(),
  setNowId: (id) => set({ nowId: id }),
  setIsModalOpen: (isModalOpen) => set({ isModalOpen: isModalOpen }),
  pushImagePath: (filename, item) =>
    set((state) => {
      const newImageList = new Map(state.imageList);
      newImageList.set(filename, item);
      return { imageList: newImageList };
    }),
  deleteImagePath: (filename) =>
    set((state) => {
      const newImageList = new Map(state.imageList);
      newImageList.delete(filename);
      const newImageMap = new Map(state.imageMap);
      for (const [key, value] of newImageMap) {
        if (value === filename) {
          newImageMap.set(key, '');
        }
      }
      return { imageList: newImageList, imageMap: newImageMap };
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

      return { imageList: imageListJson as Map<string, string> };
    }),
}));
