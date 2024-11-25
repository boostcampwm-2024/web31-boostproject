import * as Blockly from 'blockly/core';

export default class FieldClickableImage extends Blockly.FieldImage {
  private clickHandler_: (() => void) | null;

  constructor(src: string, width: number, height: number, alt: string, clickHandler: () => void) {
    super(src, width, height, alt);
    this.clickHandler_ = clickHandler;
  }

  showEditor_() {
    if (this.clickHandler_) {
      this.clickHandler_();
    }
  }

  onMouseDown_(e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    this.showEditor_();
  }
}
