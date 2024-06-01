import type {Linter} from 'eslint';
import process from 'node:process';
import tsRules from '../rules/ts';
import {renamePluginsInRules} from 'eslint-flat-config-utils';

export async function getTypescriptConfig(
  tsconfigPath?: string,
): Promise<Linter.FlatConfig> {
  const tsPlugin = (await import('@typescript-eslint/eslint-plugin')).default,
    tsParse = (await import('@typescript-eslint/parser')).default;

  return {
    name: 'proste_typescript_config',
    files: ['**/*.?([cm])[t]s?(x)'],
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
      ts: tsPlugin as any,
    },
    rules: {
      ...renamePluginsInRules(
        tsPlugin.configs['eslint-recommended'].overrides![0].rules!,
        {'@typescript-eslint/eslint-plugin': 'ts'},
      ),
      ...renamePluginsInRules(tsPlugin.configs.recommended.rules!, {
        '@typescript-eslint/eslint-plugin': 'ts',
      }),
      ...renamePluginsInRules(tsRules, {
        '@typescript-eslint/eslint-plugin': 'ts',
      }),
    },
  };
}
