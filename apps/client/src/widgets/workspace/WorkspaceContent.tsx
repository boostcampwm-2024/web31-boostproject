import 'blockly/blocks';
import * as Blockly from 'blockly/core';
import { useEffect, useState } from 'react';
import htmlCodeGenerator from '@/widgets/workspace/htmlCodeGenerator';
import CustomCategory from './customCategory';
import { CssPropsSelectBox } from '@/widgets/workspace/CssPropsSelectBox';

Blockly.registry.register(
  Blockly.registry.Type.TOOLBOX_ITEM,
  Blockly.ToolboxCategory.registrationName,
  CustomCategory,
  true
);

const customTheme = Blockly.Theme.defineTheme('custom', {
  name: 'custom',
  base: Blockly.Themes.Classic,
  componentStyles: {
    workspaceBackgroundColour: '#fafafa', // 워크스페이스 배경색
    toolboxBackgroundColour: 'blackBackground', // 툴박스 배경색
    flyoutBackgroundColour: 'white', // 툴박스 플라이아웃 배경색
    flyoutOpacity: 1,
    scrollbarColour: '#000000',
    insertionMarkerColour: '#fff',
    insertionMarkerOpacity: 0.3,
    scrollbarOpacity: 0.001,
    cursorColour: '#d0d0d0',
  },
  categoryStyles: {
    containerCategory: {
      colour: 'FF3A61',
    },
    textCategory: {
      colour: 'FFD900',
    },
    formCategory: {
      colour: 'FF9821',
    },
    tableCategory: {
      colour: 'B223F5',
    },
    listCategory: {
      colour: '3ED5FF',
    },
    linkCategory: {
      colour: '3E84FF',
    },
    etcCategory: {
      colour: '00AF6F',
    },
  },
});

Blockly.Blocks['html'] = {
  init: function () {
    this.appendDummyInput().appendField('html');
    this.appendValueInput('css class').setCheck('String').appendField('css class');
    this.appendStatementInput('children').appendField('children');
    this.setColour(230);
  },
};

Blockly.Blocks['head'] = {
  init: function () {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendEndRowInput().appendField('head');
    this.appendValueInput('css class').setCheck('CSS-CLASS').appendField('css class');
    this.appendStatementInput('children').appendField();
    this.setColour(120);
  },
};

Blockly.Blocks['body'] = {
  init: function () {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendEndRowInput().appendField('body');
    this.appendValueInput('css class').setCheck('CSS-CLASS').appendField('css class');
    this.appendStatementInput('children').appendField();
    this.setColour(300);
  },
};

Blockly.Blocks['p'] = {
  init: function () {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendEndRowInput().appendField('p');
    this.appendValueInput('css class').setCheck('CSS-CLASS').appendField('css class');
    this.appendStatementInput('children').appendField();
    this.setColour(180);
  },
};

Blockly.Blocks['button'] = {
  init: function () {
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendEndRowInput().appendField('button');
    this.appendValueInput('css class').setCheck('CSS-CLASS').appendField('css class');
    this.appendStatementInput('children').appendField();
    this.setColour(280);
  },
};

Blockly.Blocks['text'] = {
  init: function () {
    this.setPreviousStatement(true); // 다른 블록 위에 연결 가능
    this.setNextStatement(true); // 다른 블록 아래에 연결 가능
    this.appendDummyInput().appendField('text').appendField(new Blockly.FieldTextInput(), 'TEXT');
    this.setColour(40);
  },
};

// css 블록
Blockly.Blocks['css_style'] = {
  init: function () {
    this.appendDummyInput().appendField(new Blockly.FieldTextInput('클래스명'), 'CLASS'); // "클래스명"은 초기값
    this.setOutput(true); // 이 블록을 다른 블록에 연결할 수 있도록 설정
  },
};

const contents = [
  {
    kind: 'block',
    type: 'html',
  },
  {
    kind: 'block',
    type: 'head',
  },
  {
    kind: 'block',
    type: 'body',
  },
  {
    kind: 'block',
    type: 'p',
  },
  {
    kind: 'block',
    type: 'button',
  },
  {
    kind: 'block',
    type: 'text',
  },
];

const toolboxConfig = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: '컨테이너',
      categorystyle: 'containerCategory',
      contents: contents,
    },
    {
      kind: 'category',
      name: '텍스트',
      categorystyle: 'textCategory',
      contents: contents,
    },
    {
      kind: 'category',
      name: '폼',
      categorystyle: 'formCategory',
      contents: [{ kind: 'block', type: 'css_style' }],
    },
    {
      kind: 'category',
      name: '표',
      categorystyle: 'tableCategory',
      contents: contents,
    },
    {
      kind: 'category',
      name: '리스트',
      categorystyle: 'listCategory',
      contents: contents,
    },
    {
      kind: 'category',
      name: '링크',
      categorystyle: 'linkCategory',
      contents: contents,
    },
    {
      kind: 'category',
      name: '기타',
      categorystyle: 'etcCategory',
      contents: contents,
    },
  ],
};

