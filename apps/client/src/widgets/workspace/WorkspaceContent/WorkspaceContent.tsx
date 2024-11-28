import 'blockly/blocks';

import * as Blockly from 'blockly/core';

import { CssPropsSelectBox, PreviewBox } from '@/widgets';
import {
  blockContents,
  cssCodeGenerator,
  defineBlocks,
  htmlCodeGenerator,
  htmlTagToolboxConfig,
  initTheme,
  initializeBlocks,
  tabToolboxConfig,
} from '@/shared/blockly';
import { useCssPropsStore, useWorkspaceChangeStatusStore, useWorkspaceStore } from '@/shared/store';
import { useEffect, useState } from 'react';

import CustomTrashcan from '@/core/customTrashcan';
import CustomZoomControls from '@/core/customZoomControls';
import FixedFlyout from '@/core/fixedFlyout';
import TabbedToolbox from '@/core/tabbedToolbox';
import { customTooltip } from '@/core/customTooltip';
import { registerCustomComponents } from '@/core/register';

registerCustomComponents();
defineBlocks(blockContents);

Blockly.Tooltip.setCustomTooltip(customTooltip);

Blockly.WorkspaceSvg.prototype.addZoomControls = function () {
  this.zoomControls_ = new CustomZoomControls(this);
  const svgZoomControls = this.zoomControls_.createDom();
  this.svgGroup_.appendChild(svgZoomControls);
};

Blockly.WorkspaceSvg.newTrashcan = function (workspace: Blockly.WorkspaceSvg): CustomTrashcan {
  return new CustomTrashcan(workspace);
};

Blockly.WorkspaceSvg.prototype.addTrashcan = function () {
  this.trashcan = Blockly.WorkspaceSvg.newTrashcan(this);
  const svgTrashcan = this.trashcan.createDom();
  this.svgGroup_.insertBefore(svgTrashcan, this.getCanvas());
};

/**
 *
 * @description
 * 블록 코딩을 할 수 있고 웹사이트, HTML, CSS 코드를 미리보기 할 수 있는 컴포넌트
 */
export const WorkspaceContent = () => {
  const [htmlCode, setHtmlCode] = useState<string>('');
  const [cssCode, setCssCode] = useState<string>('');
  const { totalCssPropertyObj } = useCssPropsStore();
  const { workspace, setWorkspace, canvasInfo } = useWorkspaceStore();
  const { setIsBlockChanged } = useWorkspaceChangeStatusStore();
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
      maxTrashcanContents: 0,
    });

    (newWorkspace.getToolbox() as TabbedToolbox).setConfig(tabToolboxConfig);

    initializeBlocks(newWorkspace);

    newWorkspace.clearUndo();
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

    if (workspace === null) {
      setWorkspace(newWorkspace);
    }

    return () => {
      newWorkspace.removeChangeListener(handleAutoConversion);
      newWorkspace.dispose();
    };
  }, []);

  useEffect(() => {
    if (!workspace || !canvasInfo || canvasInfo.length === 0) {
      return;
    }
    Blockly.serialization.workspaces.load(JSON.parse(canvasInfo), workspace);
  }, [workspace, canvasInfo]);

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
