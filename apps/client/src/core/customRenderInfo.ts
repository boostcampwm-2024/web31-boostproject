import * as Blockly from 'blockly/core';
import { CustomRenderer } from './customRenderer';
import { CustomFieldTextInput } from './customFieldTextInput';

const Types = Blockly.blockRendering.Types;

export class CustomRenderInfo extends Blockly.zelos.RenderInfo {
  constructor(renderer: CustomRenderer, block: Blockly.BlockSvg) {
    super(renderer, block);
  }

  override finalize_(): void {
    super.finalize_();

    let finalizeMaxWidth = this.topRow.width;
    let isProcessedBetween = false;

    this.rows.forEach((row) => {
      if (row.hasInlineInput && row.elements.length === 5) {
        const fieldLabel = row.elements[1];
        const inputField = row.elements[row.elements.length - 2];

        const maxWidth = this.constants_.MAX_DYNAMIC_CONNECTION_SHAPE_WIDTH;
        const maxHeight = maxWidth * 1.5;
        const height = inputField.height > maxHeight ? maxHeight : inputField.height;
        const radius = height / 4;

        const minRowWidth = 140;
        let totalRowWidth = Math.max(row.width, minRowWidth);
        const difference = inputField.width - (radius + this.constants_.EMPTY_INLINE_INPUT_PADDING);

        if (difference) {
          totalRowWidth += difference > 40 ? difference / 2 + 20 : difference;
        }

        const remainingSpace =
          totalRowWidth -
          (fieldLabel.width + inputField.width) -
          (difference > 40 ? difference / 2 - 20 : 0);
        inputField.xPos = fieldLabel.width + remainingSpace - fieldLabel.xPos;

        row.width += difference > 40 ? 40 : difference;
        this.block_.width += difference > 40 ? 40 : difference;
        finalizeMaxWidth = Math.max(finalizeMaxWidth, row.width);
        isProcessedBetween = true;
      } else {
        let isInlineCustomInput = false;
        row.elements.forEach((elem) => {
          if (Types.isField(elem)) {
            if ((elem as Blockly.blockRendering.Field).field instanceof CustomFieldTextInput) {
              isInlineCustomInput = true;
            }
          }
        });

        if (isInlineCustomInput) {
          const inputField = row.elements[row.elements.length - 2];
          const fieldLabel = row.elements.length > 3 ? row.elements[1] : { width: 0, xPos: 8 };

          const minRowWidth = 150;
          let totalRowWidth = Math.max(row.width, minRowWidth);

          const maxWidth = this.constants_.MAX_DYNAMIC_CONNECTION_SHAPE_WIDTH;
          const maxHeight = maxWidth * 1.5;
          const height = inputField.height > maxHeight ? maxHeight : inputField.height;
          const radius = height / 4;
          inputField.width =
            inputField.width < this.constants_.EMPTY_INLINE_INPUT_PADDING
              ? this.constants_.EMPTY_INLINE_INPUT_PADDING
              : inputField.width;
          const difference =
            inputField.width - (radius + this.constants_.EMPTY_INLINE_INPUT_PADDING);

          if (difference) {
            totalRowWidth += difference > 40 ? difference / 2 + 20 : difference;
          }

          const remainingSpace =
            totalRowWidth -
            (fieldLabel.width + inputField.width) -
            (difference > 40 ? difference / 2 - 20 : 0);
          inputField.xPos = fieldLabel.width + remainingSpace - fieldLabel.xPos;

          row.width = difference > 40 ? totalRowWidth - (difference / 2 + 20 - 40) : totalRowWidth;
          this.block_.width += difference > 40 ? 40 : difference;
          finalizeMaxWidth = Math.max(finalizeMaxWidth, row.width);
          isProcessedBetween = true;
        } else {
          finalizeMaxWidth = Math.max(finalizeMaxWidth, 150);
        }
      }
    });

    if (finalizeMaxWidth > this.topRow.width) {
      const difference = finalizeMaxWidth - this.topRow.width;
      this.topRow.elements[this.topRow.elements.length - 2].width +=
        difference > 40 && isProcessedBetween ? difference / 2 + 20 : difference;
      this.bottomRow.elements[this.bottomRow.elements.length - 2].width +=
        difference > 40 && isProcessedBetween ? difference / 2 + 20 : difference;
      this.rows.forEach((row) => {
        if (row.hasStatement) {
          row.width += difference > 40 && isProcessedBetween ? difference / 2 + 20 : difference;
        }
      });
    }
  }
}
