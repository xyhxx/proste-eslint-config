import type {Linter} from 'eslint';
import rules from '@rules/unicorn';
import type {BaseConfigOptions} from '@utils/types';

export async function getUnicornConfig({overrides}: BaseConfigOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const {default: unicorn} = await import('eslint-plugin-unicorn');

  const config: Linter.FlatConfig = {
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
