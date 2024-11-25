import * as Blockly from 'blockly/core';

import { TTabToolboxConfig, TTabsConfig } from '@/shared/types';

import Dom from './dom';
import FixedFlyout from './fixedFlyout';

export interface IContentAreaMetrics {
  width: number;
  height: number;
}

// TODO: prevent wheel action (scale up)

// @ts-expect-error Private field inheritance
export default class TabbedToolbox extends Blockly.Toolbox {
  private tabsConfig_: TTabsConfig | undefined;
  private currentTab_: string | undefined;

  private tabContainer_: HTMLDivElement | null = null;
  private contentsContainer_: HTMLDivElement | null = null;
  private contentArea_: HTMLDivElement | null = null;

  private flyout_: Blockly.IFlyout | null = null;

  constructor(workspace: Blockly.WorkspaceSvg) {
    super(workspace);
  }

  override init() {
    super.init();

    const flyout = this.getFlyout();

    if (!flyout) {
      throw new Error('flyout is null.');
    }

    if (!this.contentsContainer_) {
      throw new Error('contentsContainer_  is null.');
    }

    const contentArea = Dom.createElement<HTMLDivElement>('div', { class: 'contentArea' });
    contentArea.prepend(flyout.createDom('svg'));

    this.contentArea_ = contentArea;
    this.contentsContainer_.prepend(contentArea);
  }

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

  public setConfig(config: TTabToolboxConfig) {
    const flyout = this.getFlyout();

    if (!flyout) {
      throw new Error('flyout 없음');
    }

    this.tabsConfig_ = config.tabs;
    this.currentTab_ = config.defaultSelectedTab;
    this.initTabs_();
    flyout.position();
  }

  /**
   * flyout보다 이전에 삽입된 콘텐츠의 높이를 계산해서 반환한다.
   * @returns
   */

  public getContentHeight(): number {
    if (!this.contentArea_) {
      throw new Error('no Contentarea');
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

  public getContentAreaMetrics(): IContentAreaMetrics {
    if (!this.contentArea_) {
      throw new Error('No contentArea_');
    }

    const contentAreaClientRect = this.contentArea_.getBoundingClientRect();

    return {
      width: contentAreaClientRect.width,
      height: contentAreaClientRect.height,
    };
  }

  /**
   * ContentArea is a div that wraps the flyout element.
   * Adds an HTML element to ContentArea using the appendChild function.
   *
   * @param element - HTML element to be added to ContentArea
   *
   * @throws {Error} Throws an error if contentArea_ is null
   *
   * @example
   * ```typescript
   * const element = document.createElement('div');
   * element.textContent = 'text';
   * toolbox.addElementToContentArea(element);
   * ```
   */

  public addElementToContentArea(element: HTMLElement, prepend: boolean = false): void {
    if (!this.contentArea_) {
      throw new Error('contentArea_ is null');
    }
    if (prepend) {
      this.contentArea_.prepend(element);
    } else {
      this.contentArea_.appendChild(element);
    }
  }

  public clearContentArea() {
    if (!this.contentArea_) {
      throw new Error('contentArea is null');
    }
    this.contentArea_.innerHTML = '';
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
      throw new Error('No HtmlDiv or tabContainer.');
    }

    Object.entries(this.tabsConfig_!).forEach(([id, tabConfig]) => {
      const tabElement = this.createTab_(tabConfig.label, id);

      if (this.currentTab_ && this.currentTab_ === id) {
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

    this.currentTab_ = id;
    const tabConfig = this.tabsConfig_[id];

    if (this.flyout_) {
      this.flyout_.dispose();
    }

    this.flyout_ = this.createFlyoutByRegistry_(
      tabConfig.flyoutRegistryName || FixedFlyout.registryName
    );

    if (!this.contentArea_) {
      throw new Error('contentArea_ is null');
    }

    this.clearContentArea();

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
  background-color: #f9fafb; /* bg-gray-50 */
  padding: 0.75rem; /* py-3 */
  color: #e5e7eb; /* text-gray-200 */
}

.tabSelected {
  font-weight: 700; /* Text-bold-md */
  flex: 1;
  border-top-left-radius: 0.5rem; /* rounded-t-lg */
  border-top-right-radius: 0.5rem; /* rounded-t-lg */
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
