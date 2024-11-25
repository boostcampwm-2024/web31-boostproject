import * as Blockly from 'blockly/core';
import { CategoryInfo } from 'blockly/core/utils/toolbox';
import { IToolbox } from 'blockly';
import { CATEGORY_ICONS } from '@/shared/utils';
import { IExtendedIToolbox } from '@/shared/types';

let selectedCategory: string = '';

export default class CustomCategory extends Blockly.ToolboxCategory {
  constructor(
    categoryDef: CategoryInfo,
    toolbox: IToolbox,
    optParent: Blockly.ICollapsibleToolboxItem
  ) {
    super(categoryDef, toolbox, optParent);
  }

  override addColourBorder_(colour: string) {
    this.rowDiv_!.style.color = colour;
  }

  override setSelected(isSelected: boolean) {
    if (isSelected) {
      if (this.rowDiv_!.id !== selectedCategory) {
        selectedCategory = this.rowDiv_!.id;
        const parentToolbox = this.parentToolbox_ as IExtendedIToolbox;
        const categories = Object.values(parentToolbox.contentMap_);
        categories.forEach((category) => {
          category.rowDiv_!.style.color = category.colour_;
          category.rowDiv_!.style.backgroundColor = 'white';
        });
      }
      this.rowDiv_!.style.backgroundColor = this.colour_;
      this.rowDiv_!.style.color = 'white';
    } else {
      if (this.rowDiv_!.id === selectedCategory) return;
      this.rowDiv_!.style.backgroundColor = 'white';
      this.rowDiv_!.style.color = this.colour_;
    }
  }

  override createIconDom_() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');
    svg.setAttribute('viewBox', '0 0 24 24');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    const d = CATEGORY_ICONS[this.name_];

    if (d) {
      path.setAttribute('d', CATEGORY_ICONS[this.name_]);
    }

    path.setAttribute('fill', 'currentColor');
    svg.appendChild(path);
    return svg;
  }
}
