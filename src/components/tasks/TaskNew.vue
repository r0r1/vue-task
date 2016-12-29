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

            <div class="form-group">
              <label for="parent" class="col-sm-2 control-label">Parent</label>
              <div class="col-sm-10">
                <select class="form-control" v-model="task.parent" id="parent">
                  <option v-for="p in allParent" v-bind:value="p.Id">
                    {{ p.Name }}
                  </option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="parent" class="col-sm-2 control-label">User</label>
              <div class="col-sm-10">
                <select class="form-control" v-model="task.user" id="user">
                  <option v-for="u in allUser" v-bind:value="u.Id">
                    {{ u.Name }}
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
                  <option v-for="s in allStatus" v-bind:value="s.Id">
                    {{ s.Name }}
                  </option>
                </select>
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
            <button type="submit" class="btn btn-primary pull-right">Sign in</button>
          </div>
          <!-- /.box-footer -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
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
        },
        priorities: [
          { text: '1', value: 1 },
          { text: '2', value: 2 },
          { text: '3', value: 3 },
          { text: '4', value: 4 },
          { text: '5', value: 5 },
        ],
        allStatus: this.getStatus() || [],
        allUser: this.getUsers() || [],
        allParent: this.getParents(),
        errors: [],
      };
    },
    methods: {
      addTask() {
        this.errors = [];
        this.$http.post('http://localhost:8080/api/v1/tasks', this.task)
        .then((response) => {
          if (response.data.id) {
            this.$router.replace('/tasks/list');
          }
        }, (res) => {
          this.errors.push(res.data);
        });
      },
      getStatus() {
        this.$http.get('http://localhost:8080/api/v1/statuses').then((response) => {
          this.allStatus = response.data;
        });
      },
      getUsers() {
        this.$http.get('http://localhost:8080/api/v1/users').then((response) => {
          this.allUser = response.data;
        });
      },
      getParents() {
        this.$http.get('http://localhost:8080/api/v1/tasks').then((response) => {
          const defaultParent = [{ id: 0, Name: 'Parent' }];
          if (response.data == null) {
            this.allParent = defaultParent;
          } else {
            this.allParent = defaultParent;
            response.data.forEach((val) => {
              this.allParent.push(val);
            });
          }
        });
      },
    },
  };
</script>