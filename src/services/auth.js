import router from './../main';

// URL and endpoint constants
const API_URL = 'http://localhost:8080/';
const LOGIN_URL = `${API_URL}api/v1/login`;
const SIGNUP_URL = `${API_URL}api/v1/register`;

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
        const errors = JSON.parse(err.data);
        context.errors.push(errors);
      });
  },

  signup(context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds)
      .then((data) => {
        if (data.id) {
          router.go(redirect);
        }
      }, (err) => {
        const errors = JSON.parse(err.data);
        context.errors.push(errors);
      });
  },

  // To log out, we just need to remove the token
  logout(context) {
    localStorage.removeItem('token');
    this.user.authenticated = false;
    context.$store.dispatch('logout');
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
      Authorization: `Bearer ${token}`,
    };
  },
};
