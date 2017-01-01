<template>
  <div class="register-box">
    <div class="register-logo">
      <a router-link to="/"><b>App Task Management</b></a>
    </div>

    <div class="register-box-body">
      <p class="login-box-msg">Register a new membership</p>

      <form v-on:submit.prevent="register()">
        <div v-if="errors.length > 0">
          <div  class="alert alert-danger">
            <a href="#" class="close" data-dismiss="alert">&times;</a>
            <ul v-for="msg in errors">
                <li>{{ msg.message }}</li>
            </ul>
          </div>
        </div>
        <div class="form-group has-feedback">
          <input type="text" class="form-control" placeholder="Full name" v-model="signup.name">
          <span class="glyphicon glyphicon-user form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="email" class="form-control" placeholder="Email" v-model="signup.email">
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control" placeholder="Password" v-model="signup.password">
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control" placeholder="Retype password" v-model="signup.password_confirmation">
          <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
        </div>
        <div class="row">
          <!-- /.col -->
          <div class="col-xs-12">
            <button type="submit" class="btn btn-primary btn-block btn-flat">Register</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <div class="social-auth-links text-center">
        <p>- OR -</p>
      </div>

      <router-link to="/login" class="text-center">
          I already have a membership
        </router-link>
    </div>
    <!-- /.form-box -->
  </div>
</template>

<script>

import authService from './../../services/auth';

export default {
  name: 'Register',
  data() {
    return {
      errors: [],
      signup: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
    };
  },
  methods: {
    register() {
      this.errors = [];
      authService.signup(this, this.signup, '/login');
    },
  },
};
</script>