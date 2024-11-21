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
const Types = Blockly.blockRendering.Types;

class CustomConstantProvider extends Blockly.zelos.ConstantProvider {
  constructor() {
    super();
    this.NOTCH_WIDTH = 6 * this.GRID_UNIT;

    this.NOTCH_HEIGHT = 2 * this.GRID_UNIT;
    this.NOTCH_OFFSET_LEFT = (2 * this.GRID_UNIT) / 3;
    this.CORNER_RADIUS = (2 * this.GRID_UNIT) / 3;
  }

  override makeNotch(): {
    type: number;
    width: number;
    height: number;
    pathLeft: string;
    pathRight: string;
  } {
    const width = this.NOTCH_WIDTH; // 24
    const height = this.NOTCH_HEIGHT; // 8

    const innerWidth = width / 3; // 8
    const curveWidth = innerWidth / 4; // 2;
    const onePointerWidht = curveWidth / 2; // 1

    const halfHeight = height / 2; // 4
    const quarterHeight = halfHeight / 2; // 2
    console.log(1 * innerWidth + curveWidth);

    function makeMainPath(dir: number): string {
      return (
        svgPaths.curve('c', [
          svgPaths.point(dir * onePointerWidht, 0),
          svgPaths.point(dir * onePointerWidht, quarterHeight / 4),
          svgPaths.point(dir * curveWidth, quarterHeight),
        ]) +
        svgPaths.line([svgPaths.point(dir * onePointerWidht * 3, (quarterHeight / 2) * 5)]) +
        svgPaths.curve('c', [
          svgPaths.point(dir * onePointerWidht, quarterHeight / 2),
          svgPaths.point(dir * curveWidth, quarterHeight / 2),
          svgPaths.point(dir * curveWidth * 2, 0),
        ]) +
        svgPaths.line([
          svgPaths.point(dir * innerWidth + curveWidth, -(halfHeight + quarterHeight)),
        ]) +
        svgPaths.curve('c', [
          svgPaths.point(dir * curveWidth, -(quarterHeight / 2)),
          svgPaths.point(dir * onePointerWidht * 3, -(quarterHeight / 2)),
          svgPaths.point(dir * onePointerWidht * 5, -(quarterHeight / 2)),
        ])
        // svgPaths.line([svgPaths.point(dir * curveWidth, -halfHeight)]) +
        // svgPaths.curve('c', [
        //   svgPaths.point((dir * curveWidth) / 4, -(quarterHeight / 2)),
        //   svgPaths.point((dir * curveWidth) / 2, -quarterHeight),
        //   svgPaths.point(dir * curveWidth, -quarterHeight),
        // ])
      );
    }

    const pathLeft = makeMainPath(1);
    const pathRight = makeMainPath(-1);

    return {
      type: this.SHAPES.NOTCH,
      width,
      height,
      pathLeft,
      pathRight,
    };
  }

  protected override makeOutsideCorners(): Blockly.blockRendering.OutsideCorners {
    const radius = this.CORNER_RADIUS;
    /** SVG path for drawing the rounded top-left corner. */

    //m 0,4 a 4 4 0 0,1 4,-4
    const topLeft =
      svgPaths.moveBy(0, radius) +
      svgPaths.arc('a', '0 0,1', radius, svgPaths.point(radius, -radius));

    /** SVG path for drawing the rounded top-right corner. */
    const topRight = svgPaths.arc('a', '0 0,1', radius, svgPaths.point(radius, radius));

    /** SVG path for drawing the rounded bottom-left corner. */
    const bottomLeft = svgPaths.arc('a', '0 0,1', radius, svgPaths.point(-radius, -radius));

    /** SVG path for drawing the rounded bottom-right corner. */
    const bottomRight = svgPaths.arc('a', '0 0,1', radius, svgPaths.point(-radius, radius));

    return {
      topLeft,
      topRight,
      bottomRight,
      bottomLeft,
      rightHeight: radius,
    };
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

  protected override drawTop_() {
    const topRow = this.info_.topRow;
    const elements = topRow.elements;
    this.positionPreviousConnection_();
    this.outlinePath_ += svgPaths.moveBy(topRow.xPos, this.info_.startY);
    for (let i = 0, elem; (elem = elements[i]); i++) {
      if (Types.isLeftRoundedCorner(elem)) {
        this.outlinePath_ += this.constants_.OUTSIDE_CORNERS.topLeft;
        // this.outlinePath_ += `m 0 0 m 0 ${this.block_.previousConnection === null ? '4' : '5'} a 4 4 0 0 1 3 -4 `;
      } else if (Types.isRightRoundedCorner(elem)) {
        // this.outlinePath_ += 'a 4 4 0 0 1 3 4';
        this.outlinePath_ += this.constants_.OUTSIDE_CORNERS.topRight;
      } else if (
        Types.isPreviousConnection(elem) &&
        elem instanceof Blockly.blockRendering.PreviousConnection
      ) {
        console.log(
          (elem as Blockly.blockRendering.PreviousConnection).shape as Blockly.blockRendering.Notch
        );
        this.outlinePath_ += (
          (elem as Blockly.blockRendering.PreviousConnection).shape as Blockly.blockRendering.Notch
        ).pathLeft;

        // console.log(this.outlinePath_);

        // this.outlinePath_ += 'C 4 1 4 1 5 2 l 4 5 C 10 8 11.6 8 13 7 l 8 -6 c 1 -1 3 -1 4 -1 ';
      } else if (Types.isHat(elem)) {
        this.outlinePath_ += this.constants_.START_HAT.path;
      } else if (Types.isSpacer(elem)) {
        // console.log(elem);

        // if (this.block_.previousConnection !== null && i === 1) {
        //   svgPaths.lineOnAxis('h', 1);
        // } else if (this.block_.previousConnection !== null && i === 3) {
        //   this.outlinePath_ += svgPaths.lineOnAxis('h', elem.width + 24);
        // } else {
        //   this.outlinePath_ += svgPaths.lineOnAxis('h', elem.width + 2);
        // }
        this.outlinePath_ += svgPaths.lineOnAxis('h', elem.width);
      }
    }
    this.outlinePath_ += svgPaths.lineOnAxis('v', 5);
  }
}

class CustomRenderInfo extends Blockly.zelos.RenderInfo {
  constructor(renderer: CustomRenderer, block: Blockly.BlockSvg) {
    super(renderer, block);
    // console.log(renderer.getConstants());

    this.renderer_ = renderer;

    this.constants_ = this.renderer_.getConstants();
  }

  override populateTopRow_() {
    super.populateTopRow_();

    // 커스텀 상수를 기반으로 행(row)의 속성 설정
    this.topRow.height += this.constants_.CORNER_RADIUS; // 예: 코너 반경 추가
  }
}

class CustomRenderer extends Blockly.zelos.Renderer {
  // protected override constants_: CustomConstantProvider = new CustomConstantProvider();

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

  // public override getConstants(): CustomConstantProvider {
  //   return this.constants_; // 항상 Custom Constants 반환
  // }

  // override makePathObject(root: SVGElement, style: BlockStyle): Blockly.zelos.PathObject {
  //   return new CustomPathObject(root, style, this.getConstants());
  // }

  // public setConstants(): void {
  //   this.constants_ = new CustomConstantProvider();
  // }
}

Blockly.blockRendering.register('custom_renderer', CustomRenderer);

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
      renderer: 'custom_renderer',
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
