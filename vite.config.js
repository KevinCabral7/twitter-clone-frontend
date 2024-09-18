import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    base: '/',
    plugins: [react()],
    server: {
        host: '0.0.0.0',
        port: 3000,
    },
    preview: {
        host: '0.0.0.0',
        port: 8000,
    },
    build: {
        target: 'esnext',
        modulePreload: { polyfill: false }, // Certifica que está usando ESM nativo
        outDir: 'dist',
        rollupOptions: {
            output: {
                format: 'es', // Saída em formato ESM
            },
        },
    },
});
