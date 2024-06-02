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
import {getRegexp} from '@configs/regexp';
import {getVueConfig} from '@configs/vue';
import {isPackageExists} from 'local-pkg';

export type EslintConfigOptions = {
  tsProjectPath?: string;
  ignores?: Linter.FlatConfig['ignores'];
  react?: boolean;
  ts?: boolean;
  prettier?: boolean;
  unicorn?: boolean;
  vitestGlobals?: boolean;
  jsxA11y?: boolean;
  regexp?: boolean;
  vue?: boolean | {version: 2 | 3};
};

const BASE_IGNORES = [
  '**/node_modules',
  '**/dist',
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/CHANGELOG.md',
  '**/LICENSE',
];

type MaybePromise<T> = T | Promise<T>;

export default async function eslintConfig(
  options?: EslintConfigOptions,
  configs: MaybePromise<
    Linter.FlatConfig | FlatConfigComposer<any, any>
  >[] = [],
) {
  const {
    tsProjectPath,
    ignores = BASE_IGNORES,
    react: enableReact = isPackageExists('react'),
    ts: enableTypescript = isPackageExists('typescript'),
    prettier: enablePrettier = isPackageExists('prettier'),
    unicorn: enableUnicorn = true,
    vitestGlobals = true,
    jsxA11y: enableJsxA11y = false,
    regexp: enableRegexp = true,
    vue: enableVue = isPackageExists('vue'),
  } = options ?? {};

  const vueOptions =
    typeof enableVue === 'boolean'
      ? {
          enable: enableVue,
          version: 3 as const,
        }
      : {
          enable: true,
          version: enableVue.version,
        };

  const configList: MaybePromise<Linter.FlatConfig>[] = [
    {
      ignores,
    },
    base,
    enableUnicorn && getUnicornConfig(),
    enableTypescript && getTypescriptConfig(tsProjectPath),
    getImportConfig(),
    enableReact && getReactConfig(),
    vitestGlobals && getVitestConfig(),
    enableJsxA11y && getJsxA11yConfig(),
    enableRegexp && getRegexp(),
    vueOptions.version &&
      getVueConfig({
        enableTs: enableTypescript,
        version: vueOptions.version,
        tsProjectPath,
      }),
  ].filter(Boolean);

  const composer = new FlatConfigComposer();

  composer.append(...configList, ...(configs as any[]));

  enablePrettier && composer.append(getPrettierConfig());

  return composer;
}
