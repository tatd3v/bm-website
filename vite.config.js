// @vendors
import { defineConfig } from 'vite';
import fs from 'fs';
import react from '@vitejs/plugin-react';
import path from 'path';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig(({ mode }) => {
  const isLocal = mode !== 'production';

  let httpsConfig = false;

  if (isLocal) {
    try {
      httpsConfig = {
        key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
        cert: fs.readFileSync(path.resolve(__dirname, 'localhost.pem')),
      };
    } catch (err) {
      console.warn('⚠️ HTTPS key/cert not found, falling back to HTTP.');
    }
  }

  return {
    plugins: [EnvironmentPlugin('all'), react()],
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
    server: {
      host: true,
      port: 5173,
      https: httpsConfig,
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
        '@ui': path.resolve(__dirname, './src/components/UI')
      },
    },
  };
});
