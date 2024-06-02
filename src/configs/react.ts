import type {Linter} from 'eslint';
import rules from '../rules/react';

export async function getReactConfig() {
  // @ts-expect-error
  const react = (await import('eslint-plugin-react')).default,
    // @ts-expect-error
    reactHooks = (await import('eslint-plugin-react-hooks')).default,
    // @ts-expect-error
    reactRefresh = (await import('eslint-plugin-react-refresh')).default,
    // @ts-expect-error
    reactCompiler = (await import('eslint-plugin-react-compiler')).default;

  const config: Linter.FlatConfig = {
    name: 'proste_react_config',
    files: ['**/*.?([cm])?([tj])sx'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react-compiler': reactCompiler,
    },
    settings: {
      react: {
        version: 'detect',
      },
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
      ...reactHooks.configs.recommended.rules,
      ...rules,
    },
  };

  return config;
}
