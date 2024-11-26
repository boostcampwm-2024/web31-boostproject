import * as Blockly from 'blockly/core';
import { UiMetrics } from 'blockly/core/metrics_manager';

const WIDTH = 72;
const BODY_HEIGHT = 53;
const LID_HEIGHT = 47;
const MARGIN_HORIZONTAL = 36;
const MARGIN_VERTICAL = 20;

export default class CustomTrashcan extends Blockly.Trashcan {
  customWorkspace: Blockly.WorkspaceSvg;
  constructor(workspace: Blockly.WorkspaceSvg) {
    super(workspace);
    this.customWorkspace = workspace;
  }

  override createDom(): SVGElement {
    const resultDom = super.createDom();

    const svgImageList = resultDom.querySelectorAll('image');
    if (svgImageList && svgImageList.length === 2) {
      svgImageList[0].setAttribute('width', WIDTH.toString());
      svgImageList[0].setAttribute('height', '100');
      svgImageList[0].setAttribute('y', '0');
      svgImageList[0].setAttribute(
        'xlink:href',
        import.meta.env.VITE_STATIC_STORAGE_URL + 'trashcan.png'
      );
      svgImageList[1].setAttribute('width', WIDTH.toString());
      svgImageList[1].setAttribute('height', '100');
      svgImageList[1].setAttribute('y', '0');
      svgImageList[1].setAttribute(
        'xlink:href',
        import.meta.env.VITE_STATIC_STORAGE_URL + 'trashcan.png'
      );
    }

    const svgClipPathList = resultDom.querySelectorAll('clipPath');
    if (svgClipPathList && svgClipPathList.length === 2) {
      let svgRect = svgClipPathList[0].querySelector('rect');
      if (svgRect) {
        svgRect.setAttribute('width', WIDTH.toString());
        svgRect.setAttribute('height', BODY_HEIGHT.toString());
        svgRect.setAttribute('y', '47');
      }
      1;
      svgRect = svgClipPathList[1].querySelector('rect');
      if (svgRect) {
        svgRect.setAttribute('width', WIDTH.toString());
        svgRect.setAttribute('height', LID_HEIGHT.toString());
      }
    }

    return resultDom;
  }

  override position(metrics: UiMetrics, savedPositions: Blockly.utils.Rect[]): void {
    const svgGroup = document.querySelector('.blocklyTrash');
    if (!svgGroup) {
      return;
    }

    const uiPosition = Blockly.uiPosition;
    const height = BODY_HEIGHT + LID_HEIGHT;
    const cornerPosition = { horizontal: 1, vertical: 1 };
    const startRect = uiPosition.getStartPositionRect(
      cornerPosition,
      new Blockly.utils.Size(WIDTH, height),
      MARGIN_HORIZONTAL,
      MARGIN_VERTICAL,
      metrics,
      this.customWorkspace
    );

    const verticalPosition = cornerPosition.vertical;
    const bumpDirection =
      verticalPosition === uiPosition.verticalPosition.TOP
        ? uiPosition.bumpDirection.DOWN
        : uiPosition.bumpDirection.UP;
    const positionRect = uiPosition.bumpPositionRect(
      startRect,
      MARGIN_VERTICAL,
      bumpDirection,
      savedPositions
    );

    const left = positionRect.left;
    const top = positionRect.top;

    svgGroup.setAttribute('transform', `translate(${left}, ${top})`);
  }
}
