import globals from 'globals';
import type {Linter} from 'eslint';
import jsRules from '@rules/js';
import eslintJs from '@eslint/js';
import type {BaseConfigOptions} from '@utils/types';

export function getJsConfig({overrides}: BaseConfigOptions) {
  const config: Linter.Config = {
    name: 'proste_basic_config',
    languageOptions: {
      globals: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
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
      ...overrides,
    },
  };

  return config;
}

export default getJsConfig;