export const WorkspaceContent = () => {
  const [workspace, setWorkspace] = useState<Blockly.WorkspaceSvg | null>(null);
  const [htmlCode, setHtmlCode] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'preview' | 'html' | 'css'>('preview');

  useEffect(() => {
    const newWorkspace = Blockly.inject('blocklyDiv', {
      renderer: 'zelos',
      toolboxPosition: 'end',
      toolbox: toolboxConfig,
      theme: customTheme, // 커스텀 테마 적용
      zoom: {
        // 확대 및 축소 버튼 설정
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
      },
    });
    setWorkspace(newWorkspace);

    const customizeFlyoutSVG = () => {
      const toolbox = newWorkspace.getToolbox();

      // 새 div 요소 생성
      const flexDiv = document.createElement('div');
      flexDiv.className = 'flex w-96';

      // 버튼1 생성
      const button1 = document.createElement('button');
      button1.className = 'text-semibold-md flex-1 bg-gray-50 py-3 rounded-t-lg text-gray-200';
      button1.textContent = 'HTML';

      // 버튼2 생성
      const button2 = document.createElement('button');
      button2.className = 'text-bold-md text-white flex-1 bg-blue-500 rounded-t-lg py-3';
      button2.textContent = 'CSS';

      // 버튼을 div에 추가
      flexDiv.appendChild(button1);
      flexDiv.appendChild(button2);

      // flexDiv를 대상 요소 앞에 추가
      toolbox.HtmlDiv.prepend(flexDiv);
    };

    customizeFlyoutSVG();

    // CSS 카테고리가 열릴 때 input 필드를 동적으로 추가하는 함수
    const addInputFieldToFlyout = () => {
      const toolboxElement = document.querySelector('.blocklyFlyout');

      if (toolboxElement) {
        // 기존에 추가된 input 필드가 있는지 확인하고, 있으면 제거
        let existingInputDiv = toolboxElement.querySelector('.custom-input');
        if (existingInputDiv) {
          existingInputDiv.remove();
        }

        // 새로운 input 필드 생성
        const inputDiv = document.createElement('div');
        inputDiv.className = 'custom-input';
        inputDiv.style.padding = '5px';
        inputDiv.innerHTML = `<input type="text" placeholder="스타일을 정해주세요" style="width: 90%;" />`;

        // Flyout toolbox에 input 필드를 추가
        toolboxElement.insertBefore(inputDiv, toolboxElement.firstChild);
      }
    };

    // CSS 카테고리 열기를 감지하고 input 필드를 추가
    newWorkspace.addChangeListener((event) => {
      if (
        event.type === Blockly.Events.TOOLBOX_ITEM_SELECT &&
        (event as any).newItemId === 'css_category'
      ) {
        addInputFieldToFlyout();
      }

      if (event.type === Blockly.Events.TOOLBOX_ITEM_SELECT) {
        if (event.newItem == undefined) {
          const flyout = newWorkspace.getToolbox().getFlyout().svgGroup_;
          console.log(flyout);
          flyout.style = 'display: block; transform: translate(292px, 60px);';
        }
        // console.log(event);
        // const clickedBlock = newWorkspace.getBlockById(event.blockId) as Blockly.BlockSvg;
      }
    });
    return () => {
      newWorkspace.dispose();
    };
  }, []);

  const generateHtmlCode = () => {
    if (!workspace) {
      return;
    }
    const code = htmlCodeGenerator.workspaceToCode(workspace);
    setHtmlCode(code);
  };

  return (
    <div className="flex">
      {/* <div className="h-[926px] w-[504px]">
        <nav className="h-10 border-b border-gray-100">
          <button
            onClick={() => setActiveTab('preview')}
            className={`${activeTab === 'preview' ? 'bg-green-500 text-white' : 'bg-white text-gray-200'} h-full w-1/3 border-r border-gray-100 bg-green-500`}
          >
            미리보기
          </button>
          <button
            onClick={() => setActiveTab('html')}
            className={`${activeTab === 'html' ? 'bg-green-500 text-white' : 'bg-white text-gray-200'} h-full w-1/3 border-r border-gray-100 bg-green-500`}
          >
            HTML
          </button>
          <button
            onClick={() => setActiveTab('css')}
            className={`${activeTab === 'css' ? 'bg-green-500 text-white' : 'bg-white text-gray-200'} h-full w-1/3 border-gray-200 bg-green-500`}
          >
            CSS
          </button>
        </nav>
        <div className="h-1/2 border-b border-gray-100">
          {activeTab === 'preview' && (
            <iframe srcDoc={htmlCode} className="h-full w-full p-5"></iframe>
          )}
          {activeTab === 'html' && (
            <pre className="h-full w-full whitespace-pre-wrap p-5">{htmlCode}</pre>
          )}
          {activeTab === 'css' && <p>css 파싱 기능은 구현 중 입니다.</p>}
        </div>
        <CssPropsSelectBox />
      </div> */}

      <div id="blocklyDiv" className="h-[926px] w-[600px]"></div>
      <button className="h-10 w-20 bg-blue-400" onClick={generateHtmlCode}>
        변환하기
      </button>
    </div>
  );
};
