import * as Blockly from 'blockly/core';
import { Svg } from 'blockly/core/utils';

export default class Dom {
  static SVG_NS = 'http://www.w3.org/2000/svg';

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

  static createSvgElement<T extends SVGElement>(
    name: string | Svg<T>,
    attrs: { [key: string]: string | number },
    opt_parent?: Element | null
  ): T {
    const e = document.createElementNS(this.SVG_NS, `${name}`) as unknown as T;
    for (const key in attrs) {
      e.setAttribute(key, `${attrs[key]}`);
    }
    if (opt_parent) {
      opt_parent.appendChild(e);
    }
    return e;
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
