import * as Blockly from 'blockly/core';

export default class FixedFlyout extends Blockly.VerticalFlyout {
  private FIXED_POSITION: boolean;

  constructor(workspaceOptions: Blockly.Options) {
    super(workspaceOptions);
    this.FIXED_POSITION = true;
    this.autoClose = false;
    this.width_ = 300;
    console.log(this);
  }
  createDom(
    tagName: string | Blockly.utils.Svg<SVGSVGElement> | Blockly.utils.Svg<SVGGElement>
  ): SVGElement {
    this.svgGroup_ = document.createElement('div');
    this.svgGroup_ = Blockly.utils.dom.createSvgElement(tagName, {
      class: 'blocklyFlyout',
    });
    this.svgGroup_ = Blockly.utils.dom.createSvgElement(tagName, {
      class: 'blocklyFlyout',
    });
    this.svgBackground_ = Blockly.utils.dom.createSvgElement(
      Blockly.utils.Svg.PATH,
      { class: 'blocklyFlyoutBackground' },
      this.svgGroup_
    );
    this.svgGroup_.appendChild(this.workspace_.createDom());
    this.workspace_
      .getThemeManager()
      .subscribe(this.svgBackground_, 'flyoutBackgroundColour', 'fill');
    this.workspace_
      .getThemeManager()
      .subscribe(this.svgBackground_, 'flyoutOpacity', 'fill-opacity');
    return this.svgGroup_;
  }

  // position(): void {
  //   super.position();

  //   //  console.log('position');
  //   const x = 180; // 원하는 x 좌표
  //   const y = 60; // 원하는 y 좌표
  //   if (this.svgGroup_) {
  //     this.svgGroup_.style.transform = `translate(${x}px, ${y}px)`;
  //   }

  //   // console.log('Flyout position set to', { x, y });
  // }

  // // hide() {
  // //   if (this.AUTO_CLOSE) {
  // //     super.hide();
  // //   }
  // // }

  // layout_(contents: FlyoutItem[], gaps: number[]): void {
  //   super.layout_(contents, gaps); // 기존 레이아웃 로직 유지

  //   let cursorY = this.MARGIN;
  //   let cursorX = this.RTL ? this.getWidth() - this.MARGIN : this.MARGIN;

  //   contents.forEach((item, index) => {
  //     console.log('item', item);
  //     if (item.type === 'block') {
  //       const block = item.block;
  //       // 상대적 위치 계산하여 블록 위치 설정
  //       const blockCoordinate = new Blockly.utils.Coordinate(cursorX, cursorY);
  //       block!.moveTo(blockCoordinate);

  //       cursorY += block!.height + gaps[index];
  //     }
  //   });
  // }
}

// layout에서 위치 계산함
// toolboxPosition
