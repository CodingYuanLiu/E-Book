import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user.js';
import cart from './modules/cart.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        user,
        cart
    }
});

export default store;