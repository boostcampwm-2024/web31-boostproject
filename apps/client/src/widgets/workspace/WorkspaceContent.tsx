import 'blockly/blocks';
import * as Blockly from 'blockly/core';

import { useEffect, useState } from 'react';

import htmlCodeGenerator from '@/widgets/workspace/blockly/htmlCodeGenerator';

import { TTabToolboxConfig } from '@/shared/types';
import {
  CssPropsSelectBox,
  defineBlocks,
  htmlTagToolboxConfig,
  initTheme,
  PreviewBox,
  cssCodeGenerator,
  cssStyleToolboxConfig,
} from '@/widgets';
import { useCssPropsStore } from '@/shared/store';
import FixedFlyout from '@/core/fixedFlyout';
import TabbedToolbox from '@/core/tabbedToolbox';
import { registerCustomComponents } from '@/core/register';
import StyleFlyout from '@/core/styleFlyout';

export const WorkspaceContent = () => {
  const tabToolboxConfig: TTabToolboxConfig = {
    tabs: {
      html: {
        label: 'HTML 태그',
        toolboxConfig: htmlTagToolboxConfig,
        flyoutRegistryName: FixedFlyout.registryName,
      },
      css: {
        label: 'CSS 스타일',
        toolboxConfig: cssStyleToolboxConfig,
        flyoutRegistryName: StyleFlyout.registryName,
      },
    },
    defaultSelectedTab: 'html',
  };

  const [htmlCode, setHtmlCode] = useState<string>('');
  const [cssCode, setCssCode] = useState<string>('');
  const { totalCssPropertyObj } = useCssPropsStore();

  defineBlocks();

  useEffect(() => {
    registerCustomComponents();

    const newWorkspace = Blockly.inject('blocklyDiv', {
      plugins: {
        flyoutsVerticalToolbox: FixedFlyout,
        toolbox: TabbedToolbox,
      },
      renderer: 'zelos',
      toolboxPosition: 'end',
      toolbox: htmlTagToolboxConfig,
      theme: initTheme, // 커스텀 테마 적용
      zoom: {
        // 확대 및 축소 버튼 설정
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
      },
    });
    //  const blockContainer = wrapBlocklyBlocksInDiv(newWorkspace);
    (newWorkspace.getToolbox() as any).setConfig(tabToolboxConfig);

    const flyout = newWorkspace!.getToolbox()!.getFlyout();
    newWorkspace.registerButtonCallback('classMakerPrompt', () => {
      classMakerPrompt(newWorkspace);
      flyout!.show(toolboxConfig2.contents);
    });
    flyout!.show(toolboxConfig2.contents);

    (newWorkspace.getToolbox() as TabbedToolbox).setConfig(tabToolboxConfig);

    // workspace 변화 감지해 자동 변환
    const handleAutoConversion = (event: Blockly.Events.Abstract) => {
      if (
        event.type === Blockly.Events.BLOCK_CREATE ||
        event.type === Blockly.Events.BLOCK_MOVE ||
        event.type === Blockly.Events.BLOCK_DRAG ||
        event.type === Blockly.Events.BLOCK_CHANGE ||
        event.type === Blockly.Events.BLOCK_DELETE
      ) {
        const code = htmlCodeGenerator.workspaceToCode(newWorkspace);
        setHtmlCode(code);
      }
    };

    newWorkspace.addChangeListener(handleAutoConversion);

    return () => {
      newWorkspace.removeChangeListener(handleAutoConversion);
      newWorkspace.dispose();
    };
  }, []);

  useEffect(() => {
    setCssCode(cssCodeGenerator(totalCssPropertyObj));
  }, [htmlCode, totalCssPropertyObj]);

  return (
    <div className="flex flex-1">
      <div className="flex h-full w-[32rem] flex-shrink-0 flex-col">
        <PreviewBox htmlCode={htmlCode} cssCode={cssCode} />
        <CssPropsSelectBox />
      </div>

      <div id="blocklyDiv" className="h-full w-full"></div>
    </div>
  );
};
