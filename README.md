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
- Prttier
- Vue
- Unicorn
- JSX-A11y

In most cases, the configuration will automatically start.
use[local-pkg](https://www.npmjs.com/package/local-pkg).

You can also turn on or off and rewrite the rules yourself.

```ts
export type BaseEnableOption<T extends Record<string, any>> = {
  overrides?: Linter.RulesRecord;
} & T;

export type EnableOption<T extends Record<string, any> = object> =
  | boolean
  | BaseEnableOption<T>;

export type BaseConfigOptions<T extends Record<string, any> = object> = {
  overrides?: Linter.RulesRecord;
} & T;

type EslintConfigOptions = {
  ignores?: Linter.FlatConfig['ignores'];
  react?: EnableOption;
  ts?: EnableOption<{
    parseOptions?: Linter.ParserOptions;
  }>;
  prettier?: EnableOption;
  unicorn?: EnableOption;
  vitestGlobals?: EnableOption;
  jsxA11y?: EnableOption;
  vue?: EnableOption<{version?: 2 | 3}>;
  js?: EnableOption;
  import?: EnableOption;
};
```
