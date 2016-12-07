<template>
  <div id="admin-lte">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/layouts/Header';
import AppSidebar from './components/layouts/Sidebar';
import AppContent from './components/layouts/Content';
import AppFooter from './components/layouts/Footer';
import Menus from './../config/menus';

export default {
  name: 'App',
  data() {
    return {
      login: true,
      title: null,
      menus: Menus,
    };
  },
  components: {
    AppHeader,
    AppSidebar,
    AppContent,
    AppFooter,
  },
};
</script>

<style src="../static/adminLte/css/skins/_all-skins.min.css"></style>
<style src="../static/adminLte/css/AdminLTE.min.css"></style>
