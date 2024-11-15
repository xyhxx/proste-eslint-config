import type {Linter} from 'eslint';
import rules from '@rules/unicorn';
import type {BaseConfigOptions} from '@utils/types';

export async function getUnicornConfig({overrides}: BaseConfigOptions) {
  const {default: unicorn} = await import('eslint-plugin-unicorn');

  const config: Linter.Config = {
    name: 'proste_unicorn_config',
    plugins: {
      unicorn,
    },
    rules: {
      ...rules,
      ...overrides,
    },
  };

  return config;
}
