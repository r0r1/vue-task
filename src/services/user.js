import { USER_URL } from './main';
import authService from './auth';

/* global localStorage: false, console: false, $: false */
/* eslint no-param-reassign: [2, { "props": false }]*/

export default {
  all(context) {
    context.$http.get(USER_URL, authService.getAuthHeader())
      .then((res) => {
        if (typeof res.data === 'object') {
          context.items = res.data;
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
