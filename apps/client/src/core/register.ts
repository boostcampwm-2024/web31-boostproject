import * as Blockly from 'blockly/core';
import CustomCategory from './customCategory';
import FixedFlyout from './fixedFlyout';
import StyleFlyout from './styleFlyout';
import { CustomRenderer } from './customRenderer';

export const registerCustomComponents = () => {
  Blockly.blockRendering.register('boolock', CustomRenderer);

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

  Blockly.Css.register(`
    .blocklyZoom>image, .blocklyZoom>svg>image {
      opacity: .6;
    }

    .blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {
      opacity: .8;
    }

    .blocklyZoom>image:active, .blocklyZoom>svg>image:active {
      opacity: 1;
    }
  `);
};
