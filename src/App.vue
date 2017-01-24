<template>
  <div v-if="login">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>

  <div v-else>
    <app-master></app-master>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppHeader from './components/layouts/Header';
import AppSidebar from './components/layouts/Sidebar';
import AppContent from './components/layouts/Content';
import AppFooter from './components/layouts/Footer';
import Menus from './../config/menus';
import AppMaster from './components/auth/Auth';

export default {
  name: 'App',
  data() {
    return {
      title: null,
      menus: Menus,
    };
  },
  components: {
    AppHeader,
    AppSidebar,
    AppContent,
    AppFooter,
    AppMaster,
  },
  computed: mapGetters([
    'login',
    'logout',
  ]),
};
</script>

<style src="./assets/adminLte/css/skins/_all-skins.min.css"></style>
<style src="./assets/adminLte/css/AdminLTE.min.css"></style>
