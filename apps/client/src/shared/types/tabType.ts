import * as Blockly from 'blockly/core';

export type TTabConfig = {
  label: string;
  toolboxConfig: Blockly.utils.toolbox.ToolboxInfo;
  flyoutRegistryName?: string;
};

export type TTabsConfig = Record<string, TTabConfig>;

export type TTabToolboxConfig = {
  tabs: TTabsConfig;
  defaultSelectedTab?: string;
};
