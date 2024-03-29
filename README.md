<img src="https://raw.githubusercontent.com/xyhxx/program_preview/master/logo/eslint-config.png" />

## javascript

```
npm install eslint eslint-config-proste eslint-plugin-import eslint-plugin-import-newlines -D
```

``` json
// .eslintrc.json

{
  "extends": "proste/javascript.js"
}
```

## typescript

``` 
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-proste eslint-plugin-import eslint-plugin-import-newlines -D
```

``` json
// .eslintrc.json
{
  "extends": "proste/typescript.js",
  "parserOptions": {
    "project": "./tsconfig.json",
    "tsconfigRootDir": "."
  }
}
```

## reactJS

```
npm install eslint eslint-plugin-react eslint-config-proste eslint-plugin-react-hooks eslint-plugin-import eslint-plugin-import-newlines -D
```

``` json
// .eslintrc.json
{
  "extends": "proste/reactJS.js"
}
```

## reactTS

``` 
npm install eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import
 @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-proste eslint-plugin-import-newlines -D
```

``` json
// .eslintrc.json
{
  "extends": "proste/reactTS.js",
  "parserOptions": {
    "project": "./tsconfig.json",
    "tsconfigRootDir": ".",
    "warnOnUnsupportedTypeScriptVersion": true
  }
}
```