<template>
  <div class="row">
    <div class="col-sm-12 col-md-12">
      <router-link to="/tasks/new" class="btn btn-info pull-right">
        <i class="fa fa-plus"></i> Add Tag
      </router-link>
      <br>
      <br>
      <div class="clearfix"></div>

      <div class="box">
        <div class="box-header">
          <h3 class="box-title">Tag List</h3>
          <div class="box-tools">
              <input name="query" v-model="searchQuery" class="form-control pull-right" placeholder="Search">
          </div>
        </div>
        <!-- /.box-header -->
        <div class="box-body table-responsive no-padding">
          <table-lte
            :data="items"
            :columns="gridColumns"
            :filter-key="searchQuery"
            :actions="itemActions"
          >
          </table-lte>
        </div>
        <!-- /.box-body -->
        
        <modal-lte 
          confirm=false
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
  name: 'TagList',
  data() {
  },
};
</script>