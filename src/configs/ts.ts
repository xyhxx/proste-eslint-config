import type {Linter} from 'eslint';
import tsRules from '@rules/ts';
import type {BaseConfigOptions} from '@utils/types';

type Config = {
  files?: string[];
  exts?: string[];
  parseOptions: Linter.ParserOptions;
};

export async function getTypescriptConfig({
  overrides,
  files = [],
  exts = [],
  parseOptions,
}: BaseConfigOptions<Config>): Promise<Linter.FlatConfig> {
  const [{default: tsPlugin}, {default: tsParse}] = await Promise.all([
    import('@typescript-eslint/eslint-plugin'),
    import('@typescript-eslint/parser'),
  ]);

  return {
    name: 'proste_typescript_config',
    files: ['**/*.?([cm])ts?(x)', ...files],
    languageOptions: {
      parser: tsParse,
      parserOptions: {
        sourceType: 'module',
        extraFileExtensions: exts,
        ...parseOptions,
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
