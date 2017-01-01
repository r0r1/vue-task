<template>
  <div class="login-box">
    <div class="login-logo">
      <a router-link to="/"><b>App Task Management</b></a>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="login-box-msg">Sign in to start your session</p>
      <div v-if="successMessage" class="alert alert-success">
        <a href="#" class="close" data-dismiss="alert">&times;</a>
        {{ successMessage }}
      </div>

      <form v-on:submit.prevent="login()">
        <div v-if="errors.length > 0">
          <div  class="alert alert-danger">
            <a href="#" class="close" data-dismiss="alert">&times;</a>
            <ul v-for="msg in errors">
                <li>{{ msg.message }}</li>
            </ul>
          </div>
        </div>

        <div class="form-group has-feedback">
          <input type="email" class="form-control" placeholder="Email" v-model="creds.username">
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>

        <div class="form-group has-feedback">
          <input type="password" class="form-control" placeholder="Password" v-model="creds.password">
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>

        <div class="row">
          <!-- /.col -->
          <div class="col-xs-12">
            <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
          </div>
          <!-- /.col -->
        </div>
        
      </form>
      <div class="social-auth-links text-center">
        <p>- OR -</p>
      </div>
      <router-link to="/register" class="text-center">
        Register a new membership
      </router-link>
    </div>
  </div>   
</template>

<script>
import { mapGetters } from 'vuex';
import authService from './../../services/auth';

export default {
  name: 'Login',
  data() {
    return {
      errors: [],
      creds: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    login() {
      this.errors = [];
      authService.login(this, this.creds, '/dashboard');
    },
  },
  computed: mapGetters([
    'successMessage',
  ]),
};
</script>