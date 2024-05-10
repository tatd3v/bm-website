import { defineConfig } from 'vite';
import { viteSvgLoader } from 'vite-svg-loader';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './src/main.js',
      },
      output: {
        dir: 'dist',
      },
      plugins: [viteSvgLoader()],
    },
  },
});
