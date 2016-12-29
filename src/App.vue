<template>
  <div v-if="login">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>

  <div v-else>
    <login></login>
  </div>
</template>

<script>
import AppHeader from './components/layouts/Header';
import AppSidebar from './components/layouts/Sidebar';
import AppContent from './components/layouts/Content';
import AppFooter from './components/layouts/Footer';
import Menus from './../config/menus';
import Login from './components/Login';
import AuthService from './services/auth';

export default {
  name: 'App',
  data() {
    return {
      login: AuthService.user.authenticated,
      title: null,
      menus: Menus,
    };
  },
  ready() {
    AuthService.checkAuth();
  },
  components: {
    AppHeader,
    AppSidebar,
    AppContent,
    AppFooter,
    Login,
  },
};
</script>

<style src="../static/adminLte/css/skins/_all-skins.min.css"></style>
<style src="../static/adminLte/css/AdminLTE.min.css"></style>
