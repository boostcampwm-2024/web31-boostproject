import { CustomFieldLabelSerializable } from '@/core/customFieldLabelSerializable';
import * as Blockly from 'blockly/core';

export const createCssClassBlock = (cssClassName: string) => {
  if (!Blockly.Blocks[cssClassName]) {
    Blockly.Blocks[cssClassName] = {
      init: function () {
        this.appendDummyInput().appendField(
          new CustomFieldLabelSerializable(cssClassName),
          'CLASS'
        );
        this.setOutput(true);
        this.setStyle(`defaultBlockCss`);
      },
    };
  }
};
