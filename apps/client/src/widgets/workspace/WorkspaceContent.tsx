import 'blockly/blocks';
import * as Blockly from 'blockly/core';
import { useEffect, useState } from 'react';
import htmlCodeGenerator from '@/widgets/workspace/blockly/htmlCodeGenerator';
import CustomCategory from '@/widgets/workspace/blockly/customCategory';
import { CssPropsSelectBox } from './CssPropsSelectBox';
import { defineBlocks } from '@/widgets/workspace/blockly/defineBlocks';
import { toolboxConfig } from '@/widgets/workspace/blockly/toolboxConfig';
import { initTheme } from '@/widgets/workspace/blockly/initTheme';
import { customizeFlyoutSVG } from '@/widgets/workspace/blockly/customizeFlyoutSVG';
import { classMakerPrompt } from './blockly/classMakerPrompt';

Blockly.registry.register(
  Blockly.registry.Type.TOOLBOX_ITEM,
  Blockly.ToolboxCategory.registrationName,
  CustomCategory,
  true
);

export const WorkspaceContent = () => {
  const [workspace, setWorkspace] = useState<Blockly.WorkspaceSvg | null>(null);
  const [htmlCode, setHtmlCode] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'preview' | 'html' | 'css'>('preview');

  defineBlocks();

  useEffect(() => {
    const newWorkspace = Blockly.inject('blocklyDiv', {
      renderer: 'zelos',
      toolboxPosition: 'end',
      toolbox: toolboxConfig,
      theme: initTheme,
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
      },
    });

    newWorkspace.registerButtonCallback('classMakerPrompt', () => classMakerPrompt(newWorkspace));

    setWorkspace(newWorkspace);
    customizeFlyoutSVG(newWorkspace);

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
    <div className="flex flex-1">
      <div className="flex h-full w-[32rem] flex-shrink-0 flex-col">
        <div className="flex-1 border-b border-gray-100">
          <nav className="flex h-10 border-b border-gray-100">
            <button
              onClick={() => setActiveTab('preview')}
              className={`${activeTab === 'preview' ? 'bg-green-500 text-white' : 'bg-white text-gray-200'} h-full flex-1 border-r border-gray-100 bg-green-500`}
            >
              미리보기
            </button>
            <button
              onClick={() => setActiveTab('html')}
              className={`${activeTab === 'html' ? 'bg-green-500 text-white' : 'bg-white text-gray-200'} h-full flex-1 border-r border-gray-100 bg-green-500`}
            >
              HTML
            </button>
            <button
              onClick={() => setActiveTab('css')}
              className={`${activeTab === 'css' ? 'bg-green-500 text-white' : 'bg-white text-gray-200'} h-full flex-1 bg-green-500`}
            >
              CSS
            </button>
          </nav>
          <div className="min-h-[20rem]">
            {activeTab === 'preview' && <iframe srcDoc={htmlCode}></iframe>}
            {activeTab === 'html' && <pre className="whitespace-pre-wrap">{htmlCode}</pre>}
            {activeTab === 'css' && <p>css 파싱 기능은 구현 중 입니다.</p>}
          </div>
        </div>
        <CssPropsSelectBox />
      </div>

      <div id="blocklyDiv" className="h-full w-full"></div>
      <button className="h-10 w-20 bg-blue-400" onClick={generateHtmlCode}>
        변환하기
      </button>
    </div>
  );
};
