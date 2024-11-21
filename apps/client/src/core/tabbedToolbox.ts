import { TTabToolboxConfig, TTabs } from '@/shared/types';
import * as Blockly from 'blockly/core';

export default class TabbedToolbox extends Blockly.Toolbox {
  private customFlyout_: HTMLDivElement | null;
  private tabContainer_: HTMLDivElement | null;
  private tabs_: TTabs | undefined;
  private currentTab_: string | undefined;

  constructor(workspace: Blockly.WorkspaceSvg) {
    super(workspace);
    this.customFlyout_ = null;
    this.tabContainer_ = null;
  }

  setConfig(config: TTabToolboxConfig) {
    this.tabs_ = config.tabs;
    this.currentTab_ = config.defaultSelectedTab;
    this.initTabs_();
  }

  init() {
    const workspace = this.workspace_;
    const svg = workspace.getParentSvg();

    this.customFlyout_ = this.createFlyout_();

    this.HtmlDiv = this.createDom_(this.workspace_);
    Blockly.utils.dom.insertAfter(this.customFlyout_.createDom('svg'), svg);
    this.setVisible(true);
    this.flyout_.init(workspace);

    this.render(this.toolboxDef_);
    const themeManager = workspace.getThemeManager();
    themeManager.subscribe(this.HtmlDiv, 'toolboxBackgroundColour', 'background-color');
    themeManager.subscribe(this.HtmlDiv, 'toolboxForegroundColour', 'color');
    this.workspace_.getComponentManager().addComponent({
      component: this,
      weight: ComponentManager.ComponentWeight.TOOLBOX_WEIGHT,
      capabilities: [
        ComponentManager.Capability.AUTOHIDEABLE,
        ComponentManager.Capability.DELETE_AREA,
        ComponentManager.Capability.DRAG_TARGET,
      ],
    });
  }

  createFlyout_(): HTMLDivElement {
    let FlyoutClass = null;
    FlyoutClass = Blockly.registry.getClassFromOptions(
      Blockly.registry.Type.FLYOUTS_VERTICAL_TOOLBOX,
      this.workspace_.options,
      true
    );
    return new FlyoutClass!(
      new Blockly.Options({
        parentWorkspace: this.workspace_,
        rtl: this.workspace_.RTL,
        oneBasedIndex: this.workspace_.options.oneBasedIndex,
        horizontalLayout: this.workspace_.horizontalLayout,
        renderer: this.workspace_.options.renderer,
        rendererOverrides: this.workspace_.options.rendererOverrides,
        move: {
          scrollbars: true,
        },
      } as Blockly.BlocklyOptions)
    );
  }

  private initTabs_() {
    if (!this.HtmlDiv) {
      return;
    }

    this.tabContainer_ = document.createElement('div');
    this.tabContainer_.className = 'toolboxTabs';

    Object.entries(this.tabs_!).forEach(([id, tabConfig]) => {
      const tabElement = this.createTab_(tabConfig.label, id);

      if (this.currentTab_ && this.currentTab_ === id) {
        this.selectTab_(id, tabElement);
      }

      tabElement.addEventListener('click', () => this.selectTab_(id, tabElement));
      this.tabContainer_!.appendChild(tabElement);
    });

    this.HtmlDiv.prepend(this.tabContainer_);
  }

  private createTab_(label: string, id: string) {
    const tab = document.createElement('div');
    tab.className = 'toolboxTab';
    tab.dataset.id = id.toString();
    tab.appendChild(this.createLabel_(label));
    return tab;
  }

  private createLabel_(label: string) {
    const labelSpan = document.createElement('span');
    labelSpan.className = 'toolboxTabLabel';
    labelSpan.textContent = label;
    return labelSpan;
  }

  private selectTab_(id: string, tabElement: HTMLDivElement) {
    if (!this.workspace_ || !this.tabs_) {
      return;
    }
    this.currentTab_ = id;
    this.workspace_.updateToolbox(this.tabs_[id].toolboxConfig);
    Array.from(this.tabContainer_!.children).forEach((child) => {
      child.classList.remove('tabSelected');
    });
    tabElement.classList.add('tabSelected');
    this.setSelectedItem(this.getToolboxItems()![0]);
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
`);

const HTML_DIV_FLYOUT_NAME = 'htmlDivFlyout';

enum FlyoutItemType {
  BLOCK = 'block',
  LABEL = 'label',
  INPUT = 'input',
  BUTTON = 'button',
}

export interface FlyoutItem {
  type: FlyoutItemType;
  item: Blockly.BlockSvg | HTMLElement | undefined;
}

export interface IHtmlDivFlyout extends Blockly.IRegistrable {
  createDom(): HTMLDivElement;
  init(targetToolbox: Blockly.Toolbox): void;
  dispose(): void;
  getToolbox(): Blockly.Toolbox;
  getContents(): FlyoutItem[];
  isScrollable(): boolean;
  scrollToStart(): void;
}

export class HtmlDivFlyout implements IHtmlDivFlyout {
  private htmlDiv_: HTMLDivElement | null;
  private targetToolbox_: Blockly.Toolbox | null;

  constructor() {
    this.htmlDiv_ = null;
    this.targetToolbox_ = null;
  }

  createDom(): HTMLDivElement {
    this.htmlDiv_ = Dom.createElement<HTMLDivElement>('div', { class: 'htmlDivFlyout' });
    return this.htmlDiv_;
  }

  init(targetToolbox: Blockly.Toolbox): void {
    throw new Error('Method not implemented.');
  }
  dispose(): void {
    throw new Error('Method not implemented.');
  }
  getToolbox(): Blockly.Toolbox {
    throw new Error('Method not implemented.');
  }
  getContents(): FlyoutItem[] {
    throw new Error('Method not implemented.');
  }
  isScrollable(): boolean {
    throw new Error('Method not implemented.');
  }
  scrollToStart(): void {
    throw new Error('Method not implemented.');
  }
}

export class Dom {
  static createElement<T extends HTMLElement>(
    name: string,
    attrs: { [key: string]: string | number },
    parent?: Element | null
  ): T {
    const element = document.createElement(name) as T;
    for (const key in attrs) {
      element.setAttribute(key, `${attrs[key]}`);
    }
    if (parent) {
      parent.appendChild(element);
    }
    return element;
  }
}
