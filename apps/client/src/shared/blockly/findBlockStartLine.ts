// block id를 이용하여 해당 블록이 시작하는 줄을 찾는 함수
export const findBlockStartLine = (htmlCode: string, blockId: string): number => {
  const lines = htmlCode.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(`data-block-id="${blockId}"`)) {
      return i + 1;
    }
  }
  return -1;
};
