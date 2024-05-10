import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  assetsInclude: ['**/*.webm', '**/*.mp4', '**/*.ogv'],
  plugins: [eslintPlugin(), react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    host: true,
  },
});
