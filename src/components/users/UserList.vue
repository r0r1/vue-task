<template>
  <div class="row">
    <div class="col-sm-12 col-md-12">
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title">User List</h3>
          <div class="box-tools pull-right">
            <router-link to="/users/new" class="btn btn-info">
              <i class="fa fa-plus"></i> Add User
            </router-link>
          </div><!-- /.box-tools -->
        </div><!-- /.box-header -->
        <div class="box-body">
          <vuetable api-url="/../../services/users.json" :fields="columns"></vuetable>
        </div><!-- /.box-body -->
      </div><!-- /.box -->        
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserList',
    data() {
      return {
        columns: [
          'name',
          'nickname',
          'email',
          'birthdate',
          'gender',
          '__actions',
        ],
        itemActions: [
          { name: 'view-item', label: '', icon: 'zoom icon', class: 'ui teal button' },
          { name: 'edit-item', label: '', icon: 'edit icon', class: 'ui orange button' },
          { name: 'delete-item', label: '', icon: 'delete icon', class: 'ui red button' },
        ],
      };
    },
  };
</script>