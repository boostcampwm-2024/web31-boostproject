import 'blockly/blocks';

import * as Blockly from 'blockly/core';

import { CssPropsSelectBox, PreviewBox } from '@/widgets';
import {
  blockContents,
  cssCodeGenerator,
  defineBlocks,
  removeBlockIdFromCode,
  generateFullCodeWithBlockId,
  calculateBlockLength,
  findBlockStartLine,
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
  const [selectedBlockStartLine, setSelectedBlockStartLine] = useState<number>(0);
  const [selectedBlockLength, setSelectedBlockLength] = useState<number>(0);

  useEffect(() => {
    const newWorkspace = Blockly.inject('blocklyDiv', {
      plugins: {
        flyoutsVerticalToolbox: FixedFlyout,
        toolbox: TabbedToolbox,
      },
      renderer: 'boolock',
      toolboxPosition: 'end',
      toolbox: htmlTagToolboxConfig,
      theme: initTheme,
      zoom: {
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
        event.type === Blockly.Events.BLOCK_CHANGE ||
        event.type === Blockly.Events.BLOCK_DELETE
      ) {
        // data-block-id 포함된 코드 (내부 처리용)
        const codeWithId = generateFullCodeWithBlockId(newWorkspace);

        // data-block-id 제거된 코드 (사용자에게 보여지는 코드)
        const codeWithNoId = removeBlockIdFromCode(codeWithId);

        setHtmlCode(codeWithNoId);
        setIsBlockChanged(true);
      }
    };

    // 블록 클릭 이벤트 핸들러
    const handleBlockClick = (event: Blockly.Events.Abstract) => {
      if (event instanceof Blockly.Events.Click) {
        const block = newWorkspace.getBlockById(event.blockId || '');

        if (block) {
          const codeWithIds = generateFullCodeWithBlockId(newWorkspace);

          // 블록이 시작하는 줄 번호 계산
          const blockStartLine = findBlockStartLine(codeWithIds, block.id);

          // 블록 길이 계산
          const blockLength = calculateBlockLength(block);
          setSelectedBlockLength(blockLength);

          // 내부에 선언된 블록 탐색
          const innerBlocks: Blockly.Block[] = [];
          block.inputList.forEach((input) => {
            const connection = input.connection;
            if (connection) {
              let targetBlock = connection.targetBlock();
              while (targetBlock) {
                if (targetBlock.type.startsWith('BOOLOCK_SYSTEM_')) {
                  innerBlocks.push(targetBlock);
                }
                // 다음 연결된 블록 탐색
                targetBlock = targetBlock.getNextBlock();
              }
            }
          });

          // 워크스페이스 내의 HTML 블록 내부 블록 ID를 리스트로 출력
          const topBlocks = newWorkspace.getTopBlocks(true);
          const htmlBlock = topBlocks.find((b) => b.type === 'BOOLOCK_SYSTEM_html');

          if (htmlBlock) {
            const childBlockIds: string[] = [];

            // BOOLOCK_SYSTEM_으로 시작하는 블록만 포함
            const getChildBlockIds = (currentBlock: Blockly.Block) => {
              if (!currentBlock.type.startsWith('BOOLOCK_SYSTEM_')) {
                return;
              }

              childBlockIds.push(currentBlock.id); // 현재 블록 ID 저장
              currentBlock.getChildren(false).forEach(getChildBlockIds); // 자식 블록 재귀 탐색
            };

            getChildBlockIds(htmlBlock); // HTML 블록부터 시작

            // 클릭한 블록이 몇 번째인지 확인
            const blockIndex = childBlockIds.indexOf(block.id);
            if (blockIndex !== -1) {
              console.log(`클릭한 블록은 HTML 블록 내부에서 ${blockIndex + 1}번째 블록입니다.`);
              setSelectedBlockStartLine(blockStartLine); // 선택된 블록 번호 설정
            } else {
              console.log('클릭한 블록은 HTML 블록 내부에 포함되지 않습니다.');
              setSelectedBlockStartLine(0); // 블록이 HTML에 포함되지 않은 경우 0으로 설정
              setSelectedBlockLength(0);
            }
          } else {
            console.log('HTML 블록이 워크스페이스에 존재하지 않습니다.');
            setSelectedBlockStartLine(0);
            setSelectedBlockLength(0);
          }
        } else {
          setSelectedBlockStartLine(0); // 빈 영역 클릭 시 블록 번호 0으로 설정
          setSelectedBlockLength(0);
        }
      }
    };

    const handleBlockIdCodeGeneration = () => {
      const codeWithIds = generateFullCodeWithBlockId(newWorkspace); // 새 함수 호출
      console.log('Generated Code with Block IDs:\n', codeWithIds);
    };

    newWorkspace.addChangeListener(handleAutoConversion);
    newWorkspace.addChangeListener(handleBlockClick);
    newWorkspace.addChangeListener(handleBlockIdCodeGeneration);

    if (workspace === null) {
      setWorkspace(newWorkspace);
    }

    return () => {
      newWorkspace.removeChangeListener(handleAutoConversion);
      newWorkspace.removeChangeListener(handleBlockClick);
      newWorkspace.removeChangeListener(handleBlockIdCodeGeneration);
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
        <PreviewBox
          htmlCode={htmlCode}
          cssCode={cssCode}
          selectedBlockStartLine={selectedBlockStartLine}
          selectedBlockLength={selectedBlockLength}
        />
        <CssPropsSelectBox />
      </div>
      <div id="blocklyDiv" className="h-full w-full"></div>
    </div>
  );
};
