import type {Linter} from 'eslint';
import importPlugin from 'eslint-plugin-import-x';
import rules from '@rules/import';
import type {BaseConfigOptions} from '@utils/types';

export async function getImportConfig({
  overrides,
  enableTs,
}: BaseConfigOptions & {enableTs: boolean}) {
  const config: Linter.Config = {
    plugins: {import: importPlugin as any},
    rules: {
      ...rules,
      ...overrides,
    },
  };

  if (enableTs) {
    const {default: tsParser} = await import('@typescript-eslint/parser');

    config.languageOptions = {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    };
  }

  return config;
}
