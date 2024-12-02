import { useModalStore } from '@/shared/store';
import * as Blockly from 'blockly/core';

const dom = Blockly.utils.dom;
const Svg = Blockly.utils.Svg;

export class CustomFieldImageButton extends Blockly.Field<String> {
  protected backgroundRect_!: SVGRectElement;
  width = 0;

  constructor(
    value: String | typeof Blockly.Field.SKIP_SETUP,
    validator?: Blockly.FieldValidator<String> | null,
    config?: Blockly.FieldConfig
  ) {
    super(value, validator, config);
    if (this.value_ === '') {
      this.setValue('사진을 넣어주세요');
    }
  }

  protected override createTextElement_(): void {
    this.backgroundRect_ = dom.createSvgElement(
      Svg.RECT,
      {
        class: 'blocklyButtonBackground',
        x: 0,
        y: 0,
        rx: 4,
        ry: 4,
        fill: '#fff',
        stroke: '#F4F8FA',
      },
      this.fieldGroup_
    );

    this.textElement_ = dom.createSvgElement(
      Svg.TEXT,
      {
        class: 'blocklyText',
        x: 0,
        y: 0,
        'dominant-baseline': 'central',
        fill: '#1E272E',
      },
      this.fieldGroup_
    );

    this.textElement_.style.fontSize = '10pt';
    this.textContent_ = document.createTextNode('');
    this.textElement_.appendChild(this.textContent_);
  }

  override initView(): void {
    super.initView();

    // // 클릭 이벤트 리스너를 추가합니다.
    if (this.fieldGroup_) {
      this.fieldGroup_.addEventListener('click', this.onClick_.bind(this));
    }
  }

  // 클릭 이벤트 핸들러
  private onClick_(): void {
    useModalStore.getState().openModal();
    useModalStore.getState().setIsImageUpload(true);
    useModalStore.getState().setNowId(this.getSourceBlock()?.id as string);
    useModalStore
      .getState()
      .setNowImage(this.value_ === '사진을 넣어주세요' ? '' : (this.value_ as string));
  }

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
        10,
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
