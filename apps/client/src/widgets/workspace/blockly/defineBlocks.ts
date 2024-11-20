import * as Blockly from 'blockly/core';

export const defineBlocks = () => {
  Blockly.Blocks['html'] = {
    init: function () {
      this.appendDummyInput().appendField('html');
      this.appendValueInput('css class').setCheck('String').appendField('css class');
      this.appendStatementInput('children').appendField('children');
      this.setColour(230);
    },
  };

  Blockly.Blocks['head'] = {
    init: function () {
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.appendEndRowInput().appendField('head');
      this.appendValueInput('css class').setCheck('CSS-CLASS').appendField('css class');
      this.appendStatementInput('children').appendField();
      this.setColour(120);
    },
  };

  Blockly.Blocks['body'] = {
    init: function () {
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.appendEndRowInput().appendField('body');
      this.appendValueInput('css class').setCheck('CSS-CLASS').appendField('css class');
      this.appendStatementInput('children').appendField();
      this.setColour(300);
    },
  };

  Blockly.Blocks['p'] = {
    init: function () {
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.appendEndRowInput().appendField('p');
      this.appendValueInput('css class').setCheck('CSS-CLASS').appendField('css class');
      this.appendStatementInput('children').appendField();
      this.setColour(180);
    },
  };

  Blockly.Blocks['button'] = {
    init: function () {
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.appendEndRowInput().appendField('button');
      this.appendValueInput('css class').setCheck('CSS-CLASS').appendField('css class');
      this.appendStatementInput('children').appendField();
      this.setColour(280);
    },
  };

  Blockly.Blocks['text'] = {
    init: function () {
      this.setPreviousStatement(true); // 다른 블록 위에 연결 가능
      this.setNextStatement(true); // 다른 블록 아래에 연결 가능
      this.appendDummyInput().appendField('text').appendField(new Blockly.FieldTextInput(), 'TEXT');
      this.setColour(40);
    },
  };

  // css 블록
  Blockly.Blocks['css_style'] = {
    init: function () {
      this.appendDummyInput().appendField(new Blockly.FieldLabelSerializable('클래스명'), 'CLASS'); // "클래스명"은 초기값
      this.setOutput(true); // 이 블록을 다른 블록에 연결할 수 있도록 설정
      this.setColour('#02D085');
    },
  };
};
