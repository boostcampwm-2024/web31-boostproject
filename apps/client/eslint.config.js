const isProduction = process.env.NODE_ENV === 'production';

export default {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier', // prettier와 충돌하는 규칙 비활성화
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [['@', './src']], // 절대 경로 설정
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
  rules: Object.assign(
    {
      // Prettier와 ESLint 통합 (Prettier 규칙 위반 시 에러)
      'prettier/prettier': 'error',

      // 코드 품질 관련 규칙
      'prefer-arrow-callback': 'error', // 콜백에 화살표 함수 사용
      curly: ['error', 'all'], // 조건문 중괄호 강제
      'no-else-return': 'error', // Early Return 패턴 강제

      // 네이밍 컨벤션 관련 규칙
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'variable', format: ['camelCase'] },
        { selector: 'function', format: ['camelCase'] },
        { selector: 'typeLike', format: ['PascalCase'] },
        { selector: 'typeParameter', prefix: ['T'], format: ['PascalCase'] },
      ],
      camelcase: 'error', // 변수명 camelCase 강제

      // Boolean 변수 네이밍 규칙
      'id-match': ['error', '^(is|has|should|can|todo|user)[A-Z][a-zA-Z0-9]*$'],
    },
    isProduction
      ? { 'no-console': 'error', 'no-debugger': 'error' }
      : { 'no-unused-vars': 'warn', 'no-console': 'off' }
  ),
};
