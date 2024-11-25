import * as Blockly from 'blockly/core';
import toast from 'react-hot-toast';
import TabbedToolbox from './tabbedToolbox';
import FixedFlyout from './fixedFlyout';
import Dom from './dom';
import { cssStyleToolboxConfig } from '@/widgets';
import { useClassBlockStore } from '@/shared/store';
import FieldClickableImage from './fieldClickableImage';
import cssClassDeleteIcon from '@/shared/assets/css_class_delete_icon.svg';
import { Tblock } from '@/shared/types';

export default class StyleFlyout extends FixedFlyout {
  static registryName = 'StyleFlyout';

  pElement: HTMLDivElement | null = null;
  inputElement: HTMLInputElement | null = null;
  buttonElement: HTMLButtonElement | null = null;

  // flyout 위치 오버라이딩
  position(): void {
    super.position(); // FixedFlyout의 기본 배치 호출
    const toolbox = this.targetWorkspace!.getToolbox();

    if (!toolbox) {
      throw new Error('no toolbox');
    }

    const metrics = (toolbox as TabbedToolbox).getContentAreaMetrics();
    this.positionAt_(metrics.width - 10, metrics.height - 150, 10, 150);
  }

  init(targetWorkspace: Blockly.WorkspaceSvg): void {
    super.init(targetWorkspace);
    const toolbox = this.targetWorkspace.getToolbox() as TabbedToolbox;

    const cssStyleToolboxDivElement = Dom.createElement<HTMLDivElement>('div', {
      class: 'contentCreatingBlock',
    });

    const labelElement = Dom.createElement<HTMLLabelElement>('label', {
      for: 'creatingBlockInput',
      class: 'creatingBlockLabel',
    });
    labelElement.textContent = '클래스명';

    this.inputElement = Dom.createElement<HTMLInputElement>('input', {
      type: 'text',
      placeholder: '클래스명을 정해주세요',
      class: 'creatingBlockInput',
      id: 'creatingBlockInput',
    });

    const buttonElement = Dom.createElement<HTMLButtonElement>('button', {
      class: 'creatingBlockButton',
    });
    buttonElement.textContent = '+';
    buttonElement.addEventListener('click', () => this.createStyleBlock());
    // TODO: input 입력값 존재 && focus된 경우 Enter 클릭하면 CSS 클래스명 블록 생성

    [labelElement, this.inputElement, buttonElement].forEach((element) =>
      cssStyleToolboxDivElement.appendChild(element)
    );

    toolbox.addElementToContentArea(cssStyleToolboxDivElement);
    // TODO: toolbox 중복 호출 논의
    this.show(cssStyleToolboxConfig.contents);
  }

  createStyleBlock() {
    const inputValue = this.inputElement?.value;
    if (!inputValue) {
      return toast.error('클래스명을 입력해주세요.');
    }

    const existingBlocks: Tblock[] = cssStyleToolboxConfig!.contents || [];
    const isBlockAlreadyAdded = existingBlocks.some((block) => block.type === inputValue);
    if (isBlockAlreadyAdded) {
      return toast.error(`"${inputValue}" 입력한 클래스명 블록은 이미 존재합니다.`);
    }

    if (!Blockly.Blocks[inputValue!]) {
      const flyoutInstance = this;
      Blockly.Blocks[inputValue!] = {
        init: function () {
          const input = this.appendDummyInput();
          input.appendField(new Blockly.FieldLabelSerializable(inputValue!), 'CLASS');

          // TODO: CSS 클래스명 블록 색상 변경
          input.appendField(
            new FieldClickableImage(
              cssClassDeleteIcon,
              12,
              12,
              '삭제',
              flyoutInstance.deleteStyleBlock.bind(flyoutInstance, inputValue!)
            )
          );

          this.setOutput(true);
          this.setColour('#02D085');
          // this.setColour('#F4F8FA');
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

  // TODO: 워크스페이스에 존재하는 CSS 클래스명 블록 삭제 논의 필요
  deleteStyleBlock(blockType: string) {
    const blocks = this.workspace_.getAllBlocks();

    // CSS 클래스명 블록 삭제
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i].type === blockType) {
        blocks[i].dispose(false, true);
        break;
      }
    }

    cssStyleToolboxConfig.contents = cssStyleToolboxConfig.contents.filter(
      (block) => block.type !== blockType
    );

    const { removeClassBlock } = useClassBlockStore.getState();
    removeClassBlock(blockType);

    this.show(cssStyleToolboxConfig.contents);
    toast.success(`"${blockType}" 클래스명 블록이 삭제되었습니다.`);
  }
}
