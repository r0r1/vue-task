<template>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- search form -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
            <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
            </button>
          </span>
        </div>
      </form>
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu">
        <li class="header">MAIN NAVIGATION</li>
        <li class="active treeview" v-for="row in menus">
          <router-link :to="row.link">
            <i :class="row.icon"></i> 
            <span>{{ row.name }}</span> 
          </router-link>
          
          <ul v-show="row.hasOwnProperty('child') && typeof row.child.length !== undefined" class="treeview-menu">
            <li v-for="child in row.child">
              <router-link :to="child.link">
                <i :class="child.icon"></i> 
                <span>{{ child.name }}</span> 
              </router-link>
            </li>
          </ul> 
        </li>

      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Sidebar',
  data() {
    return {
      menus: this.$parent.$data.menus || [],
    };
  },
  computed: mapGetters([
    'currentUser',
  ]),
};
</script>