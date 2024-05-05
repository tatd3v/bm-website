// @vendors
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [eslintPlugin(), react()],
  server: {
    host: true,
  },
  build: {
    minify: true,
  },
});
