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
                <input type="text" v-model="task.name" class="form-control" id="name" placeholder="Name" required>
              </div>
            </div>

            <div class="form-group">
              <label for="parent" class="col-sm-2 control-label">Parent</label>
              <div class="col-sm-10">
                <select class="form-control" v-model="task.parent" id="parent">
                  <option v-for="p in items" v-bind:value="p.ID">
                    {{ p.name }}
                  </option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="parent" class="col-sm-2 control-label">User</label>
              <div class="col-sm-10">
                <select class="form-control" v-model="task.user" id="user">
                  <option v-for="u in allUser" v-bind:value="u">
                    {{ u.name }}
                  </option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="priority_id" class="col-sm-2 control-label">Priority</label>
              <div class="col-sm-10">
                <select class="form-control" v-model="task.priority" id="priority">
                  <option v-for="p in priorities" v-bind:value="p.value">
                    {{ p.text }}
                  </option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="priority_id" class="col-sm-2 control-label">Status</label>
              <div class="col-sm-10">
                <select class="form-control" v-model="task.status" id="status">
                  <option v-for="s in allStatus" v-bind:value="s.value">
                    {{ s.text }}
                  </option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="tags" class="col-sm-2 control-label">Tags</label>
              <div class="col-sm-10">
                <multiselect 
                  v-model="tags" 
                  tag-placeholder="Add this as new tag" 
                  placeholder="Search or add a tag" 
                  label="name" 
                  track-by="code" 
                  :options="options" 
                  :multiple="true" 
                  :taggable="true" 
                  @tag="addTag">
                </multiselect>
              </div>
            </div>

            
            <div class="form-group">
              <label for="description" class="col-sm-2 control-label">Description</label>
              <div class="col-sm-10">
                <textarea v-model="task.description" class="form-control">
                </textarea>
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
import Multiselect from 'vue-multiselect';
import taskService from './../../services/task';
import userService from './../../services/user';

export default {
  name: 'TaskNew',
  data() {
    return {
      task: {
        name: null,
        description: null,
        parent: null,
        status: null,
        priority: null,
        user: null,
        tags: [],
      },
      priorities: [
        { text: '1', value: 1 },
        { text: '2', value: 2 },
        { text: '3', value: 3 },
        { text: '4', value: 4 },
        { text: '5', value: 5 },
      ],
      allStatus: [
        { text: 'Progress', value: 'progress' },
        { text: 'Pending', value: 'pending' },
        { text: 'Complete', value: 'complete' },
      ],
      allUser: this.getUsers() || [],
      items: this.getParents() || [],
      errors: [],
      tags: [],
      options: [],
    };
  },
  methods: {
    addTask() {
      this.errors = [];
      this.task.tags = this.tags;
      taskService.store(this, this.task, '/tasks/list');
    },
    getUsers() {
      userService.all(this);
    },
    getParents() {
      taskService.all(this, true);
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000)),
      };
      this.options.push(tag);
      this.tags.push(tag);
    },
  },
  components: {
    Multiselect,
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
