import * as Blockly from 'blockly/core';
import CustomCategory from './customCategory';
import FixedFlyout from './fixedFlyout';
import StyleFlyout from './styleFlyout';
import { CustomRenderer } from './customRenderer';
import { CustomFieldLabel } from './customFieldLabel';

export const registerCustomComponents = () => {
  Blockly.blockRendering.register('boolock', CustomRenderer);

  // 이 fieldLabel을 다른 곳에서 계속 부르면서 사용하기에 불편함도 있고, 실제 field_label에 등록시켜두어도 무리 없이 동작하여 레지스터로 등록해두었습니다.
  Blockly.fieldRegistry.unregister('field_label');
  Blockly.fieldRegistry.register('field_label', CustomFieldLabel);

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
