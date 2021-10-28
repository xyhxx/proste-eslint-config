module.exports = {
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
  },
  "extends": [
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "./base-js.js",
    "./base-ts.js",
    "./base-react.js",
    "./base-import.js",
    "./base-env.js"
  ],
}