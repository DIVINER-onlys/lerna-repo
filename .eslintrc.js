/**
 * 参考
 * https://segmentfault.com/a/1190000019661168
 * OR
 * @efox/eslint-config-react-prittier-ts
 */

module.exports = {
  parser: '@typescript-eslint/parser', // 定义ESLint的解析器
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier', // "prettier/@typescript-eslint" has been merged into "prettier" in eslint-config-prettier 8.0.0. 参考: https://github.com/prettier/eslint-config-prettier/blob/main/CHANGELOG.md#version-800-2021-02-21
    // 'prettier/@typescript-eslint', // 使得@typescript-eslint中的样式规范失效，遵循prettier中的样式规范
    'plugin:prettier/recommended', // 使用prettier中的样式规范，且如果使用ESLint会检测prettier的格式问题，同样将格式问题以error的形式抛出
  ], // 定义文件继承的子规范，使用推荐的React代码检测规范
  plugins: ['@typescript-eslint'], // 定义了该eslint文件所依赖的插件
  env: {
    browser: true,
    node: true,
  },
  settings: {
    //自动发现React的版本，从而进行规范react代码
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  parserOptions: {
    //指定ESLint可以解析JSX语法
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/class-name-casing': 0,
    '@typescript-eslint/triple-slash-reference': 0,
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: false,
        jsxBracketSameLine: true,
        arrowParens: 'avoid',
        insertPragma: false,
        tabWidth: 2,
        useTabs: false,
        endOfLine: 'auto',
      },
    ],
  },
}
