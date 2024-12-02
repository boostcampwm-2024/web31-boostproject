import * as Blockly from 'blockly/core';

import { addPreviousTypeName, removePreviousTypeName } from '@/shared/utils';

import { blockContents } from '@/shared/blockly';

export const htmlCodeGenerator = new Blockly.Generator('HTML');

// generator 내에서도 blockType 명을 넣을 때 addPreviousTypeName 사용해주시길 바랍니다!

// 함수: 태그 블록(html, head, body, p, button) 정보를 코드로 변환
const transferTagBlockToCode = (tagName: string) => {
  htmlCodeGenerator.forBlock[tagName] = function (block) {
    let cssClass = '';
    const cssClassBlock = block.getInputTargetBlock('css class'); // 블록에서 직접 연결된 블록을 가져옴
    if (cssClassBlock) {
      cssClass = cssClassBlock.getFieldValue('CLASS') || ''; // 직접 연결된 블록의 필드 값을 가져옴
    }

    const children = htmlCodeGenerator.statementToCode(block, 'children').trim();
    const blockId = block.id; // 블록 ID 가져오기
    const realTagName = removePreviousTypeName(tagName);
    let code = '';

    if (realTagName === 'a') {
      let href = '';
      const hrefBlock = block.getField('HREF');
      if (hrefBlock) {
        href = hrefBlock.getValue();
      }

      let target = '';
      const targetBlock = block.getField('TARGET');
      if (targetBlock) {
        target = block.getFieldValue('TARGET') || '';
      }
      if (!children) {
        code = `<${realTagName}${cssClassBlock && cssClass !== '' ? ` class="${cssClass}"` : ''} href="${href}" target="${target}" data-block-id="${blockId}">\n</${realTagName}>`;
      }
      code = `<${realTagName}${cssClassBlock && cssClass !== '' ? ` class="${cssClass}"` : ''} href="${href}" target="${target}" data-block-id="${blockId}">\n${children}\n</${realTagName}>`;
    } else {
      if (!children) {
        // 자식 노드가 없으면 한 줄 공백 추가
        code = `<${realTagName} class="${cssClass}" data-block-id="${blockId}">\n</${realTagName}>`;
      }
      // 자식 노드가 있는 경우
      code = `<${realTagName} class="${cssClass}" data-block-id="${blockId}">\n${children}\n</${realTagName}>`;
    }

    return code;
  };
};

/*
 * 전체 코드 생성 함수
 * block ID가 부여되고, text블록이 span태그로 감싸진 코드가 생성됩니다.
 */
export const generateFullCodeWithBlockId = (workspace: Blockly.Workspace) => {
  const topBlockList = workspace.getTopBlocks(true);

  // HTML 블록 내부에 포함된 블록만 처리
  const codeList = topBlockList
    .filter((block) => {
      const rootBlock = block.getRootBlock();
      return rootBlock.type === addPreviousTypeName('html'); // 'html' 타입인 블록만 처리
    })
    .map((block) => {
      try {
        return htmlCodeGenerator.blockToCode(block) || '';
      } catch (e) {
        console.error(`블록 ${block.type} 처리 중 오류 발생:`, e);
        return '';
      }
    });

  return codeList.join('\n');
};

/**
 * @description data-block-id + text 블록 감쌌던 span 태그 제거
 * 사용자에게 보이는 코드입니다.
 */
export const removeBlockIdFromCode = (htmlCode: string): string => {
  // 1. data-block-id 속성을 제거
  let sanitizedHtml = htmlCode.replace(/ data-block-id="[^"]*"/g, '');

  // 2. text 블록의 span 태그 제거 (data-type="text-block" 속성 확인)
  sanitizedHtml = sanitizedHtml.replace(
    /<span[^>]*data-type="text-block"[^>]*>(.*?)<\/span>/g,
    '$1'
  );

  return sanitizedHtml;
};

/*
 * text 블록 변환 함수
 * text 블록에도 id 값을 부여해야 하기 때문에 임시로 span태그를 감싸주게 변환하는 코드를 추가하였습니다.
 */
htmlCodeGenerator.forBlock[addPreviousTypeName('text')] = function (block) {
  const textContent = block.getFieldValue('TEXT');
  const blockId = block.id;
  const sanitizedContent = textContent
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
  return `<span data-block-id="${blockId}" data-type="text-block">${sanitizedContent}</span>`;
};

// CSS 블록에 대한 코드 생성을 별도로 정의
htmlCodeGenerator.forBlock[addPreviousTypeName('css_style')] = function (block) {
  const classContent = block.getFieldValue('CLASS');
  return classContent;
};

/**
 * @description head 블록에 대한 코드 생성을 별도로 정의
 * head에는 다른 속성 블록을 적용시키기 애매하기 때문에 statementInput속성(children 블록 연결)을 추가하지 않고 한줄 블록으로 생성하였습니다.
 * 이에 따라 다른 html 태그 블록처럼 제너레이터가 동작하면 안 되기때문에 수정해주었습니다.
 * 블록에 ID도 부여했습니다.
 */
htmlCodeGenerator.forBlock[addPreviousTypeName('head')] = function (block) {
  return `<head data-block-id="${block.id}"> </head>`;
};

// hr 블록에 대한 코드 생성을 별도로 정의
htmlCodeGenerator.forBlock[addPreviousTypeName('hr')] = function (block) {
  return `<hr data-block-id="${block.id}" />`;
};

// br 블록에 대한 코드 생성을 별도로 정의
htmlCodeGenerator.forBlock[addPreviousTypeName('br')] = function (block) {
  return `<br data-block-id="${block.id}" />`;
};

htmlCodeGenerator.forBlock[addPreviousTypeName('img')] = function (block) {
  let cssClass = '';
  const cssClassBlock = block.getInputTargetBlock('css class');
  if (cssClassBlock) {
    cssClass = cssClassBlock.getFieldValue('CLASS') || '';
  }

  let src = '';
  const srcBlock = block.getField('SRC');
  if (srcBlock) {
    src = srcBlock.getValue();
    src = src === '사진을 넣어주세요' ? '' : src;
  }

  return `<img${cssClassBlock && cssClass !== '' ? ` class="${cssClass}"` : ''} src="${src}" data-block-id="${block.id}" />`;
};

// 연속적인 코드 블록을 생성하기 위해 블록 연결을 처리하도록 코드 생성을 커스터마이즈
htmlCodeGenerator.scrub_ = function (block, code, thisOnly) {
  // 최상위 블록 (getRootBlock: Blockly의 블록 트리 탐색 함수)
  const topBlock = block.getRootBlock();
  // 최상위 블록이 html 블록이 아니면 빈 문자열 반환
  if (topBlock.type !== addPreviousTypeName('html')) {
    return '';
  }
  // 다음 블록 찾기
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  // 다음 블록의 코드를 추가
  if (nextBlock && !thisOnly) {
    return code + '\n' + htmlCodeGenerator.blockToCode(nextBlock);
  }
  return code;
};

transferTagBlockToCode(addPreviousTypeName('html'));
transferTagBlockToCode(addPreviousTypeName('body'));

Object.values(blockContents).forEach((blockInfoList) => {
  blockInfoList.forEach((blockInfo) => {
    if (
      blockInfo.type !== addPreviousTypeName('text') &&
      blockInfo.type !== addPreviousTypeName('hr') &&
      blockInfo.type !== addPreviousTypeName('br') &&
      blockInfo.type !== addPreviousTypeName('img')
    ) {
      transferTagBlockToCode(blockInfo.type);
    }
  });
});
