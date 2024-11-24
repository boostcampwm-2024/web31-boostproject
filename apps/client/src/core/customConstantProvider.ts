import * as Blockly from 'blockly/core';

const svgPaths = Blockly.utils.svgPaths;
type Shape = Blockly.blockRendering.BaseShape | Blockly.blockRendering.DynamicShape;

export class CustomConstantProvider extends Blockly.zelos.ConstantProvider {
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
