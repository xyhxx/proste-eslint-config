import type {BaseEnableOption, EnableOption} from './types';

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
  options: EnableOption<{version?: 2 | 3}>,
): ResolveOptions<{version: 2 | 3}> {
  return typeof options === 'boolean'
    ? {
        enable: options,
        version: 3 as const,
        overrides: {},
      }
    : {version: 3, ...options, enable: true};
}
