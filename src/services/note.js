import router from './../main';
import authService from './auth';
import { NOTE_URL } from './main';
// URL and endpoint constants


/* global localStorage: false, console: false, $: false */
/* eslint no-param-reassign: [2, { "props": false }]*/

export default {
  store(context, data, redirect) {
    context.$http.post(NOTE_URL, data, authService.getAuthHeader())
      .then((res) => {
        if (res.data.id) {
          context.$store.dispatch('addSuccessMessage', 'Add note has been successful.');
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

  all(context, parent = false) {
    context.items = [];
    context.$http.get(NOTE_URL, authService.getAuthHeader())
      .then((res) => {
        if (typeof res.data === 'object') {
          context.items = res.data.items;
          if (parent) {
            if (context.items === null) {
              context.items = [];
            }
            context.items.push({ ID: 0, name: 'Parent' });
          }
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

  show(context, id) {
    context.$http.get(`${NOTE_URL}/${id}`, authService.getAuthHeader())
      .then((res) => {
        if (typeof res.data === 'object') {
          context.item = res.data;
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

  update(context, id, data, redirect) {
    context.$http.put(`${NOTE_URL}/${id}`, data, authService.getAuthHeader())
      .then((res) => {
        if (res.data.id) {
          context.$store.dispatch('addSuccessMessage', 'Update note has been successful.');
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

  destroy(context, id, redirect) {
    context.$http.delete(`${NOTE_URL}/${id}`, authService.getAuthHeader())
      .then((res) => {
        if (res.data.message) {
          context.$store.dispatch('addSuccessMessage', 'Delete note has been successful.');
          router.go(redirect);
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
};
