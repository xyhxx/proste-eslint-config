import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';

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
        'eslint-plugin-import',
        'globals',
        'local-pkg',
        '@typescript-eslint/eslint-plugin',
        '@typescript-eslint/parser',
        'node:process',
        'path',
      ],
      output: {
        preserveModulesRoot: './src',
        preserveModules: true,
      },
    },
  },
});
