import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home/Home.vue';
import Zhswsq from './views/zhswsq/Zhswsq.vue';
import Qjsq from './views/zhswsq/components/Qjsq.vue';
import Zhswsp from './views/zhswsp/Zhswsp.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/zhswsq',
      name: 'zhswsq',
      component: Zhswsq
    },
    {
      path: '/qjsq',
      name: 'qjsq',
      component: Qjsq
    },
    {
      path: '/zhswsp',
      name: 'zhswsp',
      component: Zhswsp
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  }
});
