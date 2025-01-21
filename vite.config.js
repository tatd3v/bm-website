// @vendors
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  plugins: [EnvironmentPlugin('all'), eslintPlugin(), react()],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@api': path.resolve(__dirname, './src/api'),
      '@app': path.resolve(__dirname, './src/app'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
});
