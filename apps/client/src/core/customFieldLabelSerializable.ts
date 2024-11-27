import * as Blockly from 'blockly/core';

/*
  해당 field 라벨의 text에 클래스가 이름이, 일반 블록의 blocklyText 클래스 이름과 같아 일반 블록에 적용된 gray-50 색상과 동일하게 text 색상이 적용되었습니다.
  이를 해결하기 위한 용도의 커스텀클래스입니다. initView()에서 텍스트 색상만 변경해주는 용도입니다.
*/
export class CustomFieldLabelSerializable extends Blockly.FieldLabelSerializable {
  constructor(value?: string, textClass?: string, config?: Blockly.FieldLabelConfig) {
    super(String(value ?? ''), textClass, config);
  }

  override initView(): void {
    super.initView();
    if (this.textElement_) {
      this.textElement_.style.fill = `#1E272E`;
    }
  }
}
