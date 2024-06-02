import type {Linter} from 'eslint';

export async function getRegexp() {
  const {default: regexp} = await import('eslint-plugin-regexp');

  const config: Linter.FlatConfig = {
    name: 'proste_regexp_config',
    ...regexp.configs['flat/all'],
  };

  return config;
}
