import 'blockly/blocks';
import * as Blockly from 'blockly/core';
import { useEffect, useState } from 'react';
import htmlCodeGenerator from '@/widgets/workspace/htmlCodeGenerator';
import CustomCategory from './customCategory';
// 블록리에게 커스텀 카테고리를 등록하기

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

export const WorkspaceContent = () => {
  const [workspace, setWorkspace] = useState<Blockly.WorkspaceSvg | null>(null);
  const [htmlCode, setHtmlCode] = useState<string>('');
  useEffect(() => {
    const newWorkspace = Blockly.inject('blocklyDiv', {
      renderer: 'zelos',
      toolboxPosition: 'end',
      toolbox: {
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
      },
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
    return () => {
      newWorkspace.dispose();
    };
  }, []);

  const generateHtmlCode = () => {
    if (!workspace) {
      return;
    }
    const code = htmlCodeGenerator.workspaceToCode(workspace);
    console.log(code);
    setHtmlCode(code);
  };

  return (
    <div className="flex">
      <div id="blocklyDiv" style={{ width: '700px', height: '700px' }}></div>
    </div>
  );
};
