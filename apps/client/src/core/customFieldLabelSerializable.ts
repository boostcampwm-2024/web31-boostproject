import * as Blockly from 'blockly/core';

export class CustomFieldLabelSerializable extends Blockly.FieldLabelSerializable {
  constructor(value?: string, textClass?: string, config?: Blockly.FieldLabelConfig) {
    super(String(value ?? ''), textClass, config);
  }

  override initView(): void {
    super.initView();
    if (this.textElement_) {
      this.textElement_.style.fill = `#41505B`;
    }
  }
}
