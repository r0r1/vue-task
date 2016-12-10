  <template>
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <div class="box">
          <form class="form-horizontal" v-on:submit="addTask()" action="#">
            <div class="box-body">
              <div class="form-group">
                <label for="name" class="col-sm-2 control-label">Name</label>
                <div class="col-sm-10">
                  <input type="text" v-model="name" class="form-control" id="name" placeholder="Name">
                </div>
              </div>

              <div class="form-group">
                <label for="parent" class="col-sm-2 control-label">Parent</label>
                <div class="col-sm-10">
                  <select class="form-control" v-model="parent" id="parent">
                    <option value="0">Parent</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="priority_id" class="col-sm-2 control-label">Priority</label>
                <div class="col-sm-10">
                  <select class="form-control" v-model="priority_id" id="priority_id">
                    <option v-for="p in priorities" v-bind:value="p.value">
                      {{ p.text }}
                    </option>
                  </select>
                </div>
              </div>
              
              <div class="form-group">
                <label for="description" class="col-sm-2 control-label">Description</label>
                <div class="col-sm-10">
                  <textarea v-model="description" class="form-control">
                  </textarea>
                </div>
              </div>
            </div>
            <!-- /.box-body -->
            <div class="box-footer">
              <button type="submit" class="btn btn-default">Cancel</button>
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
          priorities: [
            { text: '1', value: '1' },
            { text: '2', value: '2' },
            { text: '3', value: '3' },
            { text: '4', value: '4' },
            { text: '5', value: '5' },
          ],
        };
      },
      methods: {
        addTask() {
          console.log('add task');
        },
      },
    };
  </script>