<template>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>Vue Task App</h1>
      </section>
      <!-- Main content -->
      <section class="content">
        <transition>
          <router-view></router-view>
        </transition>
      </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
  export default {
    name: 'Content',
    data() {
      return {
      };
    },
  };
</script>