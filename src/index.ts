import {getTypescriptConfig} from '@configs/ts';
import base from '@configs/base';
import {FlatConfigComposer} from 'eslint-flat-config-utils';
import type {Linter} from 'eslint';
import {getImportConfig} from '@configs/import';
import {getReactConfig} from '@configs/react';
import {getPrettierConfig} from '@configs/prettier';
import {getUnicornConfig} from '@configs/unicorn';

export type EslintConfigOptions = {
  tsProjectPath?: string;
  react?: boolean;
  ts?: boolean;
  prettier?: boolean;
  unicorn?: boolean;
  ignores?: Linter.FlatConfig['ignores'];
};

export default async function eslintConfig({
  tsProjectPath,
  ignores,
  react: enableReact = false,
  ts: enableTypescript = false,
  prettier: enablePrettier = false,
  unicorn: enableUnicorn = true,
}: EslintConfigOptions) {
  const composer = new FlatConfigComposer();

  composer.append([
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
  ]);

  enableUnicorn && composer.append(getUnicornConfig());
  composer.append(base);
  enableTypescript && composer.append(getTypescriptConfig(tsProjectPath));
  composer.append(getImportConfig());
  enableReact && composer.append(getReactConfig());
  enablePrettier && composer.append(getPrettierConfig());

  return composer;
}
