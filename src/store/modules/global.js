export default {
  state: {
    appName: "vue应用",
  },
  mutations: {
    setAppName: (state, value) => {
      state.appName = value;
    },
  },
  actions: {
    toggleAppName: ({ commit }, value) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit("setAppName", value);
          resolve(value);
        }, 2000);
      });
    },
  },
};
