import * as Blockly from 'blockly/core';

import {
  useClassBlockStore,
  useCssPropsStore,
  useResetCssStore,
  useWorkspaceChangeStatusStore,
} from '@/shared/store';
import { validateClassNameBody, validateClassNameStart } from '@/shared/utils/cssClassName';

import { CustomFieldLabelSerializable } from './customFieldLabelSerializable';
import Dom from './dom';
import FixedFlyout from './fixedFlyout';
import { RenderResetCssTooltip } from '@/entities';
import { TBlock } from '@/shared/types';
import TabbedToolbox from './tabbedToolbox';
import { cssStyleToolboxConfig } from '@/shared/blockly';
import questionSvgPath from '@/shared/assets/question.svg';
import toast from 'react-hot-toast';

export default class StyleFlyout extends FixedFlyout {
  static registryName = 'StyleFlyout';

  pElement: HTMLDivElement | null = null;
  inputElement: HTMLInputElement | null = null;
  buttonElement: HTMLButtonElement | null = null;

  // CSS 클래스 Flyout 초기 생성
  init(targetWorkspace: Blockly.WorkspaceSvg): void {
    super.init(targetWorkspace);
    const toolbox = this.targetWorkspace.getToolbox() as TabbedToolbox;

    const cssStyleToolboxDivElement = Dom.createElement<HTMLDivElement>('div', {
      class: 'contentCreatingBlock',
    });

    const createLabelElement = Dom.createElement<HTMLLabelElement>('label', {
      for: 'creatingBlockInput',
      class: 'creatingBlockLabel',
    });
    createLabelElement.textContent = '클래스 생성하기';

    this.inputElement = Dom.createElement<HTMLInputElement>('input', {
      type: 'text',
      placeholder: '클래스명을 정해주세요',
      class: 'creatingBlockInput',
      id: 'creatingBlockInput',
      maxlength: '30',
    });
    this.inputElement.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        this.createStyleBlock();
      }
    });

    const buttonElement = Dom.createElement<HTMLButtonElement>('button', {
      class: 'creatingBlockButton',
    });
    buttonElement.textContent = '+';
    buttonElement.addEventListener('click', () => this.createStyleBlock());

    const listLabelElement = Dom.createElement<HTMLLabelElement>('label', {
      class: 'listBlockLabel',
    });
    listLabelElement.textContent = '클래스 블록 목록';

    // reset CSS 부분
    const resetCssDivElement = Dom.createElement<HTMLDivElement>('div', {
      class: 'resetCssDiv',
    });

    const resetCssCheckboxElement = Dom.createElement<HTMLInputElement>('input', {
      type: 'checkbox',
      class: 'resetCssCheckbox',
    });
    resetCssCheckboxElement.checked = useResetCssStore.getState().isResetCssChecked;
    resetCssCheckboxElement.addEventListener('change', () => {
      useResetCssStore.getState().toggleResetCss();
      useWorkspaceChangeStatusStore.getState().setIsCssChanged(true);
    });

    const resetCssTextElement = Dom.createElement<HTMLSpanElement>('span', {
      class: 'resetCssText',
    });
    resetCssTextElement.textContent = 'reset CSS 적용하기';

    const questionImageElement = Dom.createElement<HTMLImageElement>('img', {
      src: questionSvgPath,
      alt: 'reset CSS Info',
      class: 'questionImage',
    });

    // Tooltip Root를 저장할 변수
    const tooltipDivElement = document.createElement('div');
    document.body.appendChild(tooltipDivElement);

    // Tooltip 표시
    const showTooltip = () => {
      const { left, top } = questionImageElement.getBoundingClientRect();
      RenderResetCssTooltip(
        {
          description:
            '브라우저마다 다른 기본 스타일을 일관되게 만들기 위해, 모든 요소의 기본 스타일을 초기화하는 CSS입니다.',
          isOpen: true,
          leftX: left,
          topY: top,
        },
        tooltipDivElement
      );
    };

    // Tooltip 숨기기
    const hideTooltip = () => {
      RenderResetCssTooltip(
        {
          description: '',
          isOpen: false,
          leftX: 0,
          topY: 0,
        },
        tooltipDivElement
      );
    };

    // Tooltip 이벤트 등록
    questionImageElement.addEventListener('mouseenter', showTooltip);
    questionImageElement.addEventListener('mouseleave', hideTooltip);

    resetCssDivElement.appendChild(resetCssCheckboxElement);
    resetCssDivElement.appendChild(resetCssTextElement);
    resetCssDivElement.appendChild(questionImageElement);

    [
      createLabelElement,
      this.inputElement,
      buttonElement,
      resetCssDivElement,
      listLabelElement,
    ].forEach((element) => cssStyleToolboxDivElement.appendChild(element));

    toolbox.addElementToContentArea(cssStyleToolboxDivElement, true);

    this.registerCustomContextMenu();

    // TODO: toolbox 중복 호출 논의
    this.show(cssStyleToolboxConfig.contents);
  }

  // CSS 클래스명에 접두사를 붙이는 메서드
  addPrefixToClassName(className: string) {
    const CSS_CLASS_PREFIX = 'CSS_';
    return `${CSS_CLASS_PREFIX}${className}`;
  }

  // 마우스 우클릭 시 컨텍스트 메뉴
  registerCustomContextMenu() {
    const menuId = 'deleteBlock';

    // 중복 등록 방지: 이미 등록된 ID는 다시 등록하지 않음
    if (Blockly.ContextMenuRegistry.registry.getItem(menuId)) {
      return;
    }

    // 컨텍스트 메뉴 삭제 옵션 정보
    const deleteOption = {
      id: menuId,
      scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
      displayText: '블록 삭제',
      weight: 100,
      preconditionFn: (scope: any) => {
        const blockType = scope.block.type;
        const isInCssStyleToolboxConfig = cssStyleToolboxConfig.contents.some(
          (item) => (item as any).type === blockType
        );
        return isInCssStyleToolboxConfig && scope.block.isDeletable() ? 'enabled' : 'hidden';
      },

      callback: (scope: any) => {
        const block = scope.block;
        const blockType = block.type;

        const workspace = Blockly.getMainWorkspace();
        const blocksToDelete = workspace.getBlocksByType(blockType);

        blocksToDelete.forEach((block) => {
          (block as any).dispose(false, true);
        });

        block.dispose(false, true);
        useCssPropsStore.getState().removeCssClass(blockType);
        useWorkspaceChangeStatusStore.getState().setIsBlockChanged(true);
        cssStyleToolboxConfig.contents = cssStyleToolboxConfig.contents.filter(
          (item) => item.type !== blockType
        );

        const { removeClassBlock } = useClassBlockStore.getState();
        removeClassBlock(blockType);

        const flyout = (Blockly.getMainWorkspace() as any).getToolbox().getFlyout();
        flyout.show(cssStyleToolboxConfig.contents);
        toast.success(`"${blockType.replace('CSS_', '')}" 클래스 블록이 삭제되었습니다.`);
      },
    };

    // 블록 삭제 옵션 등록
    Blockly.ContextMenuRegistry.registry.register(deleteOption);

    // 컨텍스트 메뉴 외부 영역 클릭 시 닫기 이벤트 추가
    document.addEventListener('click', (event) => {
      const contextMenu = document.querySelector('.blocklyContextMenu');
      if (contextMenu && !contextMenu.contains(event.target as Node)) {
        (contextMenu as HTMLElement).style.display = 'none';
      }
    });
  }

  // 새로운 스타일 블록 생성
  createStyleBlock() {
    const inputValue = this.inputElement?.value;
    // 클래스명 입력값이 없을 경우 에러 메시지 출력
    if (!inputValue) {
      return toast.error('클래스명을 입력해주세요.');
    }

    // 클래스명 유효성 검사
    if (!validateClassNameStart(inputValue)) {
      return toast.error('클래스명 첫 글자는 영문자, 밑줄(_), 하이픈(-)만 가능해요');
    } else if (!validateClassNameBody(inputValue)) {
      return toast.error('클래스명은 영문자, 밑줄(_), 하이픈(-), 숫자만 포함해주세요');
    }

    const createClassType = this.addPrefixToClassName(inputValue);

    // 클래스명 중복 검사
    const existingBlocks: TBlock[] = cssStyleToolboxConfig!.contents || [];
    const isBlockAlreadyAdded = existingBlocks.some((block) => block.type === createClassType);
    if (isBlockAlreadyAdded) {
      return toast.error(`"${inputValue}" 입력한 클래스명 블록은 이미 존재합니다.`);
    }

    // 새롭게 생성되는 CSS 클래스 블록 정보
    if (!Blockly.Blocks[createClassType!]) {
      Blockly.Blocks[createClassType!] = {
        init: function () {
          this.appendDummyInput().appendField(
            new CustomFieldLabelSerializable(inputValue!),
            'CLASS'
          );
          this.setOutput(true);
          this.setStyle(`defaultBlockCss`);
          this.showContextMenu = (e: PointerEvent) => {
            const transfromX = this.getSvgRoot().transform.baseVal[0].matrix.e;
            if (transfromX !== 8) {
              return;
            }
            const menuOptions = this.generateContextMenu();
            Blockly.ContextMenu.show(e, menuOptions, this.RTL);
          };
        },
      };
    }

    useCssPropsStore.getState().addNewCssClass(createClassType);
    useWorkspaceChangeStatusStore.getState().setIsBlockChanged(true);
    // 기존 블록들이 있는 cssStyleToolboxConfig.ts에 새 블록 추가
    cssStyleToolboxConfig!.contents = [
      ...existingBlocks,
      { kind: 'block', type: createClassType, enabled: true },
    ];
    const { addClassBlock } = useClassBlockStore.getState();
    addClassBlock(createClassType);

    this.show(cssStyleToolboxConfig.contents);
    toast.success(`입력한 클래스명 블록 "${inputValue}"이(가) 추가되었습니다.`);

    if (this.inputElement) {
      this.inputElement.value = '';
    }
  }
}
