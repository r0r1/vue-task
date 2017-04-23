import authService from './auth';
import { TAG_URL } from './main';
// URL and endpoint constants


/* global localStorage: false, console: false, $: false */
/* eslint no-param-reassign: [2, { "props": false }]*/

export default {
  all(context) {
    context.tags = [];
    context.$http.get(TAG_URL, authService.getAuthHeader())
      .then((res) => {
        if (typeof res.data === 'object') {
          context.tags = res.data.items;
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
    context.$http.get(`${TAG_URL}/${id}`, authService.getAuthHeader())
      .then((res) => {
        if (typeof res.data === 'object') {
          context.tag = res.data;
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
