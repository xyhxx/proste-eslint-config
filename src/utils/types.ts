import type {Linter} from 'eslint';

export type BaseEnableOption<T extends Record<string, any>> = {
  overrides?: Linter.RulesRecord;
} & T;

export type EnableOption<T extends Record<string, any> = {}> =
  | boolean
  | BaseEnableOption<T>;

export type BaseConfigOptions<T extends Record<string, unknown> = {}> = {
  overrides?: Linter.RulesRecord;
} & T;
