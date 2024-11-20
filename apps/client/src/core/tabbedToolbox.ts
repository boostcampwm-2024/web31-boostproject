import { TTabToolboxConfig, TTabs } from '@/shared/types';
import * as Blockly from 'blockly/core';

export default class TabbedToolbox extends Blockly.Toolbox {
  private tabContainer_: HTMLDivElement | null;
  private tabs_: TTabs | undefined;
  private currentTab_: string | undefined;

  constructor(workspace: Blockly.WorkspaceSvg) {
    super(workspace);
    this.tabContainer_ = null;
  }

  setConfig(config: TTabToolboxConfig) {
    this.tabs_ = config.tabs;
    this.currentTab_ = config.defaultSelectedTab;
    this.initTabs_();
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
