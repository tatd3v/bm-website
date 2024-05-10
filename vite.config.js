import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import viteSvgLoader from 'vite-svg-loader';
import url from '@rollup/plugin-url';
import path from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      expernal: [/^node:.*/],
      input: {
        main: './src/main.jsx',
      },
      output: {
        dir: 'dist',
      },
      plugins: [
        eslintPlugin(),
        react(),
        url({
          include: ['**/*.mp4', '**/*.webm'],
          limit: Infinity,
          emitFiles: true,
          publicPath: '/videos/',
        }),
        viteSvgLoader(),
      ],
    },
    assetsInclude: ['**/*.webm', '**/*.mp4', '**/*.ogv'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      app: path.resolve(__dirname, './src/app/index.js'),
      assets: path.resolve(__dirname, './src/assets/index.js'),
      components: path.resolve(__dirname, './src/components/index.js'),
      helpers: path.resolve(__dirname, './src/helpers/index.js'),
      pages: path.resolve(__dirname, './src/pages/index.js'),
      router: path.resolve(__dirname, './src/routes/index.js'),
      styles: path.resolve(__dirname, './src/styles/index.js'),
    },
  },
  server: {
    host: true,
  },
});
