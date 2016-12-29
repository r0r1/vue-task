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
    context.$http.post(LOGIN_URL, creds, (data) => {
      localStorage.setItem('token', data.token);
      this.user.authenticated = true;

      // Redirect to a specified route
      if (redirect) {
        router.replace(redirect);
      }
    }).error((err) => {
      context.error = err;
    });
  },

  signup(context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds, (data) => {
      if (data.id) {
        router.go(redirect);
      }
    }).error((err) => {
      context.error = err;
    });
  },

  // To log out, we just need to remove the token
  logout() {
    localStorage.removeItem('token');
    this.user.authenticated = false;
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
