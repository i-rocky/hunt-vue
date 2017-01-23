import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX);

import modules from './modules'

const store = new VueX.Store({
    modules: modules
});

export default store;