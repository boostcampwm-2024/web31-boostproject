import * as Blockly from 'blockly/core';
import { CustomConstantProvider } from './customConstantProvider';
import { CustomRenderInfo } from './customRenderInfo';

// 커스텀한 constant 및 renderInfo를 custom renderer에 등록시켜 블록 생성할 시 사용합니다.
export class CustomRenderer extends Blockly.zelos.Renderer {
  constructor(name: string) {
    super(name);
  }

  protected override makeConstants_(): CustomConstantProvider {
    return new CustomConstantProvider();
  }

  protected override makeRenderInfo_(block: Blockly.BlockSvg): Blockly.zelos.RenderInfo {
    return new CustomRenderInfo(this, block);
  }
}
