import * as Blockly from 'blockly/core';
import CustomCategory from './customCategory';
import FixedFlyout from './fixedFlyout';
import StyleFlyout from './styleFlyout';

export const registerCustomComponents = () => {
  Blockly.registry.register(
    Blockly.registry.Type.TOOLBOX_ITEM,
    Blockly.ToolboxCategory.registrationName,
    CustomCategory,
    true
  );

  Blockly.registry.register(
    Blockly.registry.Type.FLYOUTS_VERTICAL_TOOLBOX,
    FixedFlyout.registryName,
    FixedFlyout,
    true
  );

  Blockly.registry.register(
    Blockly.registry.Type.FLYOUTS_VERTICAL_TOOLBOX,
    StyleFlyout.registryName,
    StyleFlyout,
    true
  );
};
