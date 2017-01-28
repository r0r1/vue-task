<template>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>Vue Task App</h1>
      </section>
      <!-- Main content -->
      <section class="content">
        <div v-if="successMessage" class="alert alert-success">
          <a href="#" class="close" data-dismiss="alert">&times;</a>
          {{ successMessage }}
        </div>
        <transition>
          <router-view></router-view>
        </transition>
      </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Content',
  data() {
    return {
    };
  },
  computed: mapGetters([
    'login',
    'logout',
    'successMessage',
  ]),
};
</script>