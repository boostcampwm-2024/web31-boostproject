import * as Blockly from 'blockly/core';

import { TTabToolboxConfig, TTabsConfig } from '@/shared/types';

import Dom from './dom';
import FixedFlyout from './fixedFlyout';

export interface IContentAreaMetrics {
  width: number;
  height: number;
}

// @ts-expect-error Private field inheritance
export default class TabbedToolbox extends Blockly.Toolbox {
  private tabsConfig_: TTabsConfig | undefined;
  private currentTabId_: string | undefined;

  private tabContainer_: HTMLDivElement | null = null;
  private contentsContainer_: HTMLDivElement | null = null;
  private contentArea_: HTMLDivElement | null = null;
  private flyout_: Blockly.IFlyout | null = null;

  constructor(workspace: Blockly.WorkspaceSvg) {
    super(workspace);
  }

  /**
   * Toolbox를 초기화하고 initInternal_에서 Flyout과 ContentArea를 추가합니다.
   * @throws {Error} flyout이 초기화되지 않았을 경우
   * @throws {Error} ContentsContainer가 초기화되지 않았을 경우
   * @override
   */
  override init() {
    super.init();

    const flyout = this.getFlyout();

    if (!flyout) {
      throw new Error('Flyout이 초기화되지 않았습니다. Toolbox 생성 시 Flyout 설정이 필요합니다.');
    }

    if (!this.contentsContainer_) {
      throw new Error('contentsContainer가 초기화되지 않았습니다. DOM 요소 생성이 필요합니다.');
    }

    const contentArea = Dom.createElement<HTMLDivElement>('div', { class: 'contentArea' });
    contentArea.prepend(flyout.createDom('svg'));

    this.contentArea_ = contentArea;
    this.contentsContainer_.prepend(contentArea);
  }

  /**
   * Toolbox의 DOM 요소들을 생성합니다.
   * @param workspace - 이 Toolbox가 속한 Blockly workspace
   * @returns Toolbox의 메인 Container Div
   * @override
   */
  override createDom_(workspace: Blockly.WorkspaceSvg): HTMLDivElement {
    const svg = workspace.getParentSvg();
    const container = this.createContainer_();

    svg.parentNode!.insertBefore(container, svg);

    this.tabContainer_ = this.initTabContainer_();
    container.appendChild(this.tabContainer_);

    this.contentsContainer_ = this.initContentContainer_();
    container.appendChild(this.contentsContainer_);

    this.contentsDiv_ = this.createContentsContainer_();
    this.contentsDiv_.tabIndex = 0; // 기존 createDom_에 있는 코드 그대로 유지
    this.contentsContainer_.appendChild(this.contentsDiv_);

    this.attachEvents_(container, this.contentsDiv_);
    return container;
  }

  /**
   * TabbedToolbox의 특정 탭을 클릭한 것처럼 동작합니다.
   * @param id - 클릭할 탭의 ID
   */

  public clickTab(id: string) {
    const tabElement = Array.from(this.tabContainer_!.children).find(
      (child) => (child as HTMLElement).dataset.id === id
    ) as HTMLDivElement;

    if (tabElement) {
      this.selectTab_(id, tabElement);
    }
  }

  /**
   * TabbedToolbox에 Tab과 관련된 설정을 추가하고 Tab을 초기화합니다.
   * @param config - Tab에 대한 정보
   * @throws {Error} Flyout이 초기화되지 않았을 경우
   */

  public setConfig(tabToolboxConfig: TTabToolboxConfig) {
    const flyout = this.getFlyout();

    if (!flyout) {
      throw new Error(
        'Flyout이 초기화되지 않았습니다. tab을 생성한 이후 Flyout의 위치를 변경하기 위해 Flyout이 초기화되어 있어야 합니다.'
      );
    }

    this.tabsConfig_ = tabToolboxConfig.tabs;
    this.currentTabId_ = tabToolboxConfig.defaultSelectedTab;
    this.initTabs_();
    flyout.position();
  }

