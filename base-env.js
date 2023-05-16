module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  root: true,
  globals: {
    NodeJS: 'readonly',
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  plugins: [
    'import',
    'import-newlines',
  ],
};
