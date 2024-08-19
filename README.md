<img src="https://raw.githubusercontent.com/xyhxx/program_preview/master/logo/eslint-config.png" />

support flat config

# Usage

```js
// eslint.config.js

import eslintConfig from 'eslint-config-proste';
import process from 'node:process';

export default eslintConfig({
  ts: {
    parseOptions: {
      project: 'tsconfig.json',
      tsconfigRootDir: process.cwd(),
    },
  },
});
```

# Support

- Typescript
- React
- Import
- Prettier
- Vue
- Unicorn
- JSX-A11y

In most cases, the configuration will automatically start.
use[local-pkg](https://www.npmjs.com/package/local-pkg).

You can also turn on or off and rewrite the rules yourself.

```ts
export type VueVersion = 2 | 3;
export type ReactVersion = 'detect' | Omit<string, 'detect'>;

export type BaseEnableOption<T extends Record<string, any>> = {
  overrides?: Linter.RulesRecord;
} & T;
export type EnableOption<T extends Record<string, any> = object> =
  | boolean
  | BaseEnableOption<T>;
export type BaseConfigOptions<T extends Record<string, any> = object> = {
  overrides?: Linter.RulesRecord;
} & T;

export type EslintConfigOptions = {
  ignores?: Linter.FlatConfig['ignores'];
  react?: EnableOption<{
    version?: ReactVersion;
  }>;
  ts?: EnableOption<{
    parseOptions?: Linter.ParserOptions;
  }>;
  prettier?: EnableOption;
  unicorn?: EnableOption;
  vitestGlobals?: EnableOption;
  jsxA11y?: EnableOption;
  vue?: EnableOption<{
    version?: 2 | 3;
  }>;
  js?: EnableOption;
  import?: EnableOption;
};
type MaybePromise<T> = T | Promise<T>;
```
