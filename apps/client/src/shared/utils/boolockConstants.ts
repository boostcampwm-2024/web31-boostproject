/*
 *클래스명 지정 시 블록타입과 이름이 같으면 해당 블록 타입에 대한 블록 모양이 생성되는 오류가 있습니다.
 *이를 해결하기 위해 모든 블록타입을 지정할 때는 해당 함수를 통해 PreviousTypeName을 붙이게 하였습니다.
 *앞으로 블록 타입을 지정할때는 꼭..! 이 함수를 이용해서 블록 타입명을 지정해주세요.
 */
export const PREVIOUS_TYPE_NAME = 'BOOLOCK_SYSTEM_';
export const CSS_CLASS_PREFIX = 'CSS_';

export const addPreviousTypeName = (type: string) => {
  return `${PREVIOUS_TYPE_NAME}${type}`;
};

export const removePreviousTypeName = (type: string): string => {
  if (type.startsWith(PREVIOUS_TYPE_NAME)) {
    return type.slice(PREVIOUS_TYPE_NAME.length);
  }
  return type;
};

export const addPrefixToCssClassName = (className: string) => {
  return className.startsWith(CSS_CLASS_PREFIX) ? className : `${CSS_CLASS_PREFIX}${className}`;
};

export const removeCssClassNamePrefix = (className: string) => {
  return className.startsWith(CSS_CLASS_PREFIX)
    ? className.replace(CSS_CLASS_PREFIX, '')
    : className;
};
