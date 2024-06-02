import type {Linter} from 'eslint';
import process from 'node:process';
import tsRules from '@rules/ts';
import {rulesRename} from '@utils/rename';

export async function getTypescriptConfig(
  tsconfigPath?: string,
): Promise<Linter.FlatConfig> {
  const {default: tsPlugin} = await import('@typescript-eslint/eslint-plugin'),
    {default: tsParse} = await import('@typescript-eslint/parser');

  return {
    name: 'proste_typescript_config',
    files: ['**/*.?([cm])ts?(x)'],
    languageOptions: {
      parser: tsParse,
      parserOptions: {
        sourceType: 'module',
        ...(tsconfigPath
          ? {
              project: tsconfigPath,
              tsconfigRootDir: process.cwd(),
            }
          : {}),
      },
    },
    plugins: {
      typescript: tsPlugin as any,
    },
    rules: {
      ...rulesRename(
        tsPlugin.configs['eslint-recommended'].overrides![0].rules!,
      ),
      ...rulesRename(tsPlugin.configs.recommended.rules!),
      ...rulesRename(tsRules),
    },
  };
}
