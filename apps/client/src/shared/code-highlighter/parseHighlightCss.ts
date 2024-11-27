export const parseHighlightCss = (css: string, styles: Record<string, string>) => {
  return css
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
    });
};
