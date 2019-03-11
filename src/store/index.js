import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  users: [],
  toast: {
    message: "",
    type: "success",
    show: false
  }
};

const mutations = {
  create(state, user) {
    state.users.push(user)
  },
  update(state, { id, user }) {
    let userIndex = state.users.findIndex(user => user.id === id);
    state.users[userIndex] = user;
  },
  remove(state, id) {
    let userIndex = state.users.findIndex(user => user.id === id);
    state.users.splice(userIndex, 1);
    console.log(userIndex, state.users);
  },
  toast(state, message) {
    state.toast.message = message;
    state.toast.show = true;
    setTimeout(() => {
      state.toast.show = false;
    }, 2000);
  }
};

export default new Vuex.Store({
  state,
  mutations
});
