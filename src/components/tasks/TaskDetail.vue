<template>
  <div class="row">
    <div class="col-sm-12 col-md-12">
      
      <div class="clearfix"></div>

      <div class="box">
        <div class="box-header">
          <h3 class="box-title">Task Detail</h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body table-responsive no-padding">
          <table class="table table-hover">
            <tbody>
              <tr>
                <th>Id</th>
                <td>: {{ task.ID }}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>: {{ task.name }}</td>
              </tr>
              <!--<tr>
                <th>User</th>
                <td>: {{ task.User.name }}</td>
              </tr>-->
              <tr>
                <th>Priority</th>
                <td>: {{ task.priority }}</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>: {{ task.status }}</td>
              </tr>
              <tr>
                <th>Description</th>
                <td>: {{ task.description }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- /.box-body -->
      </div>   

      <div class="box">
        <div class="box-header">
          <h3 class="box-title">Notes</h3>
          <div class="box-tools">
            <input name="query" v-model="searchQuery" class="form-control pull-right" placeholder="Search">
          </div>
        </div>
        <div class="box-body table-responsive no-padding">
          <table-lte
            :data="notes"
            :columns="gridColumns"
            :filter-key="searchQuery"
            :actions="itemActions"
          >
          </table-lte>

          <modal-lte 
            name="delete-note-item"
            type="confirm"
            title="Delete Note"
            content="Are you sure want delete this note ?"
            data="note"
            :action="deleteNote.bind()"
          >
          </modal-lte>
          
          <modal-lte 
            name="update-note-item"
            type="form"
            title="Edit Note"
            content="edit note"
            :action="updateNote.bind()"
          >
            <div class="form-group">
              <label for="name" class="col-sm-2 control-label">Name</label>
              {{ note }}
              <div class="col-sm-10" v-if="typeof note == 'object'">
                <input type="text" v-model="note.name" class="form-control" id="name" placeholder="Name">
              </div>
            </div>
          </modal-lte>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import taskService from './../../services/task';
import noteService from './../../services/note';
import TableLte from './../../elements/TableLte';
import ModalLte from './../../elements/ModalLte';

export default {
  name: 'TaskDetail',
  data() {
    return {
      task: this.getTask() || {},
      notes: this.getNotes() || [],
      searchQuery: '',
      gridColumns: ['id', 'name'],
      itemActions: [
        { name: 'update-note-item', label: '', icon: 'fa fa-edit', modal: true },
        { name: 'delete-note-item', label: '', icon: 'fa fa-trash-o', modal: true },
      ],
    };
  },
  methods: {
    getTask() {
      taskService.show(this, this.$route.params.id);
    },
    getNotes() {
      taskService.showNotes(this, this.$route.params.id);
    },
    deleteNote() {
      const id = this.$store.state.modal.id;
      noteService.destroy(this, id, `/tasks/${this.$route.params.id}`);
      this.$store.commit('closeModal');
    },
    updateNote() {
      const id = this.$store.state.modal.id;
      const data = {
        name: this.note.name,
      };
      noteService.update(this, id, data, `/tasks/${this.$route.params.id}`);
      this.$store.commit('closeModal');
    },
  },
  computed: {
    note() {
      return this.$store.state.modal.item;
    },
  },
  components: { TableLte, ModalLte },
};
</script>