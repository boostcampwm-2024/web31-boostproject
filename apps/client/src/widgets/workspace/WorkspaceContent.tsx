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
    flyoutBackgroundColour: '#123213', // 툴박스 플라이아웃 배경색
    flyoutForegroundColour: '#ccc', // 툴박스 플라이아웃 전경색
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

// prompt를 이용한 동적 생성
const openTypedVariableModal = (workspace: Blockly.WorkspaceSvg) => {
  const blockName = prompt('새로운 css 블록 이름을 입력하세요.');

  if (blockName?.trim() === '') {
    return alert('블록 이름을 입력해주세요.');
  }

  if (!Blockly.Blocks[blockName!]) {
    Blockly.Blocks[blockName!] = {
      init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldTextInput(blockName!), 'CLASS'); // 입력된 이름 반영
        this.setOutput(true);
        this.setColour(230);
      },
    };
  }

  // "폼" 카테고리를 찾아 기존 블록 유지 및 새 블록 추가
  const formCategory = toolboxConfig.contents.find((category) => category.name === '폼');

  // 기존 블록 유지 및 새 블록 추가
  const existingBlocks = formCategory!.contents || [];
  const isBlockAlreadyAdded = existingBlocks.some((block) => block.type === blockName);

  if (isBlockAlreadyAdded) {
    alert(`"${blockName}" 블록은 이미 "폼" 카테고리에 존재합니다.`);
    return;
  }

  formCategory!.contents = [...existingBlocks, { kind: 'block', type: blockName }];

  // 기존 툴박스 갱신
  workspace.updateToolbox(toolboxConfig);

  alert(`새 블록 "${blockName}"이(가) "폼" 카테고리에 성공적으로 추가되었습니다.`);
};

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
      contents: [
        {
          kind: 'button',
          text: '추가하기',
          callbackKey: 'openTypedVariableModal',
        },
        { kind: 'block', type: 'css_style' },
      ],
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

  const customToolbox = (newWorkspace: Blockly.WorkspaceSvg) => {
    const toolbox = newWorkspace.getToolbox();

    const tagStyleTab = document.createElement('div');
    tagStyleTab.className = 'flex justify-center';

    const tagButton = document.createElement('button');
    tagButton.textContent = '태그';
    tagButton.className = 'bg-blue-300 w-1/2 py-2';

    const styleButton = document.createElement('button');
    styleButton.textContent = '스타일';
    styleButton.className = 'bg-red-300 w-1/2 py-2';

    tagStyleTab.appendChild(tagButton);
    tagStyleTab.appendChild(styleButton);

    const htmlDiv = (toolbox as any)?.HtmlDiv;
    htmlDiv?.prepend(tagStyleTab);

    const flyout = toolbox?.getFlyout();
    flyout!.hide = () => {};
  };

  const generateHtmlCode = () => {
    if (!workspace) {
      return;
    }
    const code = htmlCodeGenerator.workspaceToCode(workspace);
    setHtmlCode(code);
  };

  useEffect(() => {
    const newWorkspace = Blockly.inject('blocklyDiv', {
      renderer: 'zelos',
      toolboxPosition: 'end',
      toolbox: toolboxConfig,
      theme: customTheme,
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
      },
    });

    newWorkspace.registerButtonCallback('openTypedVariableModal', () =>
      openTypedVariableModal(newWorkspace)
    );

    setWorkspace(newWorkspace);
    customToolbox(newWorkspace);

    return () => {
      newWorkspace.dispose();
    };
  }, []);

  return (
    <div className="flex">
      <div className="h-[926px] w-[504px]">
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
      </div>

      <div id="blocklyDiv" className="h-[926px] w-[600px]"></div>
      <button className="h-10 w-20 bg-blue-400" onClick={generateHtmlCode}>
        변환하기
      </button>
    </div>
  );
};
