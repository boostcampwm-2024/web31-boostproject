import 'blockly/blocks';
import * as Blockly from 'blockly/core';

import { categoryColours } from '@/widgets';

const defaultBlockStyles: {
  [key: string]: Partial<Blockly.Theme.BlockStyle>;
} = {
  ...Blockly.Themes.Zelos.blockStyles,
  default_blocks1: {
    colourPrimary: '#B2DAFF',
    colourSecondary: '#FFFFFF',
    colourTertiary: '#2677C3',
  },
  default_blocks2: {
    colourPrimary: '#67B6FF',
    colourSecondary: '#FFFFFF',
    colourTertiary: '#2677C3',
  },
  default_blocks3: {
    colourPrimary: '#4195E4',
    colourSecondary: '#FFFFFF',
    colourTertiary: '#2677C3',
  },
};

export const initTheme = Blockly.Theme.defineTheme('custom', {
  name: 'custom',
  base: Blockly.Themes.Classic,
  componentStyles: {
    workspaceBackgroundColour: '#fafafa', // 워크스페이스 배경색
    toolboxBackgroundColour: 'blackBackground', // 툴박스 배경색
    flyoutBackgroundColour: 'white', // 툴박스 플라이아웃 배경색
    flyoutOpacity: 1,
    scrollbarColour: '#000000',
    insertionMarkerColour: '#fff',
    insertionMarkerOpacity: 0.3,
    scrollbarOpacity: 0.001,
    cursorColour: '#d0d0d0',
  },

  categoryStyles: categoryColours,
  blockStyles: defaultBlockStyles,
});
