import { addPreviousTypeName } from '@/shared/utils';
import * as Blockly from 'blockly/core';

type TInitialBlockDefinition = {
  type: string;
  coordinate?: { x: number; y: number };
  movable?: boolean;
  deletable?: boolean;
  connection?: {
    parent: string;
    input: string;
  };
};

export const initialBlocksJson: TInitialBlockDefinition[] = [
  {
    type: addPreviousTypeName('html'),
    coordinate: { x: 40, y: 40 },
    movable: false,
    deletable: false,
  },
  {
    type: addPreviousTypeName('head'),
    connection: {
      parent: 'html',
      input: 'children',
    },
    movable: false,
    deletable: false,
  },
  {
    type: addPreviousTypeName('body'),
    connection: {
      parent: 'html',
      input: 'children',
    },
    movable: false,
    deletable: false,
  },
];

export function initializeBlocks(workspace: Blockly.WorkspaceSvg) {
  const createdBlocks: Record<string, Blockly.Block> = {};

  initialBlocksJson.forEach((blockDefinition) => {
    const { type, coordinate, deletable, movable, connection } = blockDefinition;

    const block = workspace.newBlock(type);
    if (coordinate) {
      block.moveBy(coordinate.x, coordinate.y);
    }
    if (movable === false) {
      block.setMovable(false);
    }
    if (deletable === false) {
      block.setDeletable(false);
    }

    block.initSvg();
    block.render();

    createdBlocks[type] = block;

    if (connection) {
      const parentBlock = createdBlocks[addPreviousTypeName(connection.parent)];
      const childBlock = block;

      if (parentBlock && childBlock) {
        const inputConnection = parentBlock.getInput(connection.input)?.connection;

        if (inputConnection) {
          const lastBlock = findLastBlockInInput(parentBlock, connection.input);
          if (lastBlock) {
            lastBlock.nextConnection?.connect(childBlock.previousConnection);
          } else {
            inputConnection.connect(childBlock.previousConnection);
          }
        }
      }
    }
  });

  function findLastBlockInInput(block: Blockly.Block, inputName: string): Blockly.Block | null {
    const input = block.getInput(inputName);
    if (!input?.connection?.targetBlock()) {
      return null;
    }

    let currentBlock = input.connection.targetBlock();
    while (currentBlock?.nextConnection?.targetBlock()) {
      currentBlock = currentBlock.nextConnection.targetBlock();
    }

    return currentBlock;
  }
}
