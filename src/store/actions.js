export const login = ({ commit }) => commit('login');
export const logout = ({ commit }) => commit('logout');
export const currentUser = ({ commit }, userData) => commit('currentUser', { user: userData });
export const addSuccessMessage = ({ commit }, message) => commit('addSuccessMessage', { text: message });
export const addErrorMessages = ({ commit }, messages) => commit('addErrorMessages', {
  message: messages,
});
export const addModalData = ({ commit }, data) => commit('addModalData', {
  id: data.id,
  name: data.name,
});

