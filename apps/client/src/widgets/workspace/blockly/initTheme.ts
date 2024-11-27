import 'blockly/blocks';
import * as Blockly from 'blockly/core';

import { categoryColours } from '@/widgets';

// 디자인에 맞춰 블록에 따라 블록 색상이 다르게 적용되도록 커스텀 theme를 만들어두었습니다.
const defaultBlockStyles: {
  [key: string]: Partial<Blockly.Theme.BlockStyle>;
} = {
  ...Blockly.Themes.Zelos.blockStyles,
  defaultBlock1: {
    colourPrimary: '#B2DAFF',
    colourSecondary: '#F4F8FA',
    colourTertiary: '#2677C3',
  },
  defaultBlock2: {
    colourPrimary: '#67B6FF',
    colourSecondary: 'F4F8FA',
    colourTertiary: '#2677C3',
  },
  defaultBlock3: {
    colourPrimary: '#4195E4',
    colourSecondary: '#F4F8FA',
    colourTertiary: '#2677C3',
  },
  defaultBlockCss: {
    colourPrimary: '#FFF3AD',
    colourSecondary: '#41505B',
    colourTertiary: '#FFE241',
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
