import './bootstrap';
import '../css/app.css';
import { createPinia } from "pinia"
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(pinia)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});

