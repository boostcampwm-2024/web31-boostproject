import 'blockly/blocks';
import * as Blockly from 'blockly/core';
import { useEffect, useState } from 'react';

import htmlCodeGenerator from '@/widgets/workspace/blockly/htmlCodeGenerator';
import CustomCategory from '@/widgets/workspace/blockly/customCategory';
import CustomFlyout from '@/widgets/workspace/blockly/customFlyout';
import {
  CssPropsSelectBox,
  defineBlocks,
  toolboxConfig,
  initTheme,
  customToolbox,
  PreviewBox,
} from '@/widgets';
import { useClassBlockStore } from '@/shared/store';

Blockly.registry.register(
  Blockly.registry.Type.TOOLBOX_ITEM,
  Blockly.ToolboxCategory.registrationName,
  CustomCategory,
  true
);

Blockly.registry.register(
  Blockly.registry.Type.FLYOUTS_VERTICAL_TOOLBOX,
  'custom_flyout',
  CustomFlyout
);

export const WorkspaceContent = () => {
  const [workspace, setWorkspace] = useState<Blockly.WorkspaceSvg | null>(null);
  const [htmlCode, setHtmlCode] = useState<string>('');
  const classBlockList = useClassBlockStore((state) => state.classBlockList);

  defineBlocks();

  useEffect(() => {
    const newWorkspace = Blockly.inject('blocklyDiv', {
      renderer: 'zelos',
      toolboxPosition: 'end',
      toolbox: toolboxConfig,
      theme: initTheme,
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
      },
      flyout: 'custom_flyout',
    } as any);

    setWorkspace(newWorkspace);
    customToolbox(newWorkspace);

    return () => {
      newWorkspace.dispose();
    };
  }, []);

  const generateHtmlCode = () => {
    if (!workspace) {
      return;
    }
    const code = htmlCodeGenerator.workspaceToCode(workspace);
    setHtmlCode(code);
  };

  return (
    <div className="flex flex-1">
      <div className="flex h-full w-[32rem] flex-shrink-0 flex-col">
        <PreviewBox htmlCode={htmlCode} />
        <CssPropsSelectBox />
      </div>

      <div id="blocklyDiv" className="h-full w-full"></div>

      <button className="h-10 w-20 bg-blue-400" onClick={generateHtmlCode}>
        변환하기
      </button>
    </div>
  );
};
