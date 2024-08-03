import type {ESLint, Linter} from 'eslint';
import rules from '@rules/react';
import type {BaseConfigOptions} from '@utils/types';

export async function getReactConfig({overrides}: BaseConfigOptions) {
  const [
    {default: react},
    {default: reactHooks},
    {default: reactRefresh},
    {default: reactCompiler},
    {default: reactEslint},
  ] = await Promise.all([
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    import('eslint-plugin-react'),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    import('eslint-plugin-react-hooks'),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    import('eslint-plugin-react-refresh'),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    import('eslint-plugin-react-compiler'),
    import('@eslint-react/eslint-plugin'),
  ]);

  const config: Linter.FlatConfig = {
    name: 'proste_react_config',
    files: ['**/*.?([cm])?([tj])s?(x)'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react-compiler': reactCompiler,
      'react-eslint': reactEslint.configs.all.plugins[
        '@eslint-react'
      ] as unknown as ESLint.Plugin,
      'react-eslint-name': reactEslint.configs.all.plugins[
        '@eslint-react/naming-convention'
      ] as unknown as ESLint.Plugin,
      'react-eslint-hooks': reactEslint.configs.all.plugins[
        '@eslint-react/hooks-extra'
      ] as unknown as ESLint.Plugin,
      'react-eslint-dom': reactEslint.configs.all.plugins[
        '@eslint-react/dom'
      ] as unknown as ESLint.Plugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...rules,
      ...overrides,
    },
  };

  return config;
}
