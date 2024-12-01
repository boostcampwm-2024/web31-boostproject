import * as Blockly from 'blockly';

// 특정 블록의 자식 블록들을 가져오는 공통 함수
const getChildBlocks = (block: Blockly.Block): Blockly.Block[] => {
  const innerBlocks: Blockly.Block[] = [];
  block.inputList.forEach((input) => {
    const connection = input.connection;
    if (connection) {
      let targetBlock = connection.targetBlock();
      while (targetBlock) {
        innerBlocks.push(targetBlock);
        targetBlock = targetBlock.getNextBlock();
      }
    }
  });
  return innerBlocks;
};

// 특정 블록 타입에 따라 길이를 반환하는 공통 함수
const getBaseLengthForBlockType = (blockType: string): number => {
  const singleLineBlocks = [
    'BOOLOCK_SYSTEM_head',
    'BOOLOCK_SYSTEM_text',
    'BOOLOCK_SYSTEM_br',
    'BOOLOCK_SYSTEM_hr',
  ];

  const containerBlocks = [
    'BOOLOCK_SYSTEM_html',
    'BOOLOCK_SYSTEM_body',
    'BOOLOCK_SYSTEM_div',
    'BOOLOCK_SYSTEM_span',
    'BOOLOCK_SYSTEM_header',
    'BOOLOCK_SYSTEM_section',
    'BOOLOCK_SYSTEM_nav',
    'BOOLOCK_SYSTEM_main',
    'BOOLOCK_SYSTEM_article',
    'BOOLOCK_SYSTEM_footer',
    'BOOLOCK_SYSTEM_p',
    'BOOLOCK_SYSTEM_strong',
    'BOOLOCK_SYSTEM_h1',
    'BOOLOCK_SYSTEM_h2',
    'BOOLOCK_SYSTEM_h3',
    'BOOLOCK_SYSTEM_h4',
    'BOOLOCK_SYSTEM_h5',
    'BOOLOCK_SYSTEM_h6',
    'BOOLOCK_SYSTEM_small',
    'BOOLOCK_SYSTEM_em',
    'BOOLOCK_SYSTEM_i',
    'BOOLOCK_SYSTEM_blockquote',
    'BOOLOCK_SYSTEM_button',
    'BOOLOCK_SYSTEM_option',
    'BOOLOCK_SYSTEM_textarea',
    'BOOLOCK_SYSTEM_select',
    'BOOLOCK_SYSTEM_td',
    'BOOLOCK_SYSTEM_tr',
    'BOOLOCK_SYSTEM_th',
    'BOOLOCK_SYSTEM_caption',
    'BOOLOCK_SYSTEM_table',
    'BOOLOCK_SYSTEM_ul',
    'BOOLOCK_SYSTEM_ol',
    'BOOLOCK_SYSTEM_li',
  ];

  // 한 줄 블록
  if (singleLineBlocks.includes(blockType)) {
    return 1;
  }

  // 기본 2줄 블록
  if (containerBlocks.includes(blockType)) {
    return 2;
  }

  return 0;
};

// 선택한 블록의 코드 길이 계산
export const calculateBlockLength = (currentBlock: Blockly.Block): number => {
  if (!currentBlock) {
    return 0;
  }

  const blockType = currentBlock.type;
  const baseLength = getBaseLengthForBlockType(blockType);

  // 자식 블록 처리 (재귀)
  const childBlocks = getChildBlocks(currentBlock);
  const childrenLength = childBlocks.reduce(
    (sum, childBlock) => sum + calculateBlockLength(childBlock),
    0
  );

  // 기본 2줄 + 자식 블록 길이를 처리해야 하는 블록
  const containerBlocks = [
    'BOOLOCK_SYSTEM_html',
    'BOOLOCK_SYSTEM_body',
    'BOOLOCK_SYSTEM_p',
    'BOOLOCK_SYSTEM_button',
    'BOOLOCK_SYSTEM_div',
  ];

  if (containerBlocks.includes(blockType)) {
    return 2 + childrenLength;
  }

  // 기본적으로 블록의 길이 반환
  return baseLength + childrenLength;
};
