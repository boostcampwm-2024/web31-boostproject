import * as Blockly from 'blockly/core';
import FixedFlyout from './fixedFlyout';
import TabbedToolbox from './tabbedToolbox';

export default class CssFlyout extends FixedFlyout {
  static registryName = 'CssFlyout';

  init(targetWorkspace: Blockly.WorkspaceSvg): void {
    console.log('??');
    super.init(targetWorkspace);
    this.addElements();
  }

  addElements() {
    const element = document.createElement('div');
    element.textContent = 'text';
    const toolbox = this.targetWorkspace.getToolbox() as TabbedToolbox;
    toolbox.addElementToContentArea(element);
  }
}
