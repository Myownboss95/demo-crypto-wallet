import { createApp, h } from 'vue'
import { createInertiaApp, Link, Head } from '@inertiajs/vue3'
import { importPageComponent } from '@/scripts/vite/import-page-component'
import { createPinia } from 'pinia';
import route from 'ziggy-js'

const pinia = createPinia();


import "@/assets/css/preloader.css"
import "@/assets/css/bootstrap.css"
import "@/assets/css/icons.css"
// import "@/assets/css/app.css"
import "bootstrap"
import "@/assets/bootstrap.bundle.min.js";
import 'simplebar';
import 'simplebar/dist/simplebar.css'

import 'izitoast/dist/css/iziToast.css'

import { translations } from './mixins/translations';
import { format_money } from './mixins/money';

import AuthVue from '@/views/layouts/auth.vue';
import DefaultVue from '@/views/layouts/default.vue';

// import vGoogleTranslate from "v-google-translate";

createInertiaApp({
    title: title => `${ title } - ${ import.meta.env.VITE_APP_NAME }`,
    resolve: async (name) => {
        let page_dir = window.location.toString().includes('user') ? 'userpages' : 'pages';
        const { default: page } = await importPageComponent(name, import.meta.glob(`../views/pages/**/*.vue`)) 

        if (name.startsWith('auth.')) {
            import("@/assets/css/app.css");
            page.layout = AuthVue;
        } else {
            page.layout = DefaultVue;
        }
        return page;
    },
    setup({ el, App, props, plugin }) {
        const vue = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(pinia)
            // .use(vGoogleTranslate)
            .mixin(translations)
            .mixin(format_money)
            .mixin({ methods: { route } })
            .component('Head', Head)
            .component('InertiaLink', Link);

        vue.config.globalProperties.$appName = import.meta.env.VITE_APP_NAME;


        vue.mount(el)
    },
});


