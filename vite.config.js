import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    server: {
      // hmr: mode === 'development', // Enable HMR only in development mode
      hmr: false // Disable HMR

    },
  };
});
