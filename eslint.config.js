import eslintConfig from './dist/index.js';
import process from 'node:process';

export default eslintConfig({
  ts: {
    parseOptions: {
      project: 'tsconfig.json',
      tsconfigRootDir: process.cwd(),
    },
  },
  prettier: false,
});
