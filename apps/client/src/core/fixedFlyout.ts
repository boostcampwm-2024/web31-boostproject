import * as Blockly from 'blockly/core';

export default class FixedFlyout extends Blockly.VerticalFlyout {
  private FIXED_POSITION: boolean;
  private AUTO_CLOSE: boolean;

  constructor(workspaceOptions: Blockly.Options) {
    super(workspaceOptions);
    this.FIXED_POSITION = true;
    this.AUTO_CLOSE = false;
  }

  position(): void {}

  hide() {
    if (this.AUTO_CLOSE) {
      super.hide();
    }
  }
}