  /**
   * Flyout보다 먼저 삽입된 콘텐츠들의 총 높이를 계산하여 반환합니다.
   *
   * @description
   * Flyout은 기본적으로 ContentArea의 전체 높이를 차지하지만, ContentArea에 다른 요소들이 추가되면, Flyout은 그만큼 높이가 줄어들어야 합니다.
   * 이 함수는 ContentArea에 추가된 요소들의 높이를 측정하여 Flyout의 높이를 적절히 조절하는데 사용됩니다.
   *
   * @returns 콘텐츠의 총 높이
   * @throws {Error} ContentArea가 초기화되지 않았을 경우
   */

  public getContentHeight(): number {
    if (!this.contentArea_) {
      throw new Error(
        'ContentArea가 초기화되지 않았습니다. 높이 계산을 위해서는 ContentArea가 초기화되어야 합니다.'
      );
    }

    const parentRect = this.contentArea_.getBoundingClientRect();
    const children = this.contentArea_.children;

    let maxBottom = 0;

    for (const child of children) {
      if (child.classList.contains('blocklyFlyout')) {
        break;
      }

      const rect = child.getBoundingClientRect();
      const bottom = rect.bottom - parentRect.top;

      const computedStyle = window.getComputedStyle(child);
      const marginBottom = parseFloat(computedStyle.marginBottom);

      maxBottom = Math.max(maxBottom, bottom + marginBottom);
    }

    return maxBottom;
  }

  /**
   * ContentArea의 너비와 높이를 객체로 반환합니다.
   *
   * @description
   * Flyout은 기본적으로 ContentArea의 전체 높이를 차지합니다.
   * Flyout의 크기를 ContentArea에 맞춰 계산할 때 필요합니다.
   *
   * @returns ContentArea의 너비와 높이를 포함하는 IContentAreaMetrics 객체.
   * @throws {Error} ContentArea가 초기화되지 않았을 경우
   */

  public getContentAreaMetrics(): IContentAreaMetrics {
    if (!this.contentArea_) {
      throw new Error(
        'ContentArea가 초기화되지 않았습니다. ContentArea의 width와 height를 계산하기 위해 ContentArea가 초기화되어야 합니다.'
      );
    }

    const contentAreaClientRect = this.contentArea_.getBoundingClientRect();

    return {
      width: contentAreaClientRect.width,
      height: contentAreaClientRect.height,
    };
  }

  /**
   * ContentArea에 HTML 요소를 추가합니다.
   *
   * @description
   * ContentArea는 flyout 요소를 감싸는 div입니다.
   * 이 함수는 기본적으로 appendChild를 사용하여 ContentArea에 새로운 HTML 요소를 추가합니다.
   *
   * @param element - ContentArea에 추가할 HTML 요소
   * @param prepend - true일 경우 요소를 ContentArea의 맨 앞에 추가합니다. 기본값은 false입니다.
   *
   * @throws {Error} contentArea가 초기화되지 않았을 경우
   *
   * @example
   * ```typescript
   * const element = document.createElement('div');
   * element.textContent = '텍스트';
   *
   * // ContentArea 끝에 요소 추가
   * toolbox.addElementToContentArea(element);
   *
   * // ContentArea 맨 앞에 요소 추가
   * toolbox.addElementToContentArea(element, true);
   * ```
   */

  public addElementToContentArea(element: HTMLElement, prepend: boolean = false): void {
    if (!this.contentArea_) {
      throw new Error('ContentArea가 초기화되지 않았습니다.');
    }
    if (prepend) {
      this.contentArea_.prepend(element);
    } else {
      this.contentArea_.appendChild(element);
    }
  }

  private initTabContainer_() {
    return Dom.createElement<HTMLDivElement>('div', {
      class: 'toolboxTabs',
    });
  }

  private initContentContainer_() {
    return Dom.createElement<HTMLDivElement>('div', {
      class: 'contentContainer',
    });
  }

  private initTabs_() {
    if (!this.HtmlDiv || !this.tabContainer_) {
      throw new Error('HtmlDiv나 ContentArea가 초기화되지 않았습니다.');
    }

    Object.entries(this.tabsConfig_!).forEach(([id, tabConfig]) => {
      const tabElement = this.createTab_(tabConfig.label, id);

      if (this.currentTabId_ && this.currentTabId_ === id) {
        this.selectTab_(id, tabElement);
      }

      tabElement.addEventListener('click', () => this.selectTab_(id, tabElement));
      this.tabContainer_!.appendChild(tabElement);
    });
  }

