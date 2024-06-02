import type {Linter} from 'eslint';

export async function getPrettierConfig() {
  const prettier = (await import('eslint-config-prettier')).default;

  const config: Linter.FlatConfig = {
    rules: prettier.rules,
  };

  return config;
}
