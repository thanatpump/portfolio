import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/portfolio/',
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
    build: {
        outDir: 'dist',
        assetsDir: '',
        manifest: true,
        rollupOptions: {
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
        },
    },
    esbuild: {
        loader: 'jsx',
        include: /.*\.jsx?$/,
        exclude: [],
    },
});
