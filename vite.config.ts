import { defineConfig, Plugin } from 'vite';
import reactPlugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactPlugin as unknown as Plugin],
});
