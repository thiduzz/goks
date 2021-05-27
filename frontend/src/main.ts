import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.config.devtools = true;

import * as Wails from '@wailsapp/runtime';
import router from './router'
import store from './store'
import './assets/css/tailwind.css'

Wails.Init(() => {
	new Vue({
        router,
        store,
        render: h => h(App),
        mounted() {
            this.$router.replace('/')
        },
    }).$mount('#app');
});
