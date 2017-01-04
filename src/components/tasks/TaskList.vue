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
            <div class="input-group input-group-sm" v-if="items.length > 0 || items == null" style="width: 150px;">
              <input type="text" name="table_search" class="form-control pull-right" placeholder="Search">
              <div class="input-group-btn">
                <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
              </div>
            </div>
          </div>
        </div>
        <!-- /.box-header -->
        <div class="box-body table-responsive no-padding">
          <table class="table table-hover" v-if="items.length > 0 || items == null">
            <tbody>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>User</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Description</th>
                <th>Date</th>
                <th>Options</th>
              </tr>
              <tr v-for="task in items">
                <td>{{ task.ID }}</td>
                <td>{{ task.name }}</td>
                <td>{{ task.User.name }}</td>
                <td>
                  <span v-if="task.status === 'progress'" class="label label-info">
                    {{ task.status }}
                  </span>
                  <span v-else-if="task.status === 'pending'" class="label label-warning">
                    {{ task.status }}
                  </span>
                  <span v-else-if="task.status === 'complete'" class="label label-success">
                    {{ task.status }}
                  </span>
                  <span v-else class="label label-default">
                    {{ task.status }}
                  </span>
                </td>
                <td>{{ task.priority }}</td>
                <td>{{ task.description }}</td>
                <td>{{ task.CreatedAt }}</td>
                <td>
                  <router-link :to="{ name: 'edit_task', params: { taskId: task.ID }}">
                    <i class="fa fa-edit"></i>
                  </router-link>
                  <router-link :to="{ name: 'delete_task', params: { taskId: task.ID }}">
                    <i class="fa fa-trash"></i>
                  </router-link>
                </td>
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
      errors: [],
      items: this.getData() || [],
    };
  },
  methods: {
    getData() {
      taskService.all(this);
    },
  },
};
</script>