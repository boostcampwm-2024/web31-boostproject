export const parseHighlightHtml = (html: string, styles: Record<string, string>) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  // HTML 요소 노드 처리
  const renderElement = (element: HTMLElement, depth: number): string => {
    const indent = '  '.repeat(depth);
    const tag = `<span class="${styles.tag}">${element.tagName.toLowerCase()}</span>`;
    const attrs = Array.from(element.attributes)
      .map(
        (attr) =>
          `<span class="${styles.attribute}">${attr.name}</span>=<span class="${styles.value}">"${attr.value}"</span>`
      )
      .join(' ');

    const openTag = `${indent}&lt;${tag}${attrs ? ' ' + attrs : ''}&gt;`;
    const children = Array.from(element.childNodes)
      .map((child) => processNode(child, depth + 1))
      .join('');

    // 자식 노드 여부 확인
    const isLeafNode = children.trim() === '';
    const closeTag = `${indent}&lt;/${tag}&gt;`;
    const innerContent = isLeafNode ? '\n' : children;

    return `\n${openTag}${innerContent}\n${closeTag}`;
  };

  // 텍스트 노드 처리
  const renderText = (textNode: Text, depth: number): string => {
    const text = textNode.textContent?.trim();
    const indent = '  '.repeat(depth);
    return text ? `\n${indent}<span class="${styles.text}">${text}</span>` : '';
  };

  // 노드 타입에 따라 처리
  const processNode = (node: ChildNode, depth: number = 0): string => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      return renderElement(node as HTMLElement, depth);
    } else if (node.nodeType === Node.TEXT_NODE) {
      return renderText(node as Text, depth);
    }
    return '';
  };

  // 문서 루트 노드로 시작
  return processNode(doc.documentElement, 0).trim();
};
