import * as Blockly from 'blockly/core';

export function hasField(
  inputField: Blockly.blockRendering.Measurable
): inputField is Blockly.blockRendering.Measurable & { field: Blockly.Field } {
  return 'field' in inputField && inputField.field instanceof Blockly.Field;
}
