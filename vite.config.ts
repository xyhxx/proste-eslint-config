import {resolve} from 'path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';

function alias(name: string) {
  return resolve(process.cwd(), 'src', name);
}

export default defineConfig({
  plugins: [
    dts({
      copyDtsFiles: true,
      include: ['./src'],
    }),
  ],
  esbuild: {
    minifyIdentifiers: false,
  },
  build: {
    emptyOutDir: true,
    target: 'esnext',
    lib: {
      entry: './src/index.ts',
      formats: ['es'],
      name: `eslingConfigProste`,
      fileName: (_, name) => name + '.js',
    },
    rollupOptions: {
      external: [
        'eslint',
        '@eslint/js',
        'eslint-flat-config-utils',
        'eslint-plugin-import-x',
        'globals',
        'local-pkg',
        '@typescript-eslint/eslint-plugin',
        '@typescript-eslint/parser',
        'node:process',
        'path',
        'eslint-plugin-unicorn',
        'eslint-plugin-react-refresh',
        'eslint-plugin-react-hooks',
        'eslint-plugin-react-compiler',
        'eslint-plugin-react',
        'eslint-config-prettier',
        '@vitest/eslint-plugin',
        'eslint-plugin-jsx-a11y',
        'vue-eslint-parser',
        'eslint-plugin-vue',
        'local-pkg',
        '@eslint-react/eslint-plugin',
      ],
      output: {
        preserveModulesRoot: './src',
        preserveModules: true,
      },
    },
  },
  resolve: {
    alias: {
      '@configs': alias('configs'),
      '@rules': alias('rules'),
      '@utils': alias('utils'),
    },
  },
});
