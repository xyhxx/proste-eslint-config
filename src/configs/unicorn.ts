import type {Linter} from 'eslint';
import rules from '@rules/unicorn';

export async function getUnicornConfig() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const {default: unicorn} = await import('eslint-plugin-unicorn');

  const config: Linter.FlatConfig = {
    name: 'proste_unicorn_config',
    plugins: {
      unicorn,
    },
    rules,
  };

  return config;
}
