// import * as Blockly from 'blockly/core';

// export default function wrapBlocklyBlocksInDiv(workspace: Blockly.WorkspaceSvg) {
//   const toolbox = workspace.getToolbox();
//   const flyout = toolbox!.getFlyout();
//   if (!flyout) {
//     console.error('Flyout not found');
//     return null;
//   }

//   // Flyout 내의 블록들이 있는 SVG 요소 찾기
//   const flyoutBlockCanvas = flyout.svgGroup_.querySelector('.blocklyBlockCanvas');
//   if (!flyoutBlockCanvas) {
//     console.error('Flyout block canvas not found');
//     return null;
//   }

//   // 새로운 div 컨테이너 생성
//   const blockContainer = document.createElement('div');
//   blockContainer.className = 'flyout-blocks-container';
//   blockContainer.style.cssText = `
//     position: relative;
//     width: 100%;
//     min-height: 100px;
//     overflow: auto;
//     display: flex;
//     flex-wrap: wrap;
//     gap: 10px;
//     padding: 10px;
//     background: white;
//     border: 1px solid #ddd;
//     border-radius: 4px;
//   `;

//   // Flyout의 블록들을 복제하여 div에 추가
//   const blocks = flyoutBlockCanvas.childNodes;
//   blocks.forEach((blockElement: any) => {
//     if (blockElement.tagName === 'g') {
//       // SVG group 요소만 처리
//       const blockClone = blockElement.cloneNode(true);

//       // 블록을 감싸는 div 생성
//       const blockWrapper = document.createElement('div');
//       blockWrapper.className = 'block-wrapper';
//       blockWrapper.style.cssText = `
//         display: inline-block;
//         margin: 5px;
//       `;

//       // SVG 컨테이너 생성
//       const svgContainer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//       const bbox = blockElement.getBBox();
//       svgContainer.setAttribute('width', bbox.width);
//       svgContainer.setAttribute('height', bbox.height);
//       svgContainer.appendChild(blockClone);

//       blockWrapper.appendChild(svgContainer);
//       blockContainer.appendChild(blockWrapper);
//     }
//   });

//   // 컨테이너를 document의 원하는 위치에 추가
//   const targetContainer = document.getElementById('target-container');
//   if (targetContainer) {
//     targetContainer.appendChild(blockContainer);
//   } else {
//     document.body.appendChild(blockContainer);
//   }

//   return blockContainer;
// }
