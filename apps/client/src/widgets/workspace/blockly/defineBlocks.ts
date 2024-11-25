import { CustomFieldLabelSerializable } from '@/core/customFieldLabelSerializable';
import { CustomFieldTextInput } from '@/core/customFieldTextInput';
import { addPreviousTypeName } from '@/shared/utils';
import * as Blockly from 'blockly/core';

/**
 * html 태그 블록을 생성할 때 좀 더 편리하게 생성하기 위해 만든 헬퍼함수입니다.
 * @param blockName blockName은 html 태그 블록의 타입 및 이름을 정의할 때 사용되는 변수
 * @param blockColorNum blockTheme를 지정할 때 몇번 default block 및 css blockTheme를 사용할 것인지 설정할 때 사용되는 변수
 * @param blockDefinition 기본 html태그 블록 설정을 사용하는 것이 아닌 사용자 정의 속성을 위한 옵션 변수
 * @param isDefault 기본 html태그 블록 설정을 사용할 것인지, 사용자 정의 속성을 사용할 것인지 정하는 변수
 */
const defineBlockWithDefaults = (
  blockName: string,
  blockColorNum: number | string,
  blockDefinition: any = { init: function () {} },
  isDefault: boolean = true
) => {
  const originalInit = blockDefinition.init;
  blockDefinition.init = function () {
    originalInit.call(this);

    if (!this.styleName_) {
      this.setStyle(`default_block${blockColorNum}`);
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
    '_css',
    {
      init: function () {
        this.appendDummyInput().appendField(new CustomFieldLabelSerializable('클래스명'), 'CLASS'); // "클래스명"은 초기값
        this.setOutput(true); // 이 블록을 다른 블록에 연결할 수 있도록 설정
      },
    },
    false
  );
};
