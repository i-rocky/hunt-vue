import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);

import Hunt from './config/Hunt'

import './config/mixin'

import store from './store'
import router from './router'

Vue.http.headers.common['Authentication'] = 'Bearer ' + Hunt._token;

const app = new Vue({
    store,
    router
}).$mount('#app');
