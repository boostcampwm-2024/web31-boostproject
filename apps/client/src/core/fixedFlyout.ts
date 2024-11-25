import * as Blockly from 'blockly/core';
import TabbedToolbox from './tabbedToolbox';

export default class FixedFlyout extends Blockly.VerticalFlyout {
  static registryName = 'FixedFlyout';

  /**
   * position 함수는 flyout의 위치를 계산하는 함수입니다.
   * flyout이 원래는 svg이기 때문에 flyout show함수가 호출될 때 position함수도 같이 호출되면서 flyout의 위치를 계산하게 됩니다.
   * flyout의 위치를 고정하기 위해 position 함수를 override 합니다.
   */

  override position(): void {
    if (!this.isVisible() || !this.targetWorkspace!.isVisible()) {
      return;
    }
    const metricsManager = this.targetWorkspace!.getMetricsManager();
    const targetWorkspaceViewMetrics = metricsManager.getViewMetrics();
    this.height_ = targetWorkspaceViewMetrics.height;

    const toolbox = this.targetWorkspace.getToolbox() as TabbedToolbox;

    const x = 0;
    const y = 0;

    if (!toolbox) {
      throw new Error('no toolbox');
    }

    const metrics = toolbox.getContentAreaMetrics();

    this.positionAt_(metrics.width, metrics.height - toolbox.getContentHeight(), x, y);
  }

  override hide(): void {
    return;
  }
}
