import type {BaseConfigOptions} from '@utils/types';
import type {Linter} from 'eslint';

export async function getPrettierConfig({overrides}: BaseConfigOptions) {
  const {default: prettier} = await import('eslint-config-prettier');

  const config: Linter.Config = {
    name: 'proste_prettier_config',
    rules: {...prettier.rules, ...overrides},
  };

  return config;
}
