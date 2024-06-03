import type {Linter} from 'eslint';
import process from 'node:process';
import tsRules from '@rules/ts';
import type {BaseConfigOptions} from '@utils/types';

type Config = {
  tsconfigPath?: string;
  files?: string[];
  exts?: string[];
};

export async function getTypescriptConfig({
  overrides,
  tsconfigPath,
  files = [],
  exts = [],
}: BaseConfigOptions<Config>): Promise<Linter.FlatConfig> {
  const {default: tsPlugin} = await import('@typescript-eslint/eslint-plugin'),
    {default: tsParse} = await import('@typescript-eslint/parser');

  return {
    name: 'proste_typescript_config',
    files: ['**/*.?([cm])ts?(x)', ...files],
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
        extraFileExtensions: exts,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin as any,
    },
    rules: {
      ...tsPlugin.configs['eslint-recommended'].overrides![0].rules,
      ...tsPlugin.configs.recommended.rules!,
      ...tsRules,
      ...overrides,
    },
  };
}
