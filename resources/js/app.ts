import './bootstrap';
import '../css/app.css';
import { createPinia } from 'pinia';
import { createApp, h, DefineComponent } from 'vue';
import { createInertiaApp, router } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from "ziggy-js"
//import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { ref, Ref } from 'vue'; // For reactive previousUrl
import FloatingVue from 'floating-vue';
import 'floating-vue/dist/style.css';
import { useProjectStore } from '@/Stores/projectStore';
const appName: string = import.meta.env.VITE_APP_NAME || 'Laravel'


const pinia = createPinia()
//pinia.use(piniaPluginPersistedstate)

const previousUrl = ref('')

// Inertia event listener for previousUrl
router.on('before', (event) => {
    previousUrl.value = window.location.pathname;
})

createInertiaApp({
    title: (title: string): string => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob<DefineComponent>("./Pages/**/*.vue")),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(pinia)
            .use(FloatingVue)
            .provide('previousUrl', previousUrl)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
})

