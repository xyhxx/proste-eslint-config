# eslint-config-proste


## eslint_js

```
npm install eslint -D
```

or

```
yarn add eslint -D
```

``` json
// .eslintrc.json

{
  "extends": "proste/eslint_js.js"
}
```

## eslint_ts

``` 
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

or

```
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
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
npm install eslint eslint-plugin-react -D
```

or

```
yarn add eslint eslint-plugin-react -D
```

``` json
// .eslintrc.json
{
  "extends": "proste/eslint_react.js"
}
```

## eslint_react_ts

``` 
npm install eslint eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```

or 

```
yarn add eslint eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
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