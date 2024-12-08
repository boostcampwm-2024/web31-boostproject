import * as Blockly from 'blockly/core';

export const customTooltip = (p1: Element, p2: Element): void => {
  const content = document.createElement('p');
  content.style.whiteSpace = 'pre-wrap';
  content.style.fontFamily = 'SUIT Variable';
  content.textContent = (p2 as unknown as Blockly.BlockSvg).getTooltip();
  p1.appendChild(content);
};
