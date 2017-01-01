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
            <div class="input-group input-group-sm" v-if="tasks.length > 0 || tasks == null" style="width: 150px;">
              <input type="text" name="table_search" class="form-control pull-right" placeholder="Search">
              <div class="input-group-btn">
                <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
              </div>
            </div>
          </div>
        </div>
        <!-- /.box-header -->
        <div class="box-body table-responsive no-padding">
          <table class="table table-hover" v-if="tasks.length > 0 || tasks == null">
            <tbody>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Date</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Description</th>
              </tr>
              <tr v-for="task in tasks">
                <td>{{ task.Id }}</td>
                <td>{{ task.User.Name }}</td>
                <td>{{ task.Created }}</td>
                <td><span :class="task.Status.Label">{{ task.Status.Name }}</span></td>
                <td>{{ task.Priority }}</td>
                <td>{{ task.Description }}</td>
              </tr>
            </tbody>
          </table>

          <div v-else class="alert alert-info">
            Task list empty.
          </div>
        </div>
        <!-- /.box-body -->
      </div>   
    </div>
  </div>
</template>

<script>
import taskService from './../../services/task';

export default {
  name: 'TaskList',
  data() {
    return {
      tasks: this.getData() || [],
    };
  },
  methods: {
    getData() {
      taskService.all(this);
    },
  },
};
</script>