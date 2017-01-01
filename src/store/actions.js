export const login = ({ commit }) => commit('login');
export const logout = ({ commit }) => commit('logout');
export const addSuccessMessage = ({ commit }, message) => commit('addSuccessMessage', { text: message });
export const addErrorMessages = ({ commit }, messages) => commit('addErrorMessages', {
  message: messages,
});
