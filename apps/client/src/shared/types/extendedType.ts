import * as Blockly from 'blockly/core';

export interface IExtendedIToolbox extends Blockly.IToolbox {
  HtmlDiv: HTMLElement;
  getToolboxItems: () => Blockly.IToolboxItem[];
  setSelectedItem: (newItem: Blockly.IToolboxItem | null) => void;
  contentMap_: object;
}
