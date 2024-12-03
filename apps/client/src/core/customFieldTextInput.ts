import * as Blockly from 'blockly/core';

const dom = Blockly.utils.dom;

/*
 *text블록의 inputField에서 사용되고 있습니다.
 *text블록의 inputField처럼 내부에서 수정이 불가능한 상태 및 고정된 상태로 사용된다고 했을때, 해당 필드에 대해 minwidth가 잘 먹히지 않았습니다.
 *updateSize_()의 내부 로직을 일부 수정하여 minWidth를 설정해주었습니다.
 *super.updateSize_() 이후 설정해주기 어려워 해당 메소드를 그대로 복붙해와서 사용중입니다.
 *만약 text블록 이외의 다른 곳에서 사용된다고 했을 때, widgetCreate_() 메소드에 인해 포커싱이 되어도 블록 모양이 망가지지 않고 잘 작동됩니다.
 */
export class CustomFieldTextInput extends Blockly.FieldTextInput {
  width = 0;

  updateWidth(width: number) {
    this.width = width;
    this.render_();
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

    this.width = Math.max(constants!.EMPTY_INLINE_INPUT_PADDING + 8, this.width);

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
    this.size_.width = Math.max(totalWidth, this.width);

    this.positionTextElement_(xOffset, contentWidth);
    this.positionBorderRect_();
  }
}
