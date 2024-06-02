import type {Linter} from 'eslint';
import rules from '@rules/vue';

export async function getVueConfig(options: {
  enableTs?: boolean;
  tsProjectPath?: string;
  version: 2 | 3;
}) {
  const [{default: vue}, {default: vueParser}] = await Promise.all([
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    import('eslint-plugin-vue'),
    import('vue-eslint-parser'),
  ]);

  const {enableTs, tsProjectPath, version = 3} = options ?? {};

  const config: Linter.FlatConfig = {
    name: 'proste_vue_config',
    files: ['**/*.vue'],
    plugins: {
      vue,
    },
    processor: vue.processors.vue,
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        extraFileExtensions: ['.vue'],
        parser: enableTs
          ? // eslint-disable-next-line unicorn/no-await-expression-member
            (await import('@typescript-eslint/parser')).default
          : null,
        sourceType: 'module',
        project: tsProjectPath,
        tsconfigRootDir: process.cwd(),
      },
    },
    rules: {
      ...vue.configs.base.rules,
      ...(version === 2
        ? {
            ...vue.configs.essential.rules,
            ...vue.configs['strongly-recommended'].rules,
            ...vue.configs.recommended.rules,
          }
        : {
            ...vue.configs['vue3-essential'].rules,
            ...vue.configs['vue3-strongly-recommended'].rules,
            ...vue.configs['vue3-recommended'].rules,
          }),
      ...rules,
    },
  };

  return config;
}
