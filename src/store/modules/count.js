export default {
  state: {
    item: 0,
  },
  mutations: {
    increment(state, payload) {
      state.item += payload;
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment", 1);
    },
  },
};
