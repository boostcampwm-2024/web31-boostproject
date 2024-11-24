import 'blockly/blocks';
import * as Blockly from 'blockly/core';
import { useEffect, useState } from 'react';

import htmlCodeGenerator from '@/widgets/workspace/blockly/htmlCodeGenerator';
import CustomCategory from '@/widgets/workspace/blockly/customCategory';
import {
  CssPropsSelectBox,
  defineBlocks,
  toolboxConfig,
  initTheme,
  customizeFlyoutSVG,
  classMakerPrompt,
  PreviewBox,
} from '@/widgets';

const svgPaths = Blockly.utils.svgPaths;
type Shape = Blockly.blockRendering.BaseShape | Blockly.blockRendering.DynamicShape;

class BoolockConstantProvider extends Blockly.zelos.ConstantProvider {
  constructor() {
    super();

    this.NOTCH_WIDTH = 6 * this.GRID_UNIT;
    this.NOTCH_HEIGHT = 2 * this.GRID_UNIT;
    this.NOTCH_OFFSET_LEFT = (2 * this.GRID_UNIT) / 3;
    this.CORNER_RADIUS = (2 * this.GRID_UNIT) / 3;
    this.FIELD_TEXT_FONTFAMILY = 'SUIT Variable';
    this.FIELD_TEXT_FONTWEIGHT = 'normal';
    this.EMPTY_INLINE_INPUT_PADDING = 50;
    this.MIN_BLOCK_WIDTH = 56;
    this.FIELD_BORDER_RECT_X_PADDING = 7;
  }

  override makeNotch(): {
    type: number;
    width: number;
    height: number;
    pathLeft: string;
    pathRight: string;
  } {
    const width = this.NOTCH_WIDTH;
    const height = this.NOTCH_HEIGHT;

    const pathRight = 'c -2 0 -3 0 -5 1 l -10 6 c -2 1 -3 1 -4 0 l -3 -5 c -0.5 -1 -1 -2 -2 -2';
    const pathLeft = 'h 0 c 1 0 1 0.5 2 2 l 3 5 c 1 1 2 1 4 0 l 10 -6 c 2 -1 3 -1 5 -1';

    return {
      type: this.SHAPES.NOTCH,
      width,
      height,
      pathLeft,
      pathRight,
    };
  }

  protected override makeRounded(): Shape {
    const maxWidth = this.MAX_DYNAMIC_CONNECTION_SHAPE_WIDTH;
    const maxHeight = maxWidth * 1.5;

    function makeMainPath(blockHeight: number, up: boolean, right: boolean): string {
      let remainingHeight = blockHeight > maxHeight ? blockHeight - maxHeight : 0;
      const height = blockHeight > maxHeight ? maxHeight : blockHeight;
      const radius = height / 8;
      remainingHeight += (height / 8) * 6;
      const sweep = right === up ? '0' : '1';
      const temp =
        svgPaths.arc(
          'a',
          '0 0,' + sweep,
          radius,
          svgPaths.point((right ? 1 : -1) * radius, (up ? -1 : 1) * radius)
        ) +
        svgPaths.lineOnAxis('v', (up ? -1 : 1) * remainingHeight) +
        svgPaths.arc(
          'a',
          '0 0,' + sweep,
          radius,
          svgPaths.point((right ? -1 : 1) * radius, (up ? -1 : 1) * radius)
        );
      return temp;
    }

    return {
      type: this.SHAPES.ROUND,
      isDynamic: true,
      width(height: number): number {
        const halfHeight = height / 3.5;
        return halfHeight > maxWidth ? maxWidth : halfHeight - 6;
      },
      height(height: number): number {
        return height;
      },
      connectionOffsetY(connectionHeight: number): number {
        return connectionHeight / 2;
      },
      connectionOffsetX(connectionWidth: number): number {
        return -connectionWidth;
      },
      pathDown(height: number): string {
        return makeMainPath(height, false, false);
      },
      pathUp(height: number): string {
        return makeMainPath(height, true, false);
      },
      pathRightDown(height: number): string {
        return makeMainPath(height, false, true);
      },
      pathRightUp(height: number): string {
        return makeMainPath(height, false, true);
      },
    };
  }

  override getCSS_(selector: string): string[] {
    const cssList = super.getCSS_(selector);

    return [...cssList, `${selector} .blocklyText {`, `fill: #F4F8FA;`, `}`];
  }
}

const dom = Blockly.utils.dom;
const Svg = Blockly.utils.Svg;

export class CustomFieldTextInput extends Blockly.FieldTextInput {
  protected textGroup_!: SVGGElement;
  protected backgroundRect_!: SVGRectElement;
  protected isFixed: boolean = false;

