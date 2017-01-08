<template>
  <div class="row">
    <div class="col-sm-12 col-md-12">
      <router-link to="/tasks/new" class="btn btn-info pull-right">
        <i class="fa fa-plus"></i> Add Task
      </router-link>
      <br>
      <br>
      <div class="clearfix"></div>

      <div class="box">
        <div class="box-header">
          <h3 class="box-title">Task List</h3>
          <div class="box-tools">
              <input name="query" v-model="searchQuery" class="form-control pull-right" placeholder="Search">
          </div>
        </div>
        <!-- /.box-header -->
        <div class="box-body table-responsive no-padding">
          <table-lte
            :data="items"
            :columns="gridColumns"
            :filter-key="searchQuery">
          </table-lte>
        </div>
        <!-- /.box-body -->
      </div>   
    </div>
  </div>
</template>

<script>
import taskService from './../../services/task';
import TableLte from './../../elements/TableLte';

export default {
  name: 'TaskList',
  data() {
    return {
      errors: [],
      searchQuery: '',
      gridColumns: ['id', 'user', 'name', 'priority', 'status', 'date'],
      items: this.getData() || [],
    };
  },
  components: { 'table-lte': TableLte },
  methods: {
    getData() {
      taskService.all(this);
    },
  },
};
</script>