import * as Blockly from 'blockly/core';
import toast from 'react-hot-toast';
import TabbedToolbox from './tabbedToolbox';
import FixedFlyout from './fixedFlyout';
import Dom from './dom';
import { cssStyleToolboxConfig } from '@/widgets';
import { useClassBlockStore } from '@/shared/store';
import questionSvgPath from '@/shared/assets/question.svg';
import { TBlock } from '@/shared/types';
import { CustomFieldLabelSerializable } from './customFieldLabelSerializable';
import { useResetCssStore } from '@/shared/store';
import { RenderResetCssTooltip } from '@/entities';

export default class StyleFlyout extends FixedFlyout {
  static registryName = 'StyleFlyout';

  pElement: HTMLDivElement | null = null;
  inputElement: HTMLInputElement | null = null;
  buttonElement: HTMLButtonElement | null = null;

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

  registerCustomContextMenu() {
    const menuId = 'deleteBlock';

    // 중복 등록 방지: 이미 등록된 ID는 다시 등록하지 않음
    if (Blockly.ContextMenuRegistry.registry.getItem(menuId)) {
      return;
    }

    const deleteOption = {
      id: menuId,
      scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK, // 블록에만 적용
      displayText: '블록 삭제',
      weight: 100,
      preconditionFn: (scope: any) => {
        const blockType = scope.block.type;
        const isInCssStyleToolboxConfig = cssStyleToolboxConfig.contents.some(
          (item) => (item as any).type === blockType
        );

        return isInCssStyleToolboxConfig && scope.block.isDeletable() ? 'enabled' : 'hidden';
      },

      callback: (scope: any, _e: PointerEvent) => {
        const block = scope.block;
        const blockType = block.type;

        block.dispose(false, true);

        cssStyleToolboxConfig.contents = cssStyleToolboxConfig.contents.filter(
          (item) => item.type !== blockType
        );

        const { removeClassBlock } = useClassBlockStore.getState();
        removeClassBlock(blockType);

        const flyout = (Blockly.getMainWorkspace() as any).getToolbox().getFlyout();
        flyout.show(cssStyleToolboxConfig.contents);
        toast.success(`"${blockType}" 클래스 블록이 삭제되었습니다.`);
      },
    };

    Blockly.ContextMenuRegistry.registry.register(deleteOption);
  }

  createStyleBlock() {
    const inputValue = this.inputElement?.value;
    if (!inputValue) {
      return toast.error('클래스명을 입력해주세요.');
    }

    const existingBlocks: TBlock[] = cssStyleToolboxConfig!.contents || [];
    const isBlockAlreadyAdded = existingBlocks.some((block) => block.type === inputValue);
    if (isBlockAlreadyAdded) {
      return toast.error(`"${inputValue}" 입력한 클래스명 블록은 이미 존재합니다.`);
    }

    if (!Blockly.Blocks[inputValue!]) {
      Blockly.Blocks[inputValue!] = {
        init: function () {
          this.appendDummyInput().appendField(
            new CustomFieldLabelSerializable(inputValue!),
            'CLASS'
          ); // 입력된 이름 반영
          this.setOutput(true);
          this.setStyle(`defaultBlockCss`);
        },
      };
    }

    // 기존 블록에 새 블록 추가
    cssStyleToolboxConfig!.contents = [...existingBlocks, { kind: 'block', type: inputValue }];
    const { addClassBlock } = useClassBlockStore.getState();
    addClassBlock(inputValue);

    this.show(cssStyleToolboxConfig.contents);
    toast.success(`입력한 클래스명 블록 "${inputValue}"이(가) 추가되었습니다.`);

    if (this.inputElement) {
      this.inputElement.value = '';
    }
  }
}
