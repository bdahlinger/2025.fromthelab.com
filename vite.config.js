import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { resolve } from "path"
import path from "path"

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.ts',
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "resources/js"),
            "ziggy-js": path.resolve("vendor/tightenco/ziggy/dist"),
        },
    },
    esbuild: {
        include: /\.ts$/,
        exclude: /node_modules/,
    },
});
