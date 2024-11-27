type TClassName = string;

export const validateClassNameStart = (className: TClassName) => /^[a-zA-Z_-]/.test(className);

export const validateClassNameBody = (className: TClassName) => /^.[a-zA-Z0-9_-]*$/.test(className);
