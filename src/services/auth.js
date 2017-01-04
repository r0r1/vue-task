import router from './../main';
import { SIGNUP_URL, LOGIN_URL, CURRENT_USER_URL } from './main';
// URL and endpoint constants


/* global localStorage: false, console: false, $: false */
/* eslint no-param-reassign: [2, { "props": false }]*/

export default {

  // User object will let us check authentication status
  user: {
    authenticated: false,
  },

  // Send a request to the login URL and save the returned JWT
  login(context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds)
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          this.user.authenticated = true;
          context.$store.dispatch('login');
          router.replace(redirect);
        }
      }, (err) => {
        if (typeof err.data === 'object') {
          context.errors.push(err.data);
        } else {
          const errors = JSON.parse(err.data);
          context.errors.push(errors);
        }
      });
  },

  signup(context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds)
      .then((res) => {
        if (res.data.ID === 0) {
          context.errors.push('Email already registered.');
        }
        if (res.data.ID && res.data.ID !== 0) {
          router.replace(redirect);
          context.$store.dispatch('addSuccessMessage', 'Register has been successful, please login.');
        }
      }, (err) => {
        const errors = JSON.parse(err.data);
        context.$store.dispatch('addErrorMessages', errors);
        context.errors.push(errors);
      });
  },

  currentUser(context) {
    context.$http.get(CURRENT_USER_URL, this.getAuthHeader())
      .then((res) => {
        localStorage.setItem('user_id', res.data.ID);
        context.$store.dispatch('currentUser', res.data);
      }, (err) => {
        const errors = JSON.parse(err.data);
        context.$store.dispatch('addErrorMessages', errors);
        context.errors.push(errors);
      });
  },

  // To log out, we just need to remove the token
  logout(context, redirect) {
    localStorage.removeItem('token');
    this.user.authenticated = false;
    context.$store.dispatch('logout');
    router.replace(redirect);
  },

  checkAuth() {
    const jwt = localStorage.getItem('token');
    if (jwt) {
      this.user.authenticated = true;
    } else {
      this.user.authenticated = false;
    }
  },

  // The object to be passed as a header for authenticated requests
  getAuthHeader() {
    const token = localStorage.getItem('token');
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  },
};
