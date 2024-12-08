import * as Blockly from 'blockly/core';

import { create } from 'zustand';

type TWorkspace = {
  workspace: Blockly.WorkspaceSvg | null;
  canvasInfo: string;
  name: string;

  setWorkspace: (newWorkspace: Blockly.WorkspaceSvg | null) => void;
  setCanvasInfo: (blockInfo: string) => void;
  setName: (name: string) => void;
};

export const useWorkspaceStore = create<TWorkspace>((set) => ({
  workspace: null,
  canvasInfo: '',
  name: '워크스페이스 이름',
  setWorkspace: (newWorkspace: Blockly.WorkspaceSvg | null) => {
    set({ workspace: newWorkspace });
  },
  setCanvasInfo: (blockInfo: string) => set(() => ({ canvasInfo: blockInfo })),
  setName: (name: string) => set(() => ({ name: name })),
}));
