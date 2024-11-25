import * as Blockly from 'blockly/core';
import TabbedToolbox from './tabbedToolbox';

export default class FixedFlyout extends Blockly.VerticalFlyout {
  static registryName = 'FixedFlyout';

  /**
   * position 함수는 flyout의 위치를 계산하는 함수다.
   * flyout이 원래는 svg이기 때문에 flyout show함수가 호출될 때 position함수도 같이 호출되면서 flyout의 위치를 계산하게 된다.
   * flyout의 위치를 고정하기 위해 Blockly.VerticalFlyout의 position 함수를 override 한다.
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

    // flyout은 기본적으로 contentArea만큼의 크기를 차지하지만,
    // contentArea에 element를 추가했다면 flyout의 높이는 element만큼 줄어든다.

    const metrics = toolbox.getContentAreaMetrics();

    this.positionAt_(metrics.width, metrics.height - toolbox.getContentHeight(), x, y);
  }

  override hide(): void {
    return;
  }
}
