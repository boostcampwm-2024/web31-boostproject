export const PREVIOUS_TYPE_NAME = 'BOOLOCK_SYSTEM_';

export const addPreviousTypeName = (type: string) => {
  return `${PREVIOUS_TYPE_NAME}${type}`;
};
