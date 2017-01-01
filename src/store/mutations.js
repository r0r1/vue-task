/* eslint no-param-reassign: ["error", { "props": false }]*/
export const increment = (state) => {
  state.count += 1;
  state.history.push('increment');
};

export const decrement = (state) => {
  state.count -= 1;
  state.history.push('decrement');
};
