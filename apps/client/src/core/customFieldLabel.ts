import * as Blockly from 'blockly/core';

const dom = Blockly.utils.dom;
const Svg = Blockly.utils.Svg;

class CustomFieldLabel extends Blockly.FieldLabel {
  protected textGroup_!: SVGGElement;
  protected backgroundRect_!: SVGRectElement;

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

Blockly.fieldRegistry.unregister('field_label');
Blockly.fieldRegistry.register('field_label', CustomFieldLabel);
