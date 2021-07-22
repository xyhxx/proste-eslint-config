<img src="https://raw.githubusercontent.com/xyhxx/program_preview/master/logo/eslint-config.png" />

## eslint_js

```
npm install eslint eslint-config-proste -D
```

or

```
yarn add eslint eslint-config-proste -D
```

``` json
// .eslintrc.json

{
  "extends": "proste/eslint_js.js"
}
```

## eslint_ts

``` 
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-proste -D
```

or

```
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-proste -D
```

``` json
// .eslintrc.json
{
  "extends": "./eslint_ts.js",
  "parserOptions": {
    "project": "./tsconfig.json",
    "tsconfigRootDir": ".",
    "ecmaVersion": "latest",
    "sourceType": "module",
}
```

## eslint_react

```
npm install eslint eslint-plugin-react eslint-config-proste -D
```

or

```
yarn add eslint eslint-plugin-react eslint-config-proste -D
```

``` json
// .eslintrc.json
{
  "extends": "proste/eslint_react.js"
}
```

## eslint_react_ts

``` 
npm install eslint eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-proste -D
```

or 

```
yarn add eslint eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-proste -D
```

``` json
// .eslintrc.json
{
  "extends": "proste/eslint_react_ts.js",
  "parserOptions": {
    "project": "./tsconfig.json",
    "tsconfigRootDir": ".",
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    },
    "warnOnUnsupportedTypeScriptVersion": true
  }
}
```