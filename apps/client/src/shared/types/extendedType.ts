import * as Blockly from 'blockly/core';
import { TTabToolboxConfig } from './tabType';

export interface IExtendedIToolbox extends Blockly.IToolbox {
  HtmlDiv: HTMLElement;
  getToolboxItems: () => Blockly.IToolboxItem[];
  setSelectedItem: (newItem: Blockly.IToolboxItem | null) => void;
  contentMap_: object;
}

export interface IExtendedOptions extends Blockly.BlocklyOptions {
  tabToolboxConfig?: TTabToolboxConfig;
}
