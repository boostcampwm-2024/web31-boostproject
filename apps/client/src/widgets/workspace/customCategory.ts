import * as Blockly from 'blockly/core';
import { CategoryInfo } from 'blockly/core/utils/toolbox';
import { IToolbox } from 'blockly';

const CATEGORY_ICONS: Record<string, string> = {
  컨테이너:
    'M11.5 21.725V12.575L3.5 7.95V15.975C3.5 16.3417 3.5875 16.675 3.7625 16.975C3.9375 17.275 4.18333 17.5167 4.5 17.7L11.5 21.725ZM13.5 21.725L20.5 17.7C20.8167 17.5167 21.0625 17.275 21.2375 16.975C21.4125 16.675 21.5 16.3417 21.5 15.975V7.95L13.5 12.575V21.725ZM17.475 7.975L20.425 6.25L13.5 2.275C13.1833 2.09167 12.85 2 12.5 2C12.15 2 11.8167 2.09167 11.5 2.275L9.525 3.4L17.475 7.975ZM12.5 10.85L15.475 9.15L7.55 4.55L4.55 6.275L12.5 10.85Z',
  텍스트:
    'M17.5 15C17.2167 15 16.9792 14.9042 16.7875 14.7125C16.5958 14.5208 16.5 14.2833 16.5 14V10C16.5 9.71667 16.5958 9.47917 16.7875 9.2875C16.9792 9.09583 17.2167 9 17.5 9H20.5C20.7833 9 21.0208 9.09583 21.2125 9.2875C21.4042 9.47917 21.5 9.71667 21.5 10V11H20V10.5H18V13.5H20V13H21.5V14C21.5 14.2833 21.4042 14.5208 21.2125 14.7125C21.0208 14.9042 20.7833 15 20.5 15H17.5ZM10 15V9H14C14.2833 9 14.5208 9.09583 14.7125 9.2875C14.9042 9.47917 15 9.71667 15 10V11C15 11.2833 14.9042 11.5208 14.7125 11.7125C14.5208 11.9042 14.2833 12 14 12C14.2833 12 14.5208 12.0958 14.7125 12.2875C14.9042 12.4792 15 12.7167 15 13V14C15 14.2833 14.9042 14.5208 14.7125 14.7125C14.5208 14.9042 14.2833 15 14 15H10ZM11.5 11.25H13.5V10.5H11.5V11.25ZM11.5 13.5H13.5V12.75H11.5V13.5ZM3.5 15V10C3.5 9.71667 3.59583 9.47917 3.7875 9.2875C3.97917 9.09583 4.21667 9 4.5 9H7.5C7.78333 9 8.02083 9.09583 8.2125 9.2875C8.40417 9.47917 8.5 9.71667 8.5 10V15H7V13.5H5V15H3.5ZM5 12H7V10.5H5V12Z',
  폼: 'M12.5 4.25C12.7167 4.25 12.8958 4.17917 13.0375 4.0375C13.1792 3.89583 13.25 3.71667 13.25 3.5C13.25 3.28333 13.1792 3.10417 13.0375 2.9625C12.8958 2.82083 12.7167 2.75 12.5 2.75C12.2833 2.75 12.1042 2.82083 11.9625 2.9625C11.8208 3.10417 11.75 3.28333 11.75 3.5C11.75 3.71667 11.8208 3.89583 11.9625 4.0375C12.1042 4.17917 12.2833 4.25 12.5 4.25ZM18.5 23C17.1167 23 15.9375 22.5125 14.9625 21.5375C13.9875 20.5625 13.5 19.3833 13.5 18C13.5 16.6167 13.9875 15.4375 14.9625 14.4625C15.9375 13.4875 17.1167 13 18.5 13C19.8833 13 21.0625 13.4875 22.0375 14.4625C23.0125 15.4375 23.5 16.6167 23.5 18C23.5 19.3833 23.0125 20.5625 22.0375 21.5375C21.0625 22.5125 19.8833 23 18.5 23ZM5.5 21C4.95 21 4.47917 20.8042 4.0875 20.4125C3.69583 20.0208 3.5 19.55 3.5 19V5C3.5 4.45 3.69583 3.97917 4.0875 3.5875C4.47917 3.19583 4.95 3 5.5 3H9.7C9.91667 2.4 10.2792 1.91667 10.7875 1.55C11.2958 1.18333 11.8667 1 12.5 1C13.1333 1 13.7042 1.18333 14.2125 1.55C14.7208 1.91667 15.0833 2.4 15.3 3H19.5C20.05 3 20.5208 3.19583 20.9125 3.5875C21.3042 3.97917 21.5 4.45 21.5 5V10.45C21.5 10.75 21.375 10.9833 21.125 11.15C20.875 11.3167 20.6083 11.35 20.325 11.25C20.0417 11.1667 19.7458 11.1042 19.4375 11.0625C19.1292 11.0208 18.8167 11 18.5 11C18.3167 11 18.1458 11.0042 17.9875 11.0125C17.8292 11.0208 17.6667 11.0417 17.5 11.075C17.4167 11.0583 17.3167 11.0417 17.2 11.025C17.1167 11.025 17.0125 11.0208 16.8875 11.0125C16.7625 11.0042 16.6333 11 16.5 11H8.5C8.21667 11 7.97917 11.0958 7.7875 11.2875C7.59583 11.4792 7.5 11.7167 7.5 12C7.5 12.2833 7.59583 12.5208 7.7875 12.7125C7.97917 12.9042 8.21667 13 8.5 13H13.625C13.325 13.2833 13.0542 13.5917 12.8125 13.925C12.5708 14.2583 12.3583 14.6167 12.175 15H8.5C8.21667 15 7.97917 15.0958 7.7875 15.2875C7.59583 15.4792 7.5 15.7167 7.5 16C7.5 16.2833 7.59583 16.5208 7.7875 16.7125C7.97917 16.9042 8.21667 17 8.5 17H11.575C11.5417 17.1667 11.5208 17.3292 11.5125 17.4875C11.5042 17.6458 11.5 17.8167 11.5 18C11.5 18.3333 11.5167 18.65 11.55 18.95C11.5833 19.25 11.6417 19.5417 11.725 19.825C11.8083 20.1083 11.7667 20.375 11.6 20.625C11.4333 20.875 11.2083 21 10.925 21H5.5ZM18 18.5V20.5C18 20.6333 18.05 20.75 18.15 20.85C18.25 20.95 18.3667 21 18.5 21C18.6333 21 18.75 20.95 18.85 20.85C18.95 20.75 19 20.6333 19 20.5V18.5H21C21.1333 18.5 21.25 18.45 21.35 18.35C21.45 18.25 21.5 18.1333 21.5 18C21.5 17.8667 21.45 17.75 21.35 17.65C21.25 17.55 21.1333 17.5 21 17.5H19V15.5C19 15.3667 18.95 15.25 18.85 15.15C18.75 15.05 18.6333 15 18.5 15C18.3667 15 18.25 15.05 18.15 15.15C18.05 15.25 18 15.3667 18 15.5V17.5H16C15.8667 17.5 15.75 17.55 15.65 17.65C15.55 17.75 15.5 17.8667 15.5 18C15.5 18.1333 15.55 18.25 15.65 18.35C15.75 18.45 15.8667 18.5 16 18.5H18ZM8.5 9H16.5C16.7833 9 17.0208 8.90417 17.2125 8.7125C17.4042 8.52083 17.5 8.28333 17.5 8C17.5 7.71667 17.4042 7.47917 17.2125 7.2875C17.0208 7.09583 16.7833 7 16.5 7H8.5C8.21667 7 7.97917 7.09583 7.7875 7.2875C7.59583 7.47917 7.5 7.71667 7.5 8C7.5 8.28333 7.59583 8.52083 7.7875 8.7125C7.97917 8.90417 8.21667 9 8.5 9Z',
  표: 'M3.5 8V5C3.5 4.45 3.69583 3.97917 4.0875 3.5875C4.47917 3.19583 4.95 3 5.5 3H19.5C20.05 3 20.5208 3.19583 20.9125 3.5875C21.3042 3.97917 21.5 4.45 21.5 5V8H3.5ZM5.5 21C4.95 21 4.47917 20.8042 4.0875 20.4125C3.69583 20.0208 3.5 19.55 3.5 19V10H8V21H5.5ZM17 21V10H21.5V19C21.5 19.55 21.3042 20.0208 20.9125 20.4125C20.5208 20.8042 20.05 21 19.5 21H17ZM10 21V10H15V21H10Z',
  리스트:
    'M6.0248 16.1749L9.5748 12.6249C9.7748 12.4249 10.0081 12.3291 10.2748 12.3374C10.5415 12.3457 10.7748 12.4499 10.9748 12.6499C11.1581 12.8499 11.2498 13.0832 11.2498 13.3499C11.2498 13.6166 11.1581 13.8499 10.9748 14.0499L6.7498 18.2999C6.5498 18.4999 6.31647 18.5999 6.0498 18.5999C5.78314 18.5999 5.5498 18.4999 5.3498 18.2999L3.1998 16.1499C3.01647 15.9666 2.9248 15.7332 2.9248 15.4499C2.9248 15.1666 3.01647 14.9332 3.1998 14.7499C3.38314 14.5666 3.61647 14.4749 3.8998 14.4749C4.18314 14.4749 4.41647 14.5666 4.5998 14.7499L6.0248 16.1749ZM6.0248 8.17491L9.5748 4.62491C9.7748 4.42491 10.0081 4.32908 10.2748 4.33741C10.5415 4.34575 10.7748 4.44991 10.9748 4.64991C11.1581 4.84991 11.2498 5.08325 11.2498 5.34991C11.2498 5.61658 11.1581 5.84991 10.9748 6.04991L6.7498 10.2999C6.5498 10.4999 6.31647 10.5999 6.0498 10.5999C5.78314 10.5999 5.5498 10.4999 5.3498 10.2999L3.1998 8.14991C3.01647 7.96658 2.9248 7.73325 2.9248 7.44991C2.9248 7.16658 3.01647 6.93325 3.1998 6.74991C3.38314 6.56658 3.61647 6.47491 3.8998 6.47491C4.18314 6.47491 4.41647 6.56658 4.5998 6.74991L6.0248 8.17491ZM14.4998 16.9999C14.2165 16.9999 13.979 16.9041 13.7873 16.7124C13.5956 16.5207 13.4998 16.2832 13.4998 15.9999C13.4998 15.7166 13.5956 15.4791 13.7873 15.2874C13.979 15.0957 14.2165 14.9999 14.4998 14.9999H21.4998C21.7831 14.9999 22.0206 15.0957 22.2123 15.2874C22.404 15.4791 22.4998 15.7166 22.4998 15.9999C22.4998 16.2832 22.404 16.5207 22.2123 16.7124C22.0206 16.9041 21.7831 16.9999 21.4998 16.9999H14.4998ZM14.4998 8.99991C14.2165 8.99991 13.979 8.90408 13.7873 8.71241C13.5956 8.52075 13.4998 8.28325 13.4998 7.99991C13.4998 7.71658 13.5956 7.47908 13.7873 7.28741C13.979 7.09575 14.2165 6.99991 14.4998 6.99991H21.4998C21.7831 6.99991 22.0206 7.09575 22.2123 7.28741C22.404 7.47908 22.4998 7.71658 22.4998 7.99991C22.4998 8.28325 22.404 8.52075 22.2123 8.71241C22.0206 8.90408 21.7831 8.99991 21.4998 8.99991H14.4998Z',
  링크: 'M18.5 15.75C18.5 17.4833 17.8917 18.9583 16.675 20.175C15.4583 21.3917 13.9833 22 12.25 22C10.5167 22 9.04167 21.3917 7.825 20.175C6.60833 18.9583 6 17.4833 6 15.75V6.5C6 5.25 6.4375 4.1875 7.3125 3.3125C8.1875 2.4375 9.25 2 10.5 2C11.75 2 12.8125 2.4375 13.6875 3.3125C14.5625 4.1875 15 5.25 15 6.5V15.25C15 16.0167 14.7333 16.6667 14.2 17.2C13.6667 17.7333 13.0167 18 12.25 18C11.4833 18 10.8333 17.7333 10.3 17.2C9.76667 16.6667 9.5 16.0167 9.5 15.25V7C9.5 6.71667 9.59583 6.47917 9.7875 6.2875C9.97917 6.09583 10.2167 6 10.5 6C10.7833 6 11.0208 6.09583 11.2125 6.2875C11.4042 6.47917 11.5 6.71667 11.5 7V15.25C11.5 15.4667 11.5708 15.6458 11.7125 15.7875C11.8542 15.9292 12.0333 16 12.25 16C12.4667 16 12.6458 15.9292 12.7875 15.7875C12.9292 15.6458 13 15.4667 13 15.25V6.5C12.9833 5.8 12.7375 5.20833 12.2625 4.725C11.7875 4.24167 11.2 4 10.5 4C9.8 4 9.20833 4.24167 8.725 4.725C8.24167 5.20833 8 5.8 8 6.5V15.75C7.98333 16.9333 8.39167 17.9375 9.225 18.7625C10.0583 19.5875 11.0667 20 12.25 20C13.4167 20 14.4083 19.5875 15.225 18.7625C16.0417 17.9375 16.4667 16.9333 16.5 15.75V7C16.5 6.71667 16.5958 6.47917 16.7875 6.2875C16.9792 6.09583 17.2167 6 17.5 6C17.7833 6 18.0208 6.09583 18.2125 6.2875C18.4042 6.47917 18.5 6.71667 18.5 7V15.75Z',
  기타: 'M9.5 20C9.18333 20 8.88333 19.9292 8.6 19.7875C8.31667 19.6458 8.08333 19.45 7.9 19.2L3.4 13.2C3.13333 12.85 3 12.45 3 12C3 11.55 3.13333 11.15 3.4 10.8L7.9 4.8C8.08333 4.55 8.31667 4.35417 8.6 4.2125C8.88333 4.07083 9.18333 4 9.5 4H20.5C21.05 4 21.5208 4.19583 21.9125 4.5875C22.3042 4.97917 22.5 5.45 22.5 6V18C22.5 18.55 22.3042 19.0208 21.9125 19.4125C21.5208 19.8042 21.05 20 20.5 20H9.5ZM10.5 13C10.7833 13 11.0208 12.9042 11.2125 12.7125C11.4042 12.5208 11.5 12.2833 11.5 12C11.5 11.7167 11.4042 11.4792 11.2125 11.2875C11.0208 11.0958 10.7833 11 10.5 11C10.2167 11 9.97917 11.0958 9.7875 11.2875C9.59583 11.4792 9.5 11.7167 9.5 12C9.5 12.2833 9.59583 12.5208 9.7875 12.7125C9.97917 12.9042 10.2167 13 10.5 13ZM14 13C14.2833 13 14.5208 12.9042 14.7125 12.7125C14.9042 12.5208 15 12.2833 15 12C15 11.7167 14.9042 11.4792 14.7125 11.2875C14.5208 11.0958 14.2833 11 14 11C13.7167 11 13.4792 11.0958 13.2875 11.2875C13.0958 11.4792 13 11.7167 13 12C13 12.2833 13.0958 12.5208 13.2875 12.7125C13.4792 12.9042 13.7167 13 14 13ZM17.5 13C17.7833 13 18.0208 12.9042 18.2125 12.7125C18.4042 12.5208 18.5 12.2833 18.5 12C18.5 11.7167 18.4042 11.4792 18.2125 11.2875C18.0208 11.0958 17.7833 11 17.5 11C17.2167 11 16.9792 11.0958 16.7875 11.2875C16.5958 11.4792 16.5 11.7167 16.5 12C16.5 12.2833 16.5958 12.5208 16.7875 12.7125C16.9792 12.9042 17.2167 13 17.5 13Z',
};

export default class CustomCategory extends Blockly.ToolboxCategory {
  constructor(
    categoryDef: CategoryInfo,
    toolbox: IToolbox,
    optParent: Blockly.ICollapsibleToolboxItem
  ) {
    super(categoryDef, toolbox, optParent);
  }

  addColourBorder_(colour: string) {
    this.rowDiv_!.style.color = colour;
  }

  setSelected(isSelected: boolean) {
    if (isSelected) {
      this.rowDiv_!.style.backgroundColor = this.colour_;
      this.rowDiv_!.style.color = 'white';
    } else {
      this.rowDiv_!.style.backgroundColor = 'white';
      this.rowDiv_!.style.color = this.colour_;
    }
  }

  createIconDom_() {
    console.log();
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');
    svg.setAttribute('viewBox', '0 0 24 24');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    path.setAttribute('d', CATEGORY_ICONS[this.name_]);
    path.setAttribute('fill', 'currentColor');
    svg.appendChild(path);
    return svg;
  }
}
