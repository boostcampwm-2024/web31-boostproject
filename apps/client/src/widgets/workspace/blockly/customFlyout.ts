import * as Blockly from 'blockly/core';
import { VerticalFlyout } from 'blockly/core';

class CustomFlyout extends VerticalFlyout {
  protected layout_(contents: any[], gaps: number[]) {
    super.layout_(contents, gaps); // 기본 레이아웃 호출

    const inputGroup = Blockly.utils.dom.createSvgElement('g', {}, this.workspace_.getCanvas());

    // Input 배경 Rect
    Blockly.utils.dom.createSvgElement(
      'rect',
      {
        x: 10,
        y: 10,
        width: 200,
        height: 30,
        fill: '#f9f9f9',
        stroke: '#ccc',
        rx: 5,
      },
      inputGroup
    );

    const inputText = Blockly.utils.dom.createSvgElement(
      'text',
      {
        x: 15,
        y: 30,
        fill: '#000',
        'font-size': '14px',
        'pointer-events': 'none',
      },
      inputGroup
    );
    inputText.textContent = '클래스 이름 입력해줘잉~';

    const submitButton = Blockly.utils.dom.createSvgElement(
      'rect',
      {
        x: 220,
        y: 10,
        width: 70,
        height: 30,
        fill: '#4CAF50',
        rx: 5,
        cursor: 'pointer',
      },
      inputGroup
    );

    const submitText = Blockly.utils.dom.createSvgElement(
      'text',
      {
        x: 240,
        y: 30,
        fill: '#fff',
        'font-size': '14px',
        'pointer-events': 'none',
      },
      inputGroup
    );
    submitText.textContent = '추가잉~';

    // 버튼 클릭 이벤트
    Blockly.browserEvents.bind(submitButton, 'click', null, () => {
      const blockName = prompt('블록 이름을 입력하세요.');
      if (!blockName) {
        alert('블록 이름을 입력해주세요.');
        return;
      }

      if (!Blockly.Blocks[blockName]) {
        Blockly.Blocks[blockName] = {
          init: function () {
            this.appendDummyInput().appendField(blockName);
            this.setOutput(true);
            this.setColour(230);
          },
        };
      }

      alert(`블록 "${blockName}"이(가) 추가되었습니다.`);
    });
  }
}

export default CustomFlyout;
