import * as Blockly from 'blockly/core';

const dom = Blockly.utils.dom;
const Svg = Blockly.utils.Svg;

// 블록의 좌측 블록 이름에 대한 라벨을 실제 돔에 올려주는 클래스입니다.
export class CustomOptionFieldLabel extends Blockly.FieldLabel {
  protected override createTextElement_(): void {
    this.textElement_ = dom.createSvgElement(
      Svg.TEXT,
      {
        class: 'blocklyText',
        x: 0,
        y: 0,
        'dominant-baseline': 'central',
      },
      this.fieldGroup_
    );

    this.textContent_ = document.createTextNode('');
    this.textElement_.appendChild(this.textContent_);
  }

  /*
   *실제 dom에 올려주는 역할을 하는 메소드입니다.
   *블록 태그 내에 합쳐서 올릴 때는 블록을 배경으로 약간 좌측에 padding넣어준 것처럼
   *해당 필드가 위치해있어야하기 때문에 이에 대한 x좌표 및 배경에 대한 style 적용을 해두었습니다.
   */
  protected override render_(): void {
    super.render_();

    const bbox = this.textElement_!.getBBox();
    if (this.textElement_) {
      this.textElement_.setAttribute('x', (bbox.x + 6).toString());
      this.textElement_.setAttribute('y', (bbox.y + 9).toString());
      this.textElement_.style.fill = `#1E272E`;
    }
  }
}
