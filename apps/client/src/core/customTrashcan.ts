import * as Blockly from 'blockly/core';
import { UiMetrics } from 'blockly/core/metrics_manager';

const WIDTH = '72';
const BODY_HEIGHT = '53';
const LID_HEIGHT = '47';
const TOTAL_HEIGHT = '100';

export default class CustomTrashcan extends Blockly.Trashcan {
  customWorkspace: Blockly.WorkspaceSvg;
  constructor(workspace: Blockly.WorkspaceSvg) {
    super(workspace);
    this.customWorkspace = workspace;
  }

  override createDom(): SVGElement {
    const resultDom = super.createDom();

    const updateImageAttributes = (image: SVGImageElement) => {
      image.setAttribute('width', WIDTH);
      image.setAttribute('height', TOTAL_HEIGHT);
      image.setAttribute('y', '0');
      image.setAttribute('xlink:href', `${import.meta.env.VITE_STATIC_STORAGE_URL}trashcan.png`);
    };

    const updateRectAttributes = (
      rect: SVGRectElement,
      width: string,
      height: string,
      y?: string
    ) => {
      rect.setAttribute('width', width);
      rect.setAttribute('height', height);
      if (y) {
        rect.setAttribute('y', y);
      }
    };

    const svgImageList = resultDom.querySelectorAll<SVGImageElement>('image');
    if (svgImageList.length === 2) {
      svgImageList.forEach(updateImageAttributes);
    }

    const svgClipPathList = resultDom.querySelectorAll<SVGClipPathElement>('clipPath');
    if (svgClipPathList.length === 2) {
      const bodyRect = svgClipPathList[0].querySelector<SVGRectElement>('rect');
      if (bodyRect) {
        updateRectAttributes(bodyRect, WIDTH, BODY_HEIGHT, LID_HEIGHT);
      }
      const lidRect = svgClipPathList[1].querySelector<SVGRectElement>('rect');
      if (lidRect) {
        updateRectAttributes(lidRect, WIDTH, LID_HEIGHT);
      }
    }

    return resultDom;
  }

  override position(metrics: UiMetrics, savedPositions: Blockly.utils.Rect[]): void {
    super.position(metrics, savedPositions);

    const svgGroup = document.querySelector('.blocklyTrash');
    if (svgGroup) {
      const transform = svgGroup.getAttribute('transform');
      if (transform) {
        const translate = transform.match(/translate\(([^,]+),\s*([^)]+)\)/);
        if (translate) {
          const x = parseFloat(translate[1]);
          let y = parseFloat(translate[2]);
          y -= 20;
          svgGroup.setAttribute('transform', `translate(${x}, ${y})`);
        }
      }
    }
  }
}
