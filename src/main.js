import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vuetable from 'vuetable-2/src/components/Vuetable';
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination';
import VuetablePaginationDropdown from 'vuetable-2/src/components/VuetablePaginationDropdown';
import App from './App';
import Router from './routes';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.component('vuetable', Vuetable);
Vue.component('vuetable-pagination', VuetablePagination);
Vue.component('vuetable-pagination-dropdown', VuetablePaginationDropdown);

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
