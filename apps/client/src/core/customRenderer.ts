import * as Blockly from 'blockly/core';
import { CustomConstantProvider } from './customConstantProvider';
import { CustomRenderInfo } from './customRenderInfo';

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
