import * as Blockly from 'blockly/core';
import TabbedToolbox from './tabbedToolbox';

/**
 * FixedFlyout 클래스는 Blockly의 VerticalFlyout을 확장하여 고정된 위치에 Flyout을 표시하는 클래스입니다.
 *
 * @description
 * 기본적으로 Blockly의 Flyout은 SVG 요소로, show 함수 호출 시 position 함수가 자동으로 호출되어
 * Flyout의 위치가 동적으로 계산됩니다. 이 클래스는 position 함수를 오버라이드하여 Flyout의 위치를
 * 고정된 위치에 표시할 수 있게 합니다.
 */
export default class FixedFlyout extends Blockly.VerticalFlyout {
  static registryName = 'FixedFlyout';

  /**
   * Flyout의 위치를 계산하고 설정합니다.
   *
   * @description
   * 이 메서드는 다음과 같은 순서로 동작합니다:
   * 1. Flyout과 Workspace의 가시성을 확인합니다.
   * 2. 워크스페이스의 메트릭스를 가져와 Flyout의 높이를 설정합니다. (이 동작은 fixedFlyout에서 필수적인 동작은 아니지만 기본 flyout 동작이기 때문에 그대로 수행합니다.)
   * 3. Toolbox의 ContentArea 메트릭스를 사용하여 Flyout의 최종 위치를 계산합니다.
   *
   * @throws {Error} 워크스페이스가 초기화되지 않았거나 보이지 않는 경우
   * @throws {Error} Toolbox가 없거나 초기화되지 않은 경우
   * @override
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

  /**
   * Flyout을 숨기는 기능을 비활성화합니다.
   *
   * @description
   * 기본 Blockly Flyout은 특정 조건에서 자동으로 숨겨지지만,
   * FixedFlyout은 항상 고정된 위치에 표시되어야 하므로 hide 메서드를 오버라이드하여
   * 아무 동작도 하지 않도록 합니다.
   *
   * @override
   */
  override hide(): void {
    return;
  }
}
