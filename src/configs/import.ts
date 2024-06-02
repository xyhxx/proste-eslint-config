import type {Linter} from 'eslint';
// eslint-disable-next-line typescript/ban-ts-comment
// @ts-expect-error
import importPlugin from 'eslint-plugin-import';
import importRules from '@rules/import';

export function getImportConfig() {
  const config: Linter.FlatConfig = {
    plugins: {import: importPlugin as any},
    rules: importRules,
  };

  return config;
}
