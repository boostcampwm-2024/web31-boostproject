export const parseHighlightCss = (css: string, styles: Record<string, string>) => {
  const formattedCss = css
    .replace(/([^\s{}]+)\s*{/g, (_, selector) => {
      // 선택자 ex) .body, .class, #id ...
      return `<span class="${styles.selector}">${selector}</span> {`;
    })
    .replace(/([\w-]+):/g, (_, property) => {
      // 속성 이름 ex) color, font-size ...
      return `<span class="${styles.property}">${property}</span>:`;
    })
    .replace(/:\s*([^;]+);/g, (_, value) => {
      // 속성 값 ex) #ffffff, 16px ...
      return `: <span class="${styles['property-value']}">${value}</span>;`;
    })
    .trim();

  // 모든 줄 앞에 공백 두 칸 추가
  return formattedCss
    .split('\n')
    .map((line) => `  ${line}`)
    .join('\n');
};
