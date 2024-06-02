import type {Linter} from 'eslint';

export async function getVitestConfig() {
  const {default: vitest} = await import('eslint-plugin-vitest');

  const config: Linter.FlatConfig = {
    name: 'proste_vitest_config',
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
  };

  return config;
}
