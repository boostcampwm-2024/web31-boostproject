import 'blockly/blocks';

import * as Blockly from 'blockly/core';

import {
  CssPropsSelectBox,
  PreviewBox,
  cssCodeGenerator,
  htmlTagToolboxConfig,
  initTheme,
} from '@/widgets';
import {
  useBlocklyWorkspaceStore,
  useCssPropsStore,
  useWorkspaceChangeStatusStore,
} from '@/shared/store';
import { useEffect, useState } from 'react';

import FixedFlyout from '@/core/fixedFlyout';
import TabbedToolbox from '@/core/tabbedToolbox';
import { blockContents } from './blockly/htmlBlockContents';
import { defineBlocks } from './blockly/defineBlocks';
import htmlCodeGenerator from '@/widgets/workspace/blockly/htmlCodeGenerator';
import { initializeBlocks } from './blockly/initBlocks';
import { registerCustomComponents } from '@/core/register';
import { tabToolboxConfig } from './blockly/tabConfig';

registerCustomComponents();
defineBlocks(blockContents);

export const WorkspaceContent = () => {
  const [htmlCode, setHtmlCode] = useState<string>('');
  const [cssCode, setCssCode] = useState<string>('');
  const { totalCssPropertyObj } = useCssPropsStore();
  const { setIsBlockChanged } = useWorkspaceChangeStatusStore();
  const { setWorkspace } = useBlocklyWorkspaceStore();
  useEffect(() => {
    const newWorkspace = Blockly.inject('blocklyDiv', {
      plugins: {
        flyoutsVerticalToolbox: FixedFlyout,
        toolbox: TabbedToolbox,
      },
      renderer: 'boolock',
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

    (newWorkspace.getToolbox() as TabbedToolbox).setConfig(tabToolboxConfig);

    initializeBlocks(newWorkspace);
    setWorkspace(newWorkspace);
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
        setIsBlockChanged(true);
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
