import type {Linter} from 'eslint';

export async function getVitestConfig() {
  const {default: vitest} = await import('@vitest/eslint-plugin');

  const config: Linter.Config = {
    name: 'proste_vitest_config',
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
  };

  return config;
}
