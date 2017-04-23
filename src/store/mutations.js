/* eslint no-param-reassign: ["error", { "props": false }]*/
export const login = (state) => {
  state.checkAuth = true;
};

export const logout = (state) => {
  state.checkAuth = false;
};

export const currentUser = (state, { user }) => {
  state.currentUser = user;
};

export const addSuccessMessage = (state, { text }) => {
  state.success_message = text;
};

export const addErrorMessages = (state, { error }) => {
  state.error_messages.push({ message: error });
};

export const addModalData = (state, { modalData }) => {
  state.modal = modalData;
};

export const closeModal = (state) => {
  const body = document.querySelector('body');
  const childrens = body.children;
  body.classList.remove('modal-open');
  for (let i = 0; i < childrens.length; i += 1) {
    if (childrens.length === i + 1) {
      if (childrens[i].classList.contains('modal-backdrop')) {
        childrens[i].remove();
      }
    }
  }
  const id = state.modal.name;
  const classModal = document.getElementById(id).classList;
  classModal.remove('in');
};
