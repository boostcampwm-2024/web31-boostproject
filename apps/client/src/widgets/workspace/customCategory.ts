import * as Blockly from 'blockly/core';
import { CategoryInfo } from 'blockly/core/utils/toolbox';
import { IToolbox } from 'blockly';
import { CATEGORY_ICONS } from '@/shared/utils';

let selectedCategory: string = '';

export default class CustomCategory extends Blockly.ToolboxCategory {
  constructor(
    categoryDef: CategoryInfo,
    toolbox: IToolbox,
    optParent: Blockly.ICollapsibleToolboxItem
  ) {
    super(categoryDef, toolbox, optParent);
  }

  addColourBorder_(colour: string) {
    this.rowDiv_!.style.color = colour;
  }

  setSelected(isSelected: boolean) {
    console.log('얍', this.rowDiv_!.id, isSelected);
    if (isSelected) {
      this.rowDiv_!.style.backgroundColor = this.colour_;
      this.rowDiv_!.style.color = 'white';
      selectedCategory = this.rowDiv_!.id;
    } else {
      this.rowDiv_!.style.backgroundColor = 'white';
      this.rowDiv_!.style.color = this.colour_;
    }
  }

  onClick(_e: Event): void {
    console.log(this.parentToolbox_);

    const previous = this.parentToolbox_.previouslySelectedItem_;
    if (!previous) {
      return;
    }
    if (selectedCategory == previous.id_) {
      console.log('??????????');
      console.log(previous);
      previous.rowDiv_.style.backgroundColor = previous.colour_;
      previous.rowDiv_.style.color = 'white';
    }
  }

  createIconDom_() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');
    svg.setAttribute('viewBox', '0 0 24 24');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    path.setAttribute('d', CATEGORY_ICONS[this.name_]);
    path.setAttribute('fill', 'currentColor');
    svg.appendChild(path);
    return svg;
  }
}
