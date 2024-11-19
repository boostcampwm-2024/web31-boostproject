import 'blockly/blocks';
import * as Blockly from 'blockly/core';

import { toolboxConfig, toolboxConfig2, classMakerPrompt } from '@/widgets';

interface IExtendedIToolbox extends Blockly.IToolbox {
  HtmlDiv: HTMLElement;
}

export const customizeFlyoutSVG = (newWorkspace: any) => {
  const toolbox: IExtendedIToolbox = newWorkspace.getToolbox()! as IExtendedIToolbox;
  const flyout = newWorkspace!.getToolbox()!.getFlyout();

  const tabs = document.createElement('div');
  tabs.className = 'flex w-96';

  const tagTab = document.createElement('button');
  tagTab.classList.add('tab');
  tagTab.textContent = '태그';

  const styleTab = document.createElement('button');
  styleTab.classList.add('tab');
  styleTab.textContent = '스타일';

  tagTab.addEventListener('click', () => {
    newWorkspace.updateToolbox(toolboxConfig);
    const toolboxContents = document.querySelector('.blocklyToolboxContents');
    toolboxContents!.classList.remove('hidden');
    tagTab.classList.add('tabSelected');
    styleTab.classList.remove('tabSelected');
  });

  styleTab.addEventListener('click', () => {
    newWorkspace.updateToolbox(toolboxConfig2);
    const toolboxContents = document.querySelector('.blocklyToolboxContents');
    toolboxContents!.classList.add('hidden');

    const flyoutContents = toolboxConfig2.contents;
    newWorkspace.registerButtonCallback('classMakerPrompt', () => classMakerPrompt(newWorkspace));
    flyout.show(flyoutContents);

    styleTab.classList.add('tabSelected');
    tagTab.classList.remove('tabSelected');
  });

  tabs.appendChild(tagTab);
  tabs.appendChild(styleTab);

  toolbox!.HtmlDiv.prepend(tabs);

  flyout!.hide = () => {};
};
