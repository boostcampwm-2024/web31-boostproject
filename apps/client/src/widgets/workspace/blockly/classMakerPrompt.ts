import 'blockly/blocks';
import * as Blockly from 'blockly/core';
import { toolboxConfig } from './toolboxConfig';

// prompt를 이용한 class 동적 생성
export const classMakerPrompt = (workspace: Blockly.WorkspaceSvg) => {
  const blockName = prompt('새로운 class 블록 이름을 입력하세요.');

  if (blockName?.trim() === '') {
    return alert('블록 이름을 입력해주세요.');
  }

  if (!Blockly.Blocks[blockName!]) {
    Blockly.Blocks[blockName!] = {
      init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldTextInput(blockName!), 'CLASS'); // 입력된 이름 반영
        this.setOutput(true);
        this.setColour(230);
      },
    };
  }

  // "폼" 카테고리를 찾아 기존 블록 유지 및 새 블록 추가
  const formCategory = toolboxConfig.contents.find((category) => category.name === '폼');

  // 기존 블록 유지 및 새 블록 추가
  const existingBlocks = formCategory!.contents || [];
  const isBlockAlreadyAdded = existingBlocks.some((block) => block.type === blockName);

  if (isBlockAlreadyAdded) {
    alert(`"${blockName}" 블록은 이미 "폼" 카테고리에 존재합니다.`);
    return;
  }

  formCategory!.contents = [...existingBlocks, { kind: 'block', type: blockName }];

  // 기존 툴박스 갱신
  workspace.updateToolbox(toolboxConfig);

  alert(`새 블록 "${blockName}"이(가) "폼" 카테고리에 성공적으로 추가되었습니다.`);
};
