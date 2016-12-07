import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Router from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  routes: Router,
});

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
});
