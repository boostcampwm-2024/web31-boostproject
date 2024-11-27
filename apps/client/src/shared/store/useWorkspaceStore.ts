import { create } from 'zustand';
import * as Blockly from 'blockly/core';

type Tworkspace = {
  workspace: Blockly.WorkspaceSvg | null;
  setWorkspace: (newWorkspace: Blockly.WorkspaceSvg) => void;
};

export const useWorkspaceStore = create<Tworkspace>((set) => ({
  workspace: null,
  setWorkspace: (newWorkspace: Blockly.WorkspaceSvg) => {
    set({ workspace: newWorkspace });
  },
}));
