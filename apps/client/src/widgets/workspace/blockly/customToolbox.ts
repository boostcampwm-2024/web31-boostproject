import 'blockly/blocks';
import * as Blockly from 'blockly/core';

import { toolboxConfig, toolboxConfig2, classMakerPrompt } from '@/widgets';

interface IExtendedIToolbox extends Blockly.IToolbox {
  HtmlDiv: HTMLElement;
}

export const customToolbox = (newWorkspace: any) => {
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

    // "태그" 탭을 누르면 "스타일" 탭의 flyout을 숨김
    if (flyout) {
      flyout.hide();
    }

    tagTab.classList.add('tabSelected');
    styleTab.classList.remove('tabSelected');
  });

  styleTab.addEventListener('click', () => {
    newWorkspace.updateToolbox(toolboxConfig2);
    const toolboxContents = document.querySelector('.blocklyToolboxContents');
    toolboxContents!.classList.add('hidden');

    // 추가하기 버튼에 prompt 이벤트 뜨게 콜백등록
    newWorkspace.registerButtonCallback('classMakerPrompt', () => {
      classMakerPrompt(newWorkspace);
      // 생성 후 스타일 블록 실시간 갱신
      flyout.show(toolboxConfig2.contents);
    });

    // "스타일" 탭 클릭시 flyout 뜨게 함
    flyout.show(toolboxConfig2.contents);

    styleTab.classList.add('tabSelected');
    tagTab.classList.remove('tabSelected');
  });

  tabs.appendChild(tagTab);
  tabs.appendChild(styleTab);

  toolbox!.HtmlDiv.prepend(tabs);

  // flyout!.hide = () => {};
};