  private createTab_(label: string, id: string) {
    const tab = Dom.createElement<HTMLDivElement>('div', {
      class: 'toolboxTab',
    });
    tab.dataset.id = id.toString();
    tab.appendChild(this.createLabel_(label));
    return tab;
  }

  private createLabel_(label: string) {
    const labelSpan = Dom.createElement<HTMLDivElement>('span', {
      class: 'toolboxTabLabel',
    });
    labelSpan.textContent = label;
    return labelSpan;
  }

  private selectTab_(id: string, tabElement: HTMLDivElement) {
    if (!this.workspace_ || !this.tabsConfig_) {
      return;
    }

    this.currentTabId_ = id;
    const tabConfig = this.tabsConfig_[id];

    if (this.flyout_) {
      this.flyout_.dispose();
    }

    this.flyout_ = this.createFlyoutByRegistry_(
      tabConfig.flyoutRegistryName || FixedFlyout.registryName
    );

    if (!this.contentArea_) {
      throw new Error('ContentArea가 초기화되지 않았습니다.');
    }

    this.clearContentArea_();

    this.contentArea_.prepend(this.flyout_.createDom('svg'));
    this.flyout_.init(this.workspace_);

    this.workspace_.updateToolbox(tabConfig.toolboxConfig);

    Array.from(this.tabContainer_!.children).forEach((child) => {
      child.classList.remove('tabSelected');
    });

    tabElement.classList.add('tabSelected');

    if (tabConfig.toolboxConfig.kind === 'categoryToolbox' && this.getToolboxItems().length !== 0) {
      this.setSelectedItem(this.getToolboxItems()![0]);
    }
  }

  private createFlyoutByRegistry_(flyoutRegistryName: string): Blockly.IFlyout {
    const workspace = this.workspace_;
    const workspaceOptions = new Blockly.Options({
      parentWorkspace: workspace,
      rtl: workspace.RTL,
      oneBasedIndex: workspace.options.oneBasedIndex,
      horizontalLayout: workspace.horizontalLayout,
      renderer: workspace.options.renderer,
      rendererOverrides: workspace.options.rendererOverrides,
      move: {
        scrollbars: true,
      },
    } as Blockly.BlocklyOptions);

    workspaceOptions.toolboxPosition = workspace.options.toolboxPosition;

    const FlyoutClass = Blockly.registry.getClass(
      Blockly.registry.Type.FLYOUTS_VERTICAL_TOOLBOX,
      flyoutRegistryName
    );

    return new FlyoutClass!(workspaceOptions);
  }

  private clearContentArea_() {
    if (!this.contentArea_) {
      throw new Error('ContentArea가 초기화되지 않았습니다.');
    }
    this.contentArea_.innerHTML = '';
  }

  // eslint-disable-next-line no-unused-vars
  protected onClick_(e: PointerEvent): void {}
}

Blockly.Css.register(`
.toolboxTabs {
  display: flex;
  width: 24rem; /* 96 * 0.25rem */
}

.toolboxTab {
  font-weight: 600; /* Text-semibold-md */
  display: flex;
  flex: 1;
  cursor: pointer;
  justify-content: center;
  border-top-left-radius: 0.5rem; /* rounded-t-lg */
  border-top-right-radius: 0.5rem; /* rounded-t-lg */
  background: linear-gradient(0deg, rgb(210 218 231) 0%, #eaeff6 30%);
  padding: 0.75rem; /* py-3 */
  color: #56687A; /* text-gray-400 */
}

.tabSelected {
  font-weight: 700; /* Text-bold-md */
  flex: 1;
  border-top-left-radius: 0.5rem; /* rounded-t-lg */
  border-top-right-radius: 0.5rem; /* rounded-t-lg */
  background: transparent;
  background-color: #3b82f6; /* bg-blue-500 */
  padding: 0.75rem; /* py-3 */
  color: #ffffff; /* text-white */
}

.contentContainer {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: white;
}

.contentArea {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
`);
