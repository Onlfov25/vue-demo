import Vue from 'vue';
import Vuex from 'vuex';
import zhswsq from './modules/zhswsq';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    zhswsq
  }
});
