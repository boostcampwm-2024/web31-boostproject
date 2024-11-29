import { create } from 'zustand';
import * as Blockly from 'blockly/core';

type TWorkspace = {
  workspace: Blockly.WorkspaceSvg | null;
  canvasInfo: string;

  setWorkspace: (newWorkspace: Blockly.WorkspaceSvg | null) => void;
  setCanvasInfo: (blockInfo: string) => void;
};

export const useWorkspaceStore = create<TWorkspace>((set) => ({
  workspace: null,
  canvasInfo: '',
  setWorkspace: (newWorkspace: Blockly.WorkspaceSvg | null) => {
    set({ workspace: newWorkspace });
  },
  setCanvasInfo: (blockInfo: string) => set(() => ({ canvasInfo: blockInfo })),
}));
