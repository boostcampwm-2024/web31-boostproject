export default class Dom {
  static createElement<T extends HTMLElement>(
    name: string,
    attrs: { [key: string]: string | number },
    parent?: Element | null
  ): T {
    const element = document.createElement(name) as T;
    for (const key in attrs) {
      element.setAttribute(key, `${attrs[key]}`);
    }
    if (parent) {
      parent.appendChild(element);
    }
    return element;
  }
  static insertAfter(newNode: Element, refNode: Element) {
    const siblingNode = refNode.nextElementSibling;
    const parentNode = refNode.parentNode;
    if (!parentNode) {
      throw Error('Reference node has no parent.');
    }
    if (siblingNode) {
      parentNode.insertBefore(newNode, siblingNode);
    } else {
      parentNode.appendChild(newNode);
    }
  }
}
