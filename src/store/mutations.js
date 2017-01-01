/* eslint no-param-reassign: ["error", { "props": false }]*/
export const login = (state) => {
  state.checkAuth = true;
};

export const logout = (state) => {
  state.checkAuth = false;
};
