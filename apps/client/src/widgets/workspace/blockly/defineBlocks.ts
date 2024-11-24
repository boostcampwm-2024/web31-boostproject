import { addPreviousTypeName } from '@/shared/utils';
import * as Blockly from 'blockly/core';
import { CustomFieldTextInput } from '../WorkspaceContent';

const defineBlockWithDefaults = (
  blockName: string,
  blockColorNum: number,
  blockDefinition: any = { init: function () {} },
  isDefault: boolean = true
) => {
  const originalInit = blockDefinition.init;
  blockDefinition.init = function () {
    originalInit.call(this);

    if (!this.styleName_) {
      this.setStyle(`default_blocks${blockColorNum}`);
    }

    if (isDefault) {
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.appendValueInput('css class').setCheck('CSS-CLASS').appendField(blockName);
      this.appendStatementInput('children').appendField();
    }
  };

  Blockly.Blocks[addPreviousTypeName(blockName)] = blockDefinition;
};

export const defineBlocks = () => {
  defineBlockWithDefaults(
    'html',
    1,
    {
      init: function () {
        this.appendDummyInput().appendField('html');
        this.appendStatementInput('children').appendField('');
      },
    },
    false
  );

  defineBlockWithDefaults(
    'head',
    2,
    {
      init: function () {
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.appendDummyInput().appendField('head');
      },
    },
    false
  );

  defineBlockWithDefaults('body', 3);

  defineBlockWithDefaults('p', 1);

  defineBlockWithDefaults('button', 2);

  defineBlockWithDefaults(
    'text',
    3,
    {
      init: function () {
        this.setPreviousStatement(true); // 다른 블록 위에 연결 가능
        this.setNextStatement(true); // 다른 블록 아래에 연결 가능
        this.appendDummyInput().appendField('text').appendField(new CustomFieldTextInput(), 'TEXT');
      },
    },
    false
  );

  defineBlockWithDefaults(
    'css_style',
    1,
    {
      init: function () {
        this.appendDummyInput().appendField(new CustomFieldTextInput('클래스명'), 'CLASS'); // "클래스명"은 초기값
        this.setOutput(true); // 이 블록을 다른 블록에 연결할 수 있도록 설정
      },
    },
    false
  );
};
