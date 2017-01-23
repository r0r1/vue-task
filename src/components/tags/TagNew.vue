<template>
  <div class="row">
    <div class="col-sm-12 col-md-12">
      <div v-if="errors.length > 0">
        <div  class="alert alert-danger">
          <a href="#" class="close" data-dismiss="alert">&times;</a>
          <ul v-for="msg in errors">
              <li>Name is required</li>
          </ul>
        </div>
      </div>
      
      <div class="box">
        <form class="form-horizontal" v-on:submit.prevent="addTask()" novalidate>
          <div class="box-body">
            <div class="form-group">
              <label for="name" class="col-sm-2 control-label">Name</label>
              <div class="col-sm-10">
                <input type="text" v-model="task.name" class="form-control" id="name" placeholder="Name">
              </div>
            </div>
          </div>
          <!-- /.box-body -->
          <div class="box-footer">
            <router-link to="/tasks/list" class="btn btn-default">Cancel</router-link>
            <button type="submit" class="btn btn-primary pull-right">Submit</button>
          </div>
          <!-- /.box-footer -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import taskService from './../../services/task';
import userService from './../../services/user';

export default {
  name: 'TagNew',
  data() {
    return {
      tag: {
        name: null,
      },
      items: [],
      errors: [],
    };
  },
  methods: {
  },
};
</script>