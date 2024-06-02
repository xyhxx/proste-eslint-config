import globals from 'globals';
import type {Linter} from 'eslint';
import jsRules from '@rules/js';
import eslintJs from '@eslint/js';

const configs: Linter.FlatConfig = {
  name: 'proste_basic_config',
  languageOptions: {
    globals: {
      // eslint-disable-next-line typescript/naming-convention
      NodeJS: 'readonly',
      ...globals.browser,
      ...globals.commonjs,
      ...globals.node,
      ...globals.es2021,
    },
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
  },
  rules: {
    ...eslintJs.configs.recommended.rules,
    ...jsRules,
  },
};

export default configs;
