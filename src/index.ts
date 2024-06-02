import {getTypescriptConfig} from '@configs/ts';
import base from '@configs/base';
import {FlatConfigComposer} from 'eslint-flat-config-utils';
import type {Linter} from 'eslint';
import {getImportConfig} from '@configs/import';
import {getReactConfig} from '@configs/react';
import {getPrettierConfig} from '@configs/prettier';
import {getUnicornConfig} from '@configs/unicorn';
import {getVitestConfig} from '@configs/vitest';
import {getJsxA11yConfig} from '@configs/jsxA11y';

export type EslintConfigOptions = {
  tsProjectPath?: string;
  react?: boolean;
  ts?: boolean;
  prettier?: boolean;
  unicorn?: boolean;
  vitestGlobals?: boolean;
  jsxA11y?: boolean;
  ignores?: Linter.FlatConfig['ignores'];
};

type MaybePromise<T> = T | Promise<T>;

export default async function eslintConfig(
  options?: EslintConfigOptions,
  configs: MaybePromise<
    Linter.FlatConfig | FlatConfigComposer<any, any>
  >[] = [],
) {
  const {
    tsProjectPath,
    ignores,
    react: enableReact = false,
    ts: enableTypescript = false,
    prettier: enablePrettier = false,
    unicorn: enableUnicorn = true,
    vitestGlobals = true,
    jsxA11y: enableJsxA11y = false,
  } = options ?? {};

  const configList: MaybePromise<Linter.FlatConfig>[] = [
    {
      ignores: ignores ?? [
        '**/node_modules',
        '**/dist',
        '**/package-lock.json',
        '**/yarn.lock',
        '**/pnpm-lock.yaml',
        '**/CHANGELOG.md',
        '**/LICENSE',
      ],
    },
    base,
    enableUnicorn && getUnicornConfig(),
    enableTypescript && getTypescriptConfig(tsProjectPath),
    getImportConfig(),
    enableReact && getReactConfig(),
    vitestGlobals && getVitestConfig(),
    enableJsxA11y && getJsxA11yConfig(),
  ].filter(Boolean);

  const composer = new FlatConfigComposer();

  composer.append(...configList, ...(configs as any[]));

  enablePrettier && composer.append(getPrettierConfig());

  return composer;
}
