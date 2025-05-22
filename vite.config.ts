import react from '@vitejs/plugin-react';
import { defineConfig, type UserConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitestSetup.ts',
  },
} as UserConfig);
