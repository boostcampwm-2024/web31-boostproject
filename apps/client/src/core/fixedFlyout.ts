import * as Blockly from 'blockly/core';
import { FlyoutItem } from 'blockly/core/flyout_base';

export default class FixedFlyout extends Blockly.VerticalFlyout {
  private FIXED_POSITION: boolean;

  constructor(workspaceOptions: Blockly.Options) {
    super(workspaceOptions);
    this.FIXED_POSITION = true;
    this.autoClose = false;
    this.width_ = 300;
    console.log(this);
  }

  position(): void {
    super.position();

    console.log('position');
    const x = 180; // 원하는 x 좌표
    const y = 60; // 원하는 y 좌표
    if (this.svgGroup_) {
      this.svgGroup_.style.transform = `translate(${x}px, ${y}px)`;
    }

    console.log('Flyout position set to', { x, y });
  }

  // hide() {
  //   if (this.AUTO_CLOSE) {
  //     super.hide();
  //   }
  // }

  layout_(contents: FlyoutItem[], gaps: number[]): void {
    super.layout_(contents, gaps); // 기존 레이아웃 로직 유지

    let cursorY = this.MARGIN;
    let cursorX = this.RTL ? this.getWidth() - this.MARGIN : this.MARGIN;

    contents.forEach((item, index) => {
      if (item.type === 'block') {
        const block = item.block;
        // 상대적 위치 계산하여 블록 위치 설정
        const blockCoordinate = new Blockly.utils.Coordinate(cursorX, cursorY);
        block!.moveTo(blockCoordinate);

        cursorY += block!.height + gaps[index];
      }
    });
  }
}

// layout에서 위치 계산함
// toolboxPosition
