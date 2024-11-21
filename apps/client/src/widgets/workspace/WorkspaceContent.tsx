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
const ConnectionType = Blockly.ConnectionType;
type Shape = Blockly.blockRendering.BaseShape | Blockly.blockRendering.DynamicShape;

class CustomConstantProvider extends Blockly.zelos.ConstantProvider {
  constructor() {
    super();
    this.NOTCH_WIDTH = 6 * this.GRID_UNIT;

    this.NOTCH_HEIGHT = 2 * this.GRID_UNIT;
    this.NOTCH_OFFSET_LEFT = (2 * this.GRID_UNIT) / 3;
    this.CORNER_RADIUS = (2 * this.GRID_UNIT) / 3;
    this.FIELD_TEXT_FONTFAMILY = 'SUIT Variable';
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

  protected makeRounded(): Shape {
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

      console.log('here, rounded: ', temp);
      return temp;
    }

    return {
      type: this.SHAPES.ROUND,
      isDynamic: true,
      width(height: number): number {
        const halfHeight = height / 3.5;
        return halfHeight > maxWidth ? maxWidth : halfHeight;
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

  override shapeFor(connection: Blockly.RenderedConnection): Shape {
    let checks = connection.getCheck();
    if (!checks && connection.targetConnection) {
      checks = connection.targetConnection.getCheck();
    }
    let outputShape;
    switch (connection.type) {
      case ConnectionType.INPUT_VALUE:
      case ConnectionType.OUTPUT_VALUE:
        outputShape = connection.getSourceBlock().getOutputShape();
        // If the block has an output shape set, use that instead.
        console.log('outputShape: ', outputShape);
        if (outputShape !== null) {
          switch (outputShape) {
            case this.SHAPES.HEXAGONAL:
              return this.HEXAGONAL!;
            case this.SHAPES.ROUND:
              return this.ROUNDED!;
            case this.SHAPES.SQUARE:
              return this.SQUARED!;
          }
        }
        // Includes doesn't work in IE.
        if (checks && checks.includes('Boolean')) {
          return this.HEXAGONAL!;
        }
        if (checks && checks.includes('Number')) {
          return this.ROUNDED!;
        }
        if (checks && checks.includes('String')) {
          return this.ROUNDED!;
        }
        console.log('rounded: ', this.ROUNDED);
        return this.ROUNDED!;
      case ConnectionType.PREVIOUS_STATEMENT:
      case ConnectionType.NEXT_STATEMENT:
        return this.NOTCH!;
      default:
        throw Error('Unknown type');
    }
  }
}

class CustomDrawer extends Blockly.zelos.Drawer {
  constructor(block: Blockly.BlockSvg, info: CustomRenderInfo) {
    super(block, info);
    this.constants_ = info.constants_;
  }

  override drawOutline_(): void {
    if (
      this.info_.outputConnection &&
      this.info_.outputConnection.isDynamicShape &&
      !this.info_.hasStatementInput &&
      !this.info_.bottomRow.hasNextConnection
    ) {
      this.drawFlatTop_();
      this.drawRightDynamicConnection_();
      this.drawFlatBottom_();
      this.drawLeftDynamicConnection_();
    } else {
      super.drawOutline_();
    }
  }
}

class CustomRenderInfo extends Blockly.zelos.RenderInfo {
  constructor(renderer: CustomRenderer, block: Blockly.BlockSvg) {
    super(renderer, block);

    this.renderer_ = renderer;
    this.constants_ = this.renderer_.getConstants();
  }

  override populateTopRow_() {
    super.populateTopRow_();

    this.topRow.height += this.constants_.CORNER_RADIUS;
  }
}

class CustomRenderer extends Blockly.zelos.Renderer {
  constructor(name: string) {
    super(name);
    this.constants_ = new CustomConstantProvider();
  }

  protected override makeConstants_(): CustomConstantProvider {
    return new CustomConstantProvider();
  }

  protected override makeRenderInfo_(block: Blockly.BlockSvg): CustomRenderInfo {
    return new CustomRenderInfo(this, block);
  }

  protected override makeDrawer_(block: Blockly.BlockSvg, info: CustomRenderInfo) {
    return new CustomDrawer(block, info);
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
