// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd());

    const Port = `${env.PORT ?? '3000'}`;
    return defineConfig({
        base: '/',
        plugins: [react()],
        server: {
            host: '0.0.0.0',
            port: 3000,
        },
        preview: {
            host: '0.0.0.0',
            port: Port,
        },
    });
};
