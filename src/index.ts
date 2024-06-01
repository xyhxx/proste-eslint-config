import {getTypescriptConfig} from './configs/ts';
import base from './configs/base';
import {FlatConfigComposer} from 'eslint-flat-config-utils';
import {isPackageExists} from 'local-pkg';
import type {Linter} from 'eslint';
import {getImportConfig} from './configs/import';

export type EslintConfigOptions = {
  tsProjectPath?: string;
  react?: boolean;
  vue?: boolean;
  ts?: boolean;
  ignores?: Linter.FlatConfig['ignores'];
};

export default async function eslintConfig({
  tsProjectPath,
  react: enableReact = isPackageExists('react'),
  vue: enableVue = isPackageExists('vue'),
  ts: enableTypescript = isPackageExists('typescript'),
  ignores,
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

  composer.append(base);

  composer.append(getImportConfig());

  enableTypescript && composer.append(getTypescriptConfig(tsProjectPath));

  return composer;
}
