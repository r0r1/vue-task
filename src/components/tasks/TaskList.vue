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
            :filter-key="searchQuery"
            :actions="itemActions"
          >
          </table-lte>
        </div>
        <!-- /.box-body -->
        
        <modal-lte 
          name="delete-item"
          type="confirm"
          title="Delete Task"
          body="Are you sure want delete this task ?"
          :action="deleteTask.bind()"
        >
        </modal-lte>

        <modal-lte 
          name="add-notes"
          type="form"
          title="Add Notes"
          body="Add notes here please"
          :action="addNotes.bind()"
        >
          <div class="form-group">
            <label for="name" class="col-sm-2 control-label">Name</label>
            <div class="col-sm-10">
              <input type="text" v-model="notes.name" class="form-control" id="name" placeholder="Name">
            </div>
          </div>
        </modal-lte>
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
  name: 'TaskList',
  data() {
    return {
      errors: [],
      searchQuery: '',
      gridColumns: ['id', 'user', 'name', 'priority', 'status', 'date'],
      itemActions: [
        { name: 'add-notes', label: '', icon: 'fa fa-plus', modal: true },
        { name: 'detail-item', label: '', icon: 'fa fa-eye', modal: false, link: { name: 'detail_task' } },
        { name: 'edit-item', label: '', icon: 'fa fa-edit', modal: false, link: { name: 'detail_task' } },
        { name: 'delete-item', label: '', icon: 'fa fa-trash-o', modal: true },
      ],
      items: this.getData() || [],
      notes: {
        name: null,
      },
    };
  },
  components: { TableLte, ModalLte },
  methods: {
    getData() {
      taskService.all(this);
    },
    deleteTask() {
      const id = this.$store.state.modal.id;
      taskService.destroy(this, id, '/tasks/list');
    },
    addNotes() {
      this.notes.task_id = this.$store.state.modal.id;
      this.notes.user_id = this.$store.state.currentUser.ID;
      noteService.store(this, this.notes, `/tasks/${this.notes.task_id}`);
      this.notes = {};
    },
  },
};
</script>