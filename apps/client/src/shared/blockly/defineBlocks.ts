import { CustomFieldTextInput } from '@/core/customFieldTextInput';
import { TBlockContents } from '@/shared/types';
import { addPreviousTypeName, removePreviousTypeName } from '@/shared/utils';
import * as Blockly from 'blockly/core';
import { CustomTagFieldLabel } from '../../core/customTagFieldLabel';
import { CustomOptionFieldLabel } from '@/core/customOptionFieldLabel';

/**
 * html 태그 블록을 생성할 때 좀 더 편리하게 생성하기 위해 만든 헬퍼함수입니다.
 * @param blockName blockName은 html 태그 블록의 타입 및 이름을 정의할 때 사용되는 변수
 * @param blockColorNum blockTheme를 지정할 때 몇번 default block 및 css blockTheme를 사용할 것인지 설정할 때 사용되는 변수
 * @param blockDefinition 기본 html태그 블록 설정을 사용하는 것이 아닌 사용자 정의 속성을 위한 옵션 변수
 * @param isDefault 기본 html태그 블록 설정을 사용할 것인지, 사용자 정의 속성을 사용할 것인지 정하는 변수
 */
const defineBlockWithDefaults = (
  blockName: string,
  blockColorNum: number | string,
  description: string,
  blockDefinition: any = { init: function () {} },
  isDefault: boolean = true
) => {
  const originalInit = blockDefinition.init;
  blockDefinition.init = function () {
    originalInit.call(this);

    if (!this.styleName_) {
      this.setStyle(`defaultBlock${blockColorNum}`);
      this.setTooltip(description);
    }

    if (isDefault) {
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.appendValueInput('css class')
        .setCheck('CSS-CLASS')
        .appendField(new CustomTagFieldLabel(removePreviousTypeName(blockName)));
      this.appendStatementInput('children').appendField();
    }
  };

  Blockly.Blocks[blockName] = blockDefinition;
};

export const defineBlocks = (blockContents: TBlockContents) => {
  defineBlockWithDefaults(
    addPreviousTypeName('html'),
    1,
    '웹페이지의 시작과 끝을 알려주는 가장 큰 상자예요.\n모든 내용을 담고 있는 책의 겉표지 같은 거예요.',
    {
      init: function () {
        this.appendValueInput('css class')
          .setCheck('CSS-CLASS')
          .appendField(new CustomTagFieldLabel('html'));
        this.appendStatementInput('children').appendField('');
      },
    },
    false
  );

  defineBlockWithDefaults(
    addPreviousTypeName('head'),
    2,
    '웹페이지의 정보를 담아두는 곳이에요.\n책의 목차나 출판 정보같이 보이지 않지만 중요한 정보들이 들어가요.',
    {
      init: function () {
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.appendDummyInput().appendField(new CustomTagFieldLabel('head'));
      },
    },
    false
  );

  defineBlockWithDefaults(
    addPreviousTypeName('body'),
    3,
    '웹페이지에서 실제로 보이는 모든 내용이 들어가는 곳이에요.\n책의 실제 내용이 적힌 부분같은 거예요.'
  );

  /*
   *   {
   *   kind: 'block',
   *   type: 'span',
   *   description: '설명 작성',
   * },
   */
  Object.values(blockContents).forEach((blockInfoList) => {
    blockInfoList.forEach((blockInfo, index) => {
      if (blockInfo.type === addPreviousTypeName('text')) {
        defineBlockWithDefaults(
          blockInfo.type,
          (index % 3) + 1,
          blockInfo.description,
          {
            init: function () {
              this.setPreviousStatement(true); // 다른 블록 위에 연결 가능
              this.setNextStatement(true); // 다른 블록 아래에 연결 가능
              this.appendDummyInput()
                .appendField(new CustomTagFieldLabel(removePreviousTypeName(blockInfo.type)))
                .appendField(new CustomFieldTextInput(), 'TEXT');
              this.setTooltip(blockInfo.description);
            },
          },
          false
        );
      } else if (
        blockInfo.type === addPreviousTypeName('hr') ||
        blockInfo.type === addPreviousTypeName('br')
      ) {
        defineBlockWithDefaults(
          blockInfo.type,
          (index % 3) + 1,
          blockInfo.description,
          {
            init: function () {
              this.setPreviousStatement(true);
              this.setNextStatement(true);
              this.appendDummyInput().appendField(
                new CustomTagFieldLabel(removePreviousTypeName(blockInfo.type))
              );
            },
          },
          false
        );
      } else if (blockInfo.type === addPreviousTypeName('a')) {
        defineBlockWithDefaults(
          blockInfo.type,
          (index % 3) + 1,
          blockInfo.description,
          {
            init: function () {
              this.setPreviousStatement(true);
              this.setNextStatement(true);
              this.appendValueInput('css class')
                .setCheck('CSS-CLASS')
                .appendField(new CustomTagFieldLabel('a'));
              this.appendDummyInput()
                .appendField(new CustomOptionFieldLabel('target'))
                .appendField(
                  new Blockly.FieldDropdown([
                    ['_blank', '_blank'],
                    ['_self', '_self'],
                    ['_parent', '_parent'],
                    ['_top', '_top'],
                  ]),
                  'TARGET'
                );
              this.appendDummyInput()
                .appendField(new CustomOptionFieldLabel('href'))
                .appendField(new CustomFieldTextInput(), 'HREF');
              this.appendStatementInput('children').appendField();
              this.setInputsInline(false);
            },
          },
          false
        );
      } else {
        defineBlockWithDefaults(blockInfo.type, (index % 3) + 1, blockInfo.description);
      }
    });
  });
};
