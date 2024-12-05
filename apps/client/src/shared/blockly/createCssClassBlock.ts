import { CustomFieldLabelSerializable } from '@/core/customFieldLabelSerializable';
import * as Blockly from 'blockly/core';
import { removeCssClassNamePrefix } from '../utils';

export const createCssClassBlock = (cssClassName: string) => {
  if (!Blockly.Blocks[cssClassName]) {
    Blockly.Blocks[cssClassName] = {
      init: function () {
        this.appendDummyInput().appendField(
          new CustomFieldLabelSerializable(removeCssClassNamePrefix(cssClassName)),
          'CLASS'
        );
        this.setOutput(true);
        this.setStyle(`defaultBlockCss`);
        this.showContextMenu = (e: PointerEvent) => {
          const transfromX = this.getSvgRoot().transform.baseVal[0].matrix.e;
          if (transfromX !== 8) {
            return;
          }
          const menuOptions = this.generateContextMenu();
          Blockly.ContextMenu.show(e, menuOptions, this.RTL);
        };
      },
    };
  }
};
