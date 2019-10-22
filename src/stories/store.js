import sign from "../services/sign";
import io from "socket.io-client";
const state = {
  socket: {},
  rooms: [],
  onlineUsers: [],
  user: {},
  error: {}
};
const getters = {};
const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  setSocket(state, payload) {
    state.socket = payload;
  },
  setError(state, payload) {
    state.error = payload;
  }
};
const actions = {
  signInLocal(context, user) {
    sign
      .signInLocal(user)
      .then(res => {
        const { user, error } = res.data;
        if (user) {
          context.commit("setUser", user);
        }
        if (error) {
          context.commit("setError", error);
        }
      })
      .catch(error => context.commit("setError", error.message));
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
