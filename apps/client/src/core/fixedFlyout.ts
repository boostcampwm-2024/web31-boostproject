import * as Blockly from 'blockly/core';
import TabbedToolbox from './tabbedToolbox';

export default class FixedFlyout extends Blockly.VerticalFlyout {
  static registryName = 'FixedFlyout';

  position(): void {
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

  hide(): void {
    return;
  }
}
