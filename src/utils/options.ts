import type {Linter} from 'eslint';
import type {BaseEnableOption, EnableOption} from './types';
import type {ReactVersion, VueVersion} from './internal';

type ResolveOptions<T extends Record<string, any>> = BaseEnableOption<T> & {
  enable: boolean;
};

export function resolveOptions<
  R extends Record<string, any>,
  T extends EnableOption<R>,
>(options: T): ResolveOptions<R> {
  return typeof options === 'boolean'
    ? ({enable: options} as ResolveOptions<R>)
    : {...(options as BaseEnableOption<R>), enable: true};
}

export function resolveVueOptions(
  options: EnableOption<{version?: VueVersion}>,
): ResolveOptions<{version: VueVersion}> {
  return typeof options === 'boolean'
    ? {
        enable: options,
        version: 3 as const,
        overrides: {},
      }
    : {version: 3, ...options, enable: true};
}

export function resolveTsOptions(
  options: EnableOption<{parseOptions?: Linter.ParserOptions}>,
): ResolveOptions<{parseOptions: Linter.ParserOptions}> {
  return typeof options === 'boolean'
    ? {
        enable: options,
        parseOptions: {
          tsconfigRootDir: process.cwd(),
        },
      }
    : {
        parseOptions: {
          tsconfigRootDir: process.cwd(),
        },
        ...options,
        enable: true,
      };
}

export function resolveReactOptions(
  options: EnableOption<{version?: ReactVersion}>,
): ResolveOptions<{version: ReactVersion}> {
  return typeof options === 'boolean'
    ? {
        enable: options,
        version: 'detect',
      }
    : {
        enable: true,
        version: options.version ?? 'detect',
        ...options,
      };
}
