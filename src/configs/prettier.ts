import type {Linter} from 'eslint';

export async function getPrettierConfig() {
  const {default: prettier} = await import('eslint-config-prettier');

  const config: Linter.FlatConfig = {
    name: 'proste_prettier_config',
    rules: prettier.rules,
  };

  return config;
}
