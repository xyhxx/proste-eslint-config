import type {Linter} from 'eslint';
import rules from '@rules/vue';
import type {BaseConfigOptions} from '@utils/types';

export async function getVueConfig({
  enableTs,
  version,
  overrides,
}: BaseConfigOptions<{
  enableTs?: boolean;
  version: 2 | 3;
}>) {
  const [{default: vue}, {default: vueParser}] = await Promise.all([
    import('eslint-plugin-vue'),
    import('vue-eslint-parser'),
  ]);

  const config: Linter.Config = {
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
            ...vue.configs['essential'].rules,
            ...vue.configs['strongly-recommended'].rules,
            ...vue.configs['recommended'].rules,
          }),
      ...rules,
      ...overrides,
    },
  };

  return config;
}
