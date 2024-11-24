import * as Blockly from 'blockly/core';

import {
  BlockInfo,
  ButtonInfo,
  DynamicCategoryInfo,
  FlyoutItemInfo,
  LabelInfo,
  SeparatorInfo,
  StaticCategoryInfo,
} from 'blockly/core/utils/toolbox';
import { TTabToolboxConfig, TTabs } from '@/shared/types';

import Dom from './dom';

export default class TabbedToolbox extends Blockly.Toolbox {
  private tabs_: TTabs | undefined;
  private currentTab_: string | undefined;

  private tabContainer_: HTMLDivElement | null;
  private contentsContainer_: HTMLDivElement | null;

  private contentArea_: ContentArea | null;

  constructor(workspace: Blockly.WorkspaceSvg) {
    super(workspace);
    this.contentArea_ = null;
    this.tabContainer_ = null;
    this.contentsContainer_ = null;
  }

  setConfig(config: TTabToolboxConfig) {
    this.tabs_ = config.tabs;
    this.currentTab_ = config.defaultSelectedTab;
    this.initTabs_();
  }

  init() {
    super.init();
    this.HtmlDiv = this.createDom_(this.workspace_);

    this.contentArea_ = this.createContentArea_();

    if (!this.contentsContainer_ || !this.contentArea_) {
      throw new Error('contentsContainer_ or contentArea_ is null.');
    }

    this.contentsContainer_.prepend(this.contentArea_.createDom());
    this.setVisible(true);
    this.contentArea_.init(this);
    this.render(this.toolboxDef_);
  }

  createDom_(workspace: Blockly.WorkspaceSvg): HTMLDivElement {
    const svg = workspace.getParentSvg();
    const container = this.createContainer_();

    svg.parentNode!.insertBefore(container, svg);

    this.tabContainer_ = this.initTabContainer_();
    container.appendChild(this.tabContainer_);

    this.contentsContainer_ = this.initContentContainer_();
    container.appendChild(this.contentsContainer_);

    this.contentsDiv_ = this.createContentsContainer_();
    // this.contentsDiv_.tabIndex = 0;
    this.contentsContainer_.appendChild(this.contentsDiv_);

    this.attachEvents_(container, this.contentsDiv_);
    return container;
  }

  updateContentArea_(
    oldItem: Blockly.ISelectableToolboxItem | null,
    newItem: Blockly.ISelectableToolboxItem | null
  ) {
    if (
      newItem &&
      (oldItem !== newItem || newItem.isCollapsible()) &&
      newItem.getContents().length
    ) {
      //  this.contentArea_!.update(newItem.getContents());
      this.contentArea_!.scrollToStart();
    }
  }

  createContentArea_(): ContentArea {
    return new ContentArea();
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

    Object.entries(this.tabs_!).forEach(([id, tabConfig]) => {
      const tabElement = this.createTab_(tabConfig.label, id);

      if (this.currentTab_ && this.currentTab_ === id) {
        this.selectTab_(id, tabElement);
      }

      tabElement.addEventListener('click', () => this.selectTab_(id, tabElement));
      this.tabContainer_!.appendChild(tabElement);
    });
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

.contentContainer {
  display: flex;
  width: 100%;
  height: 100%;
}

.contentArea {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background-color: white;
}
`);

enum ContentAreaItemType {
  BLOCK = 'block',
  LABEL = 'label',
  INPUT = 'input',
  BUTTON = 'button',
}

export type ContentAreaItemInfo =
  | BlockInfo
  | SeparatorInfo
  | ButtonInfo
  | LabelInfo
  | DynamicCategoryInfo;

export type ToolboxItemInfo = FlyoutItemInfo | StaticCategoryInfo;

export interface ToolboxInfo {
  kind?: string;
  contents: ToolboxItemInfo[];
}

export type FlyoutItemInfoArray = FlyoutItemInfo[];

export type FlyoutDefinition = FlyoutItemInfoArray | NodeList | ToolboxInfo | Node[];

export interface ContentAreaItem {
  type: ContentAreaItemType;
  item: Blockly.BlockSvg | HTMLElement | undefined;
}

export interface IContentArea extends Blockly.IRegistrable {
  createDom(): HTMLDivElement;
  init(targetToolbox: TabbedToolbox): void;
  dispose(): void;
  getToolbox(): TabbedToolbox | null;
  getContents(): ContentAreaItem[];
  setContents(contents: ContentAreaItem[]): void;
  createContentAreaInfo(contentAreaDef: FlyoutDefinition): ContentAreaItem[];
  isScrollable(): boolean;
  scrollToStart(): void;
}

export class ContentArea implements IContentArea {
  private htmlDiv_: HTMLDivElement | null;
  private targetToolbox_: TabbedToolbox | null;
  private contents_: ContentAreaItem[];

  constructor() {
    this.htmlDiv_ = null;
    this.targetToolbox_ = null;
    this.contents_ = [];
  }
  createContentAreaInfo(contentAreaDef: FlyoutDefinition): ContentAreaItem[] {
    console.log(contentAreaDef);
    throw new Error('Method not implemented.');
  }

  createDom(): HTMLDivElement {
    this.htmlDiv_ = Dom.createElement<HTMLDivElement>('div', { class: 'contentArea' });
    return this.htmlDiv_;
  }

  init(targetToolbox: TabbedToolbox): void {
    this.targetToolbox_ = targetToolbox;
  }

  getToolbox(): TabbedToolbox | null {
    return this.targetToolbox_;
  }

  getContents(): ContentAreaItem[] {
    return this.contents_;
  }

  setContents(contents: ContentAreaItem[]): void {
    this.contents_ = contents;
  }

  update(contentAreaDef: FlyoutDefinition) {
    console.log(contentAreaDef);
    /**
     * kind: "block"
     * type: "html"
     *
     */
    //this.clearOldBlocks();
    if (!this.htmlDiv_) {
      throw new Error('htmlDiv is null');
    }

    const block = Dom.createElement<HTMLDivElement>('div', { class: 'block' });
    block.innerHTML = '<li>아이템</li><li>아이템</li><li>아이템</li>';
    this.htmlDiv_.appendChild(block);
    // if (typeof flyoutDef === 'string') {
    //   flyoutDef = this.getDynamicCategoryContents(flyoutDef);
    // }

    /**
     * { type : 'block', items: [] }
     */

    // for (const info in contentAreaDef) {
    //   this.createFlyoutBlock(info as BlockInfo);
    // }
    // const flyoutInfo = this.createContentAreaInfo(contentAreaDef);

    // this.setContents(flyoutInfo.contents);

    // this.layout_(flyoutInfo.contents);

    //this.emptyRecycledBlocks();
  }

  // createFlyoutBlock(blockInfo: BlockInfo) {
  //   return blockInfo as Blockly.BlockSvg;
  // }

  // layout_(contents: ContentAreaItem[]) {}

  // createContentAreaInfo(contentAreaDef: FlyoutDefinition): ContentAreaItem[] {
  //   const contents: ContentAreaItem[] = [];
  //   for (const info in contentAreaDef) {
  //     this.createFlyoutBlock(info as BlockInfo);
  //   }
  //   return contents;
  // }

  isScrollable(): boolean {
    throw new Error('Method not implemented.');
  }

  scrollToStart(): void {
    console.log('Method not implemented.');
  }

  dispose(): void {
    throw new Error('Method not implemented.');
  }
}
