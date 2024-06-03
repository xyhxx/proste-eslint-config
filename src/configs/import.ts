import type {Linter} from 'eslint';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import importPlugin from 'eslint-plugin-import';
import rules from '@rules/import';
import type {BaseConfigOptions} from '@utils/types';

export function getImportConfig({overrides}: BaseConfigOptions) {
  const config: Linter.FlatConfig = {
    plugins: {import: importPlugin as any},
    rules: {...rules, ...overrides},
  };

  return config;
}
