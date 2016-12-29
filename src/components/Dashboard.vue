<template>
  <div class="row">
    <div class="col-sm-12 col-md-12">
      <h3>Welcome !!!</h3>
      <p>
        Lorem ipsum Ad non ut aliquip Duis minim sit ex esse eiusmod anim minim 
        esse qui mollit elit do pariatur deserunt eu eiusmod tempor tempor sunt 
        fugiat ad dolore reprehenderit do labore ex.
      </p>
    </div>
  </div>
</template>

<script>
  import AuthService from './../services/auth';
  
  export default {
    name: 'Dashboard',
    data() {
      return {
        login: false,
      };
    },
    beforeEach(to, from, next) {
      console.log('before each dashboard');
      next();
    },
    afterEach(to, from, next) {
      console.log('after each dashboard');
      next();
    },
    beforeRouteEnter(to, from, next) {
      // called before the route that renders this component is confirmed.
      // does NOT have access to `this` component instance,
      // because it has not been created yet when this guard is called!
      console.log('before route enter dashboard');
      AuthService.checkAuth();
      next();
    },
    beforeRouteLeave(to, from, next) {
      // called when the route that renders this component is about to
      // be navigated away from.
      // has access to `this` component instance.
      AuthService.checkAuth();
      console.log('before route leave dashboard');
      next();
    },
    watch: {
      $route() {
        this.checkLogin();
      },
    },
  };
</script>