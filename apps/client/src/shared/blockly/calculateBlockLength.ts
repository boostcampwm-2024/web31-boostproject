import * as Blockly from 'blockly';

// 선택한 블록의 코드 길이 계산
export const calculateBlockLength = (currentBlock: Blockly.Block): number => {
  if (!currentBlock) {
    return 0;
  }

  const blockType = currentBlock.type;

  if (blockType === 'BOOLOCK_SYSTEM_html' || blockType === 'BOOLOCK_SYSTEM_body') {
    let blockLength = 2;
    const innerBlocks: Blockly.Block[] = [];

    currentBlock.inputList.forEach((input) => {
      const connection = input.connection;

      if (connection) {
        let targetBlock = connection.targetBlock();

        while (targetBlock) {
          innerBlocks.push(targetBlock);
          targetBlock = targetBlock.getNextBlock();
        }
      }
    });

    // 자식 블록 길이 합산
    innerBlocks.forEach((innerBlock) => {
      blockLength += calculateBlockLength(innerBlock);
    });

    return blockLength;
  }

  // html, head, text, br, hr 는 항상 1줄
  if (
    blockType === 'BOOLOCK_SYSTEM_html' ||
    blockType === 'BOOLOCK_SYSTEM_head' ||
    blockType === 'BOOLOCK_SYSTEM_text' ||
    blockType === 'BOOLOCK_SYSTEM_br' ||
    blockType === 'BOOLOCK_SYSTEM_hr'
  ) {
    return 1;
  }

  // 자식 블록 탐색
  const innerBlocks: Blockly.Block[] = [];

  currentBlock.inputList.forEach((input) => {
    const connection = input.connection;

    if (connection) {
      let targetBlock = connection.targetBlock();

      while (targetBlock) {
        innerBlocks.push(targetBlock);
        targetBlock = targetBlock.getNextBlock();
      }
    }
  });

  // `p`, `button`, `div` 등 컨테이너 블록 처리
  if (['BOOLOCK_SYSTEM_p', 'BOOLOCK_SYSTEM_button', 'BOOLOCK_SYSTEM_div'].includes(blockType)) {
    if (innerBlocks.length === 0) {
      return 2; // 자식이 없으면 열고 닫는 태그만 포함 (2줄)
    }

    // 자식이 있을 경우 기본 2줄 + 자식들의 길이
    let blockLength = 2;

    innerBlocks.forEach((innerBlock) => {
      blockLength += calculateBlockLength(innerBlock);
    });

    return blockLength;
  }

  // 기본적으로 길이를 0으로 반환
  return 0;
};
