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
            :name="task-list"
            :data="items"
            :columns="gridColumns"
            :filter-key="searchQuery"
            :actions="itemActions"
          >
          </table-lte>
        </div>
        <!-- /.box-body -->
        
        <modal-lte 
          title="Delete Task"
          body="Are you sure want delete this task ?">
        </modal-lte>
      </div>   
    </div>
  </div>
</template>

<script>
import taskService from './../../services/task';
import TableLte from './../../elements/TableLte';
import ModalLte from './../../elements/ModalLte';

export default {
  name: 'TaskList',
  data() {
    return {
      errors: [],
      searchQuery: '',
      gridColumns: ['id', 'user', 'name', 'priority', 'status', 'date'],
      itemActions: [
        { name: 'add-notes', label: '', icon: 'fa fa-plus', modal: true },
        { name: 'detail-item', label: '', icon: 'fa fa-eye-open', modal: false },
        { name: 'edit-item', label: '', icon: 'fa fa-edit', modal: false },
        { name: 'delete-item', label: '', icon: 'fa fa-trash-o', modal: true },
      ],
      items: this.getData() || [],
    };
  },
  components: { TableLte, ModalLte },
  methods: {
    getData() {
      taskService.all(this);
    },
  },
};
</script>