import * as Blockly from 'blockly/core';

const dom = Blockly.utils.dom;
const Svg = Blockly.utils.Svg;

// 블록의 좌측 블록 이름에 대한 라벨을 실제 돔에 올려주는 클래스입니다.
export class CustomFieldLabel extends Blockly.FieldLabel {
  protected backgroundRect_!: SVGRectElement;

  /* 
    기존 메소드는 textElement만 그리고 관리하나, 
    boolock 커스텀에서는 배경도 같이 포함되어있어야하기 때문에 backgroundRect라는 svgElement를 추가로 만들어주고, 
    이를 해당 라벨을 묶는<g> 태그 역할을 하는 fieldGroup_에 할당합니다.
  */
  protected override createTextElement_(): void {
    this.backgroundRect_ = dom.createSvgElement(
      Svg.RECT,
      {
        class: 'blocklyTextBackground',
        x: 0,
        y: 0,
        rx: 10,
        ry: 10,
        fill: '#1E272E',
        stroke: 'none',
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
      },
      this.fieldGroup_
    );

    this.textContent_ = document.createTextNode('');
    this.textElement_.appendChild(this.textContent_);
  }

  /*
    실제 dom에 올려주는 역할을 하는 메소드입니다.
    블록 태그 내에 합쳐서 올릴 때는 블록을 배경으로 약간 좌측에 padding넣어준 것처럼 
    해당 필드가 위치해있어야하기 때문에 이에 대한 x좌표 및 배경에 대한 style 적용을 해두었습니다.
  */
  protected override render_(): void {
    super.render_();

    const bbox = this.textElement_!.getBBox();
    this.backgroundRect_.setAttribute('width', (bbox.width + 12).toString());
    this.backgroundRect_.setAttribute('height', (bbox.height + 4).toString());
    this.backgroundRect_.setAttribute('x', (bbox.x + 6).toString());
    this.backgroundRect_.setAttribute('y', (bbox.y - 2).toString());
    this.textElement_?.setAttribute('x', (bbox.x + 12).toString());
  }
}
