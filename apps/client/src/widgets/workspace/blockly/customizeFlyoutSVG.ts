import 'blockly/blocks';
import * as Blockly from 'blockly/core';

import { toolboxConfig, toolboxConfig2 } from '@/widgets';

interface IExtendedIToolbox extends Blockly.IToolbox {
  HtmlDiv: HTMLElement;
}

export const customizeFlyoutSVG = (newWorkspace: any) => {
  const toolbox: IExtendedIToolbox = newWorkspace.getToolbox()! as IExtendedIToolbox;

  const tabs = document.createElement('div');
  tabs.className = 'flex w-96';

  const tab1 = document.createElement('button');
  tab1.classList.add('tab');
  tab1.textContent = 'HTML';

  const tab2 = document.createElement('button');
  tab2.classList.add('tab');
  tab2.textContent = 'CSS';

  tab1.addEventListener('click', () => {
    newWorkspace.updateToolbox(toolboxConfig);
    const toolboxContents = document.querySelector('.blocklyToolboxContents');
    toolboxContents!.classList.remove('hidden');
    tab1.classList.add('tabSelected');
    tab2.classList.remove('tabSelected');
  });

  tab2.addEventListener('click', () => {
    newWorkspace.updateToolbox(toolboxConfig2);
    const toolboxContents = document.querySelector('.blocklyToolboxContents');
    toolboxContents!.classList.add('hidden');
    tab2.classList.add('tabSelected');
    tab1.classList.remove('tabSelected');
  });

  tabs.appendChild(tab1);
  tabs.appendChild(tab2);

  toolbox!.HtmlDiv.prepend(tabs);
  const flyout = newWorkspace!.getToolbox()!.getFlyout();
  flyout!.hide = () => {};
};
