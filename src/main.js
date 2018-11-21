import Vue from 'vue';
import fastClick from 'fastclick';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './assets/styles/reset.css';
import './assets/styles/iconfont.css';
import './assets/styles/border.css';
import './assets/styles/common.styl';

Vue.config.productionTip = false;
fastClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
