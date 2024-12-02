export const parseHighlightCss = (
  css: string,
  styles: Record<string, string>,
  selectedBlockType: string | null
) => {
  const lines = css.split('\n');
  let isWithinBlock = false; // 블록 내부인지 추적

  const formattedCss = lines
    .map((line) => {
      // 선택된 클래스 시작 부분
      if (selectedBlockType && line.includes(`.${selectedBlockType}`)) {
        isWithinBlock = true;
        return `<span style="background-color: #FFF3AD;">${line}</span>`;
      }

      // 블록 내부 유지 (닫는 중괄호까지)
      if (isWithinBlock && !line.includes('}')) {
        // 들여쓰기 공백 추가 (trim 호출 제거)
        return `<span style="background-color: #FFF3AD;">${line}</span>`;
      }

      // 블록 종료
      if (isWithinBlock && line.includes('}')) {
        isWithinBlock = false;
        return `<span style="background-color: #FFF3AD;">${line}</span>`;
      }

      // 기존 로직 유지
      return line
        .replace(/([^\s{}]+)\s*{/g, (_, selector) => {
          const highlightedSelector =
            selectedBlockType && selector.includes(`.${selectedBlockType}`)
              ? `<span>${selector}</span>`
              : selector;
          return `<span class="${styles.selector}">${highlightedSelector}</span> {`;
        })
        .replace(/([\w-]+):/g, (_, property) => {
          return `&nbsp;&nbsp;<span class="${styles.property}">${property}</span>:`;
        })
        .replace(/:\s*([^;]+);/g, (_, value) => {
          return `: <span class="${styles['property-value']}">${value}</span>;`;
        });
    })
    .join('\n');

  // 모든 줄 앞에 공백 두 칸 추가
  return formattedCss
    .split('\n')
    .map((line) => `  ${line}`)
    .join('\n');
};