  protected override widgetCreate_(): HTMLInputElement | HTMLTextAreaElement {
    const htmlInput = super.widgetCreate_();

    const div = Blockly.WidgetDiv.getDiv();
    const scale = this.workspace_!.getScale();

    const borderRadius = 5 * scale + 'px';

    div!.style.borderRadius = 5 * scale + 'px';
    htmlInput.style.borderRadius = borderRadius;

    return htmlInput;
  }

  protected override updateSize_(margin?: number): void {
    const constants = this.getConstants();
    const xOffset =
      margin !== undefined
        ? margin
        : !this.isFullBlockField()
          ? this.getConstants()!.FIELD_BORDER_RECT_X_PADDING
          : 0;
    let totalWidth = xOffset * 2;
    let totalHeight = constants!.FIELD_TEXT_HEIGHT;

    let contentWidth = 0;
    if (this.textElement_) {
      contentWidth = dom.getFastTextWidth(
        this.textElement_,
        constants!.FIELD_TEXT_FONTSIZE,
        constants!.FIELD_TEXT_FONTWEIGHT,
        constants!.FIELD_TEXT_FONTFAMILY
      );
      totalWidth += contentWidth;
    }
    if (!this.isFullBlockField()) {
      totalHeight = Math.max(totalHeight, constants!.FIELD_BORDER_RECT_HEIGHT);
    }

    this.size_.height = totalHeight;
    this.size_.width = Math.max(totalWidth, constants!.EMPTY_INLINE_INPUT_PADDING);

    this.positionTextElement_(xOffset, contentWidth);
    this.positionBorderRect_();
  }
}

class CustomFieldLabel extends Blockly.FieldLabel {
  protected textGroup_!: SVGGElement;
  protected backgroundRect_!: SVGRectElement;

  protected override createTextElement_(): void {
    this.backgroundRect_ = dom.createSvgElement(
      Svg.RECT,
      {
        class: 'blocklyTextBackground',
        x: 0,
        y: 0,
        rx: 10,
        ry: 10,
        fill: '#1E272E',
        stroke: 'none',
      },
      this.fieldGroup_
    );

    this.textElement_ = dom.createSvgElement(
      Svg.TEXT,
      {
        class: 'blocklyText',
        x: 0,
        y: 0,
        'dominant-baseline': 'central',
      },
      this.fieldGroup_
    );

    this.textContent_ = document.createTextNode('');
    this.textElement_.appendChild(this.textContent_);
  }

  protected override render_(): void {
    super.render_();

    const bbox = this.textElement_!.getBBox();
    this.backgroundRect_.setAttribute('width', (bbox.width + 12).toString());
    this.backgroundRect_.setAttribute('height', (bbox.height + 4).toString());
    this.backgroundRect_.setAttribute('x', (bbox.x + 6).toString());
    this.backgroundRect_.setAttribute('y', (bbox.y - 2).toString());
    this.textElement_?.setAttribute('x', (bbox.x + 12).toString());
  }
}

Blockly.fieldRegistry.unregister('field_label');
Blockly.fieldRegistry.register('field_label', CustomFieldLabel);

const Types = Blockly.blockRendering.Types;

class CustomRenderInfo extends Blockly.zelos.RenderInfo {
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

class CustomRenderer extends Blockly.zelos.Renderer {
  constructor(name: string) {
    super(name);
  }

  protected override makeConstants_(): BoolockConstantProvider {
    return new BoolockConstantProvider();
  }

  protected override makeRenderInfo_(block: Blockly.BlockSvg): Blockly.zelos.RenderInfo {
    return new CustomRenderInfo(this, block);
  }
}

Blockly.blockRendering.register('boolock', CustomRenderer);

Blockly.registry.register(
  Blockly.registry.Type.TOOLBOX_ITEM,
  Blockly.ToolboxCategory.registrationName,
  CustomCategory,
  true
);

export const WorkspaceContent = () => {
  const [workspace, setWorkspace] = useState<Blockly.WorkspaceSvg | null>(null);
  const [htmlCode, setHtmlCode] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'preview' | 'html' | 'css'>('preview');

  defineBlocks();

  useEffect(() => {
    const newWorkspace = Blockly.inject('blocklyDiv', {
      renderer: 'boolock',
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
    });

    newWorkspace.registerButtonCallback('classMakerPrompt', () => classMakerPrompt(newWorkspace));

    setWorkspace(newWorkspace);
    customizeFlyoutSVG(newWorkspace);

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
        <PreviewBox activeTab={activeTab} setActiveTab={setActiveTab} htmlCode={htmlCode} />
        <CssPropsSelectBox />
      </div>

      <div id="blocklyDiv" className="h-full w-full"></div>

      <button className="h-10 w-20 bg-blue-400" onClick={generateHtmlCode}>
        변환하기
      </button>
    </div>
  );
};
