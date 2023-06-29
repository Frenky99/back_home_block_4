/**
 * конфигурация для ESLint (линтер для JavaScript)
 */

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    // ecmaFeatures: "globalReturn" // только это нашла, как работает? https://eslint.org/docs/latest/use/configure/language-options#specifying-globals
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off', // проверка на определение типов функции в виде предупреждения
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-var': "warn" // проверка на определение глобальных переменных
  },
};
