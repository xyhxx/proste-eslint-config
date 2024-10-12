import type {Linter} from 'eslint';
import rules from '@rules/jsxA11y';
import type {BaseConfigOptions} from '@utils/types';

export async function getJsxA11yConfig({overrides}: BaseConfigOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const {default: jsxA11y} = await import('eslint-plugin-jsx-a11y');

  const config: Linter.Config = {
    name: 'proste_jsx_a11y_config',
    files: ['**/*.?([cm])?([tj])sx'],
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...jsxA11y.flatConfigs.recommended.rules,
      ...rules,
      ...overrides,
    },
  };

  return config;
}
