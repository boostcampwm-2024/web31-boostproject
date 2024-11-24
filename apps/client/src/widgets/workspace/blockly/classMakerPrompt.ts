import 'blockly/blocks';
import * as Blockly from 'blockly/core';
import toast from 'react-hot-toast';

import { CustomFieldTextInput, toolboxConfig2 } from '@/widgets';
import { useClassBlockStore } from '@/shared/store';

// prompt를 이용한 class 동적 생성
export const classMakerPrompt = (workspace: Blockly.WorkspaceSvg) => {
  const blockName = prompt('새로운 class 블록 이름을 입력하세요.');
  const { addClassBlock } = useClassBlockStore.getState();

  if (blockName === null) {
    return;
  }

  if (blockName?.trim() === '') {
    return alert('블록 이름을 입력해주세요.');
  }

  if (!Blockly.Blocks[blockName!]) {
    Blockly.Blocks[blockName!] = {
      init: function () {
        this.appendDummyInput().appendField(new CustomFieldTextInput(blockName!), 'CLASS'); // 입력된 이름 반영
        this.setOutput(true);
        this.setStyle(`default_blocks1`);
      },
    };
  }

  // 기존 블록 유지 및 새 블록 추가
  const existingBlocks = toolboxConfig2!.contents || [];
  const isBlockAlreadyAdded = existingBlocks.some((block) => block.type === blockName);

  if (isBlockAlreadyAdded) {
    toast.error(`"${blockName}" 스타일 블록은 이미 존재합니다.`);
    return;
  }

  if (blockName) {
    toolboxConfig2!.contents = [...existingBlocks, { kind: 'block', type: blockName }];
    addClassBlock(blockName);
  }

  // 기존 툴박스 갱신
  workspace.updateToolbox(toolboxConfig2);

  toast.success(`새 스타일 블록 "${blockName}"이(가) 추가되었습니다.`);
};
