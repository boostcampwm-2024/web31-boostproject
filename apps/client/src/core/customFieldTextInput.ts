import * as Blockly from 'blockly/core';

const dom = Blockly.utils.dom;

export class CustomFieldTextInput extends Blockly.FieldTextInput {
  protected textGroup_!: SVGGElement;
  protected backgroundRect_!: SVGRectElement;
  protected isFixed: boolean = false;

  protected override widgetCreate_(): HTMLInputElement | HTMLTextAreaElement {
    const htmlInput = super.widgetCreate_();

    const div = Blockly.WidgetDiv.getDiv();
    const scale = this.workspace_!.getScale();

    const borderRadius = 5 * scale + 'px';

    div!.style.borderRadius = 5 * scale + 'px';
    htmlInput.style.borderRadius = borderRadius;

    return htmlInput;
  }

  protected override updateSize_(margin?: number): void {
    const constants = this.getConstants();
    const xOffset =
      margin !== undefined
        ? margin
        : !this.isFullBlockField()
          ? this.getConstants()!.FIELD_BORDER_RECT_X_PADDING
          : 0;
    let totalWidth = xOffset * 2;
    let totalHeight = constants!.FIELD_TEXT_HEIGHT;

    let contentWidth = 0;
    if (this.textElement_) {
      contentWidth = dom.getFastTextWidth(
        this.textElement_,
        constants!.FIELD_TEXT_FONTSIZE,
        constants!.FIELD_TEXT_FONTWEIGHT,
        constants!.FIELD_TEXT_FONTFAMILY
      );
      totalWidth += contentWidth;
    }
    if (!this.isFullBlockField()) {
      totalHeight = Math.max(totalHeight, constants!.FIELD_BORDER_RECT_HEIGHT);
    }

    this.size_.height = totalHeight;
    this.size_.width = Math.max(totalWidth, constants!.EMPTY_INLINE_INPUT_PADDING);

    this.positionTextElement_(xOffset, contentWidth);
    this.positionBorderRect_();
  }
}
