import * as Blockly from 'blockly/core';
import { UiMetrics } from 'blockly/core/metrics_manager';

export default class CustomZoomControls extends Blockly.ZoomControls {
  zoomInGroupSVG: SVGGElement | null = null;
  zoomOutGroupSVG: SVGGElement | null = null;
  zoomResetGroupSVG: SVGGElement | null = null;
  customWorkspace: Blockly.WorkspaceSvg;

  constructor(workspace: Blockly.WorkspaceSvg) {
    super(workspace);
    this.customWorkspace = workspace;
  }

  override createDom(): SVGElement {
    const dom = super.createDom();

    this.zoomInGroupSVG = dom.querySelector('.blocklyZoomIn') as SVGGElement;
    if (this.zoomInGroupSVG) {
      const zoomInImage = this.zoomInGroupSVG.querySelector('image') as SVGImageElement;
      if (zoomInImage) {
        zoomInImage.setAttribute(
          'xlink:href',
          import.meta.env.VITE_STATIC_STORAGE_URL + 'sprites.png'
        );
      }
    }

    this.zoomOutGroupSVG = dom.querySelector('.blocklyZoomOut') as SVGGElement;
    if (this.zoomOutGroupSVG) {
      const zoomOutImage = this.zoomOutGroupSVG.querySelector('image') as SVGImageElement;
      if (zoomOutImage) {
        zoomOutImage.setAttribute(
          'xlink:href',
          import.meta.env.VITE_STATIC_STORAGE_URL + 'sprites.png'
        );
      }
    }

    this.zoomResetGroupSVG = dom.querySelector('.blocklyZoomReset') as SVGGElement;
    if (this.zoomResetGroupSVG) {
      const zoomResetImage = this.zoomResetGroupSVG.querySelector('image') as SVGImageElement;
      if (zoomResetImage) {
        zoomResetImage.setAttribute(
          'xlink:href',
          import.meta.env.VITE_STATIC_STORAGE_URL + 'sprites.png'
        );
      }
    }

    return dom;
  }

  override position(metrics: UiMetrics, savedPositions: Blockly.utils.Rect[]): void {
    if (!(this.zoomInGroupSVG && this.zoomOutGroupSVG && this.zoomResetGroupSVG)) {
      return;
    }

    const uiPosition = Blockly.uiPosition;
    const SMALL_SPACING = 0;
    const LARGE_SPACING = 8;
    const HEIGHT = 32;
    const WIDTH = 32;
    const MARGIN_VERTICAL = 12;
    const MARGIN_HORIZAONTAL = 12;

    const cornerPosition = { horizontal: 1, vertical: 0 };
    let width = SMALL_SPACING + 2 * WIDTH;
    if (this.zoomResetGroupSVG) {
      width += LARGE_SPACING + WIDTH;
    }
    const startRect = uiPosition.getStartPositionRect(
      cornerPosition,
      new Blockly.utils.Size(width, HEIGHT),
      MARGIN_HORIZAONTAL,
      MARGIN_VERTICAL,
      metrics,
      this.customWorkspace
    );

    const bumpDirection = uiPosition.bumpDirection.DOWN;
    const positionRect = uiPosition.bumpPositionRect(
      startRect,
      MARGIN_HORIZAONTAL,
      bumpDirection,
      savedPositions
    );

    const zoomInTranslateX = this.zoomResetGroupSVG ? LARGE_SPACING + WIDTH : 0;
    this.zoomInGroupSVG?.setAttribute('transform', `translate(${zoomInTranslateX}, 0)`);
    const zoomOutTranslateX = zoomInTranslateX + SMALL_SPACING + WIDTH;
    this.zoomOutGroupSVG?.setAttribute('transform', `translate(${zoomOutTranslateX}, 0)`);

    this.zoomInGroupSVG?.parentElement?.setAttribute(
      'transform',
      'translate(' + positionRect.left + ',' + positionRect.top + ')'
    );
  }
}
