import * as Blockly from 'blockly/core';

export type TTabConfig = {
  label: string;
  toolboxConfig: Blockly.utils.toolbox.ToolboxDefinition;
  flyoutRegistryName?: string;
};

export type TTabs = Record<string, TTabConfig>;

export type TTabToolboxConfig = {
  tabs: TTabs;
  defaultSelectedTab?: string;
};
