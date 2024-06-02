import eslintConfig from './dist/index.js';

export default eslintConfig({
  tsProjectPath: './tsconfig.json',
  ts: true,
  prettier: true,
});
