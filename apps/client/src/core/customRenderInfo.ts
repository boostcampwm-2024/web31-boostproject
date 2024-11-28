import * as Blockly from 'blockly/core';
import { CustomRenderer } from './customRenderer';
import { CustomFieldTextInput } from './customFieldTextInput';
import { hasField } from '@/shared/utils';

const Types = Blockly.blockRendering.Types;

/*
 *블록내에서 inlineInputField 와 blockl label field를 space-between처럼 좌우에 고정시키기 위해 커스텀한 renderInfo 클래스입니다.
 *renderInfo는 블록 좌표, 어떤 블록 타입인지, 어떤 길이를 가지는지 등등 블록에 대한 정보를 전부 설정해주는 클래스로,
 *drawer 이전 마지막으로 호출되는 클래스이기에 이 부분에서 field가 그려질 좌표를 수정해주었습니다.
 */
export class CustomRenderInfo extends Blockly.zelos.RenderInfo {
  MIN_WIDTH = 160;
  MAX_WIDTH = 0;
  MAX_HEIGHT = 0;
  PADDING_EMPTY = 0;
  PADDING_DEFAULT = 35;
  PADDING_LEFT = 14;
  PADDING_RIGHT = 10;
  WIDTH_DIFF = this.MIN_WIDTH - 110;

  constructor(renderer: CustomRenderer, block: Blockly.BlockSvg) {
    super(renderer, block);
  }

  override finalize_(): void {
    super.finalize_();

    this.initDynamicProps();
    let maxWidth = this.topRow.width;
    let adjusted = false;

    this.rows.forEach((row) => {
      if (row.hasInlineInput && row.elements.length === 5) {
        maxWidth = this.handleInlineInput(row, maxWidth);
        adjusted = true;
      } else {
        const hasCustomInput = row.elements.some(
          (el) =>
            Types.isField(el) &&
            (el as Blockly.blockRendering.Field).field instanceof CustomFieldTextInput
        );

        if (hasCustomInput) {
          maxWidth = this.handleCustomInput(row, maxWidth);
          adjusted = true;
        } else {
          maxWidth = Math.max(maxWidth, this.MIN_WIDTH);
        }
      }
    });

    this.updateWidths(maxWidth, adjusted);
  }

  private initDynamicProps(): void {
    this.MAX_WIDTH = this.constants_.MAX_DYNAMIC_CONNECTION_SHAPE_WIDTH;
    this.MAX_HEIGHT = this.MAX_WIDTH * 1.5;
    this.PADDING_EMPTY = this.constants_.EMPTY_INLINE_INPUT_PADDING;
  }

  private handleInlineInput(row: any, maxWidth: number): number {
    const label = row.elements[1];
    const input = row.elements[row.elements.length - 2];

    const height = Math.min(input.height, this.MAX_HEIGHT);
    const radius = height / 4;
    const labelWidth = label.width;
    const inputWidth = input.width;

    const totalBase =
      this.PADDING_LEFT + labelWidth + this.PADDING_DEFAULT + inputWidth + this.PADDING_RIGHT;
    let totalWidth = Math.max(totalBase, this.MIN_WIDTH);

    const extraWidth = inputWidth - (radius + this.PADDING_EMPTY);
    if (extraWidth) {
      totalWidth += extraWidth > this.WIDTH_DIFF ? (extraWidth + this.WIDTH_DIFF) / 2 : extraWidth;
    }

    const remaining =
      totalWidth - (labelWidth + inputWidth + this.PADDING_LEFT + this.PADDING_RIGHT);
    input.xPos =
      labelWidth +
      (totalWidth > this.MIN_WIDTH ? this.PADDING_DEFAULT : remaining) +
      this.PADDING_LEFT;

    row.width =
      totalWidth > this.MIN_WIDTH ? input.xPos + inputWidth + this.PADDING_RIGHT : this.MIN_WIDTH;

    return Math.max(maxWidth, row.width);
  }

  private handleCustomInput(row: any, maxWidth: number): number {
    const input = row.elements[row.elements.length - 2];
    const label = row.elements.length > 3 ? row.elements[1] : { width: 0, xPos: 8 };

    const labelWidth = label.width;
    const inputWidth = input.width;

    const baseWidth = this.PADDING_LEFT + labelWidth + this.PADDING_DEFAULT + this.PADDING_RIGHT;
    const totalWidth = baseWidth + inputWidth;

    if (hasField(input) && totalWidth < this.MIN_WIDTH) {
      (input.field as CustomFieldTextInput).updateWidth(this.MIN_WIDTH - baseWidth);
    }

    input.xPos = labelWidth + this.PADDING_DEFAULT + this.PADDING_LEFT;

    row.width = Math.max(totalWidth, this.MIN_WIDTH);

    return Math.max(maxWidth, row.width);
  }

  private updateWidths(maxWidth: number, adjusted: boolean): void {
    if (maxWidth > this.topRow.width) {
      const diff = maxWidth - this.topRow.width;
      const extra = diff > this.WIDTH_DIFF && adjusted ? (diff + this.WIDTH_DIFF) / 2 : diff;

      this.topRow.elements[this.topRow.elements.length - 2].width += extra;
      this.bottomRow.elements[this.bottomRow.elements.length - 2].width += extra;

      this.rows.forEach((row) => {
        if (row.hasStatement) {
          row.width += extra;
        }
      });
    }
  }
}
