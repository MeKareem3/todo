import { definConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default definConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  }
})