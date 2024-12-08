import { create } from 'zustand';

type TIframe = {
  iframeRef: React.RefObject<HTMLIFrameElement> | null;
  setIframeRef: (ref: React.RefObject<HTMLIFrameElement>) => void;
};

export const useIframeStore = create<TIframe>((set) => ({
  iframeRef: null,
  setIframeRef: (ref) => set({ iframeRef: ref }),
}));
