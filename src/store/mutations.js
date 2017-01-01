/* eslint no-param-reassign: ["error", { "props": false }]*/
export const login = (state) => {
  state.checkAuth = true;
};

export const logout = (state) => {
  state.checkAuth = false;
};

export const addSuccessMessage = (state, { text }) => {
  console.log(text);
  state.success_message = text;
};

export const addErrorMessages = (state, { error }) => {
  state.error_messages.push({ message: error });
};
