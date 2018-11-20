import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bdcCount: 0,
    zhswCount: 0
  },
  getters: {
    sum: (state) => {
      return state.bdcCount + state.zhswCount;
    }
  },
  mutations: {
    countCount (state) {
      state.bdcCount += 1
    },
    reactActon (state) {
      state.zhswCount += 5
    }
  },
  actions: {
    getCount ({commit}) {
      // const [bdcCont, zhswCount] = await Promise.all([
      //   axios.get('/service/fnmobile/bdcwaittask/getCount'),
      //   axios.get('/service/fnmobile/oawaittask/getCount')
      // ]);
      setTimeout(() => {
        commit('reactActon');
      }, 2000)
    }
  }
});
