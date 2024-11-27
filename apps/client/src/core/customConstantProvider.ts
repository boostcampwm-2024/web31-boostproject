import * as Blockly from 'blockly/core';

const svgPaths = Blockly.utils.svgPaths;
type Shape = Blockly.blockRendering.BaseShape | Blockly.blockRendering.DynamicShape;

export class CustomConstantProvider extends Blockly.zelos.ConstantProvider {
  constructor() {
    super();

    this.NOTCH_WIDTH = 6 * this.GRID_UNIT; // 블록 연결 부분 너비
    this.NOTCH_HEIGHT = 2 * this.GRID_UNIT; // 블록 연결 부분 높이
    this.NOTCH_OFFSET_LEFT = (2 * this.GRID_UNIT) / 3; // 블록 연결 부분을 기준으로 좌측 길이
    this.CORNER_RADIUS = (2 * this.GRID_UNIT) / 3;
    this.FIELD_TEXT_FONTFAMILY = 'SUIT Variable';
    this.FIELD_TEXT_FONTWEIGHT = 'bold';
    this.EMPTY_INLINE_INPUT_PADDING = 50; // inline text input field가 비어져 있을 경우, 해당 필드 너비
    this.MIN_BLOCK_WIDTH = 56; // 블록 최소 너비 (클래스명 블록의 최소 너비를 정하기 위해)
    this.FIELD_BORDER_RECT_X_PADDING = 7; // inlin text input field의 좌우 padding값 (클래스명 블록 및 텍스트 블록)
  }

  // constructor 시 constant 값을 초기값을 해도, 해당 메소드를 통해 draw 동작 전 notch에 대한 constant 값이 다시 매겨집니다.
  override makeNotch(): {
    type: number;
    width: number;
    height: number;
    pathLeft: string;
    pathRight: string;
  } {
    const width = this.NOTCH_WIDTH; // 24 기준
    const height = this.NOTCH_HEIGHT; // 8 기준

    const pathRight = 'c -2 0 -3 0 -5 1 l -10 6 c -2 1 -3 1 -4 0 l -3 -5 c -0.5 -1 -1 -2 -2 -2'; // 좌측방향으로 그릴 시 연결 부분 path값
    const pathLeft = 'h 0 c 1 0 1 0.5 2 2 l 3 5 c 1 1 2 1 4 0 l 10 -6 c 2 -1 3 -1 5 -1'; // 우측방향으로 그릴 시 연결 부분 path값

    return {
      type: this.SHAPES.NOTCH,
      width,
      height,
      pathLeft,
      pathRight,
    };
  }

  /**
   * makeNotch와 똑같이 draw 동작 전 rounded에 대한 cosntant 값이 다시 매겨집니다.
   * 이 메소드가 쓰이는 곳은 inlint input field가 있을 경우 이에 대한 내부 path 경로를 그릴 때 사용됩니다.
   * 즉, boolock내에서는 클래스명 블록과 text 블록 내 input field, html 태그 블록들의 비어져있는 클래스명 field 부분을 그릴 때 사용됩니다.
   * 해당 메소드는 메소드의 내부 로직중 일부를 고쳐야함으로, super.makeRounded 이후 사용하기 어려워 해당 메소드를 그대로 복붙해와서 사용중입니다.
   */

  protected override makeRounded(): Shape {
    const maxWidth = this.MAX_DYNAMIC_CONNECTION_SHAPE_WIDTH; // parent 블록과 연결된 내부 블록의 최대 너비 값
    const maxHeight = maxWidth * 1.5;

    // 해당 함수는 field를 그릴 때 연결 부위 및 좌우 세로선을 그릴 때 호출됩니다.
    function makeMainPath(blockHeight: number, up: boolean, right: boolean): string {
      let remainingHeight = blockHeight > maxHeight ? blockHeight - maxHeight : 0;
      const height = blockHeight > maxHeight ? maxHeight : blockHeight;
      const radius = height / 8;
      remainingHeight += (height / 8) * 6;
      const sweep = right === up ? '0' : '1'; // 좌측, 우측 세로선 중 어느 선을 그리냐에 따라 값이 다르게 들어갑니다.
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

  /**
   * renderer가 동작하면서 블록이 만들어질 때 해당 메소드를 통해 블록들의 스타일이 적용됩니다.
   * 기존 메소드로 만들어진 list중 blocklyText 부분의 색상만 변경하였습니다.
   */
  override getCSS_(selector: string): string[] {
    const cssList = super.getCSS_(selector);

    return [...cssList, `${selector} .blocklyText {`, `fill: #F4F8FA;`, `}`];
  }
}
