import * as Blockly from 'blockly/core';

import { create } from 'zustand';

type TBlocklyWorkspace = {
  workspace: Blockly.WorkspaceSvg | null;

  setWorkspace: (workspace: Blockly.WorkspaceSvg) => void;
};

export const useBlocklyWorkspaceStore = create<TBlocklyWorkspace>((set) => ({
  workspace: null,
  setWorkspace: (workspace: Blockly.WorkspaceSvg) => {
    set({ workspace });
  },
}));
