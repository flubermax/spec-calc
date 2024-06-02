export default {
  state: {
    user: {
      login: '123',
      password: '123',
    },
    isAuth: localStorage.getItem('calcAuth'),
  },
  actions: {
    authLogin({ commit }) {
      commit('SET_AUTH', true)
    },
  },
  mutations: {
    SET_AUTH(state) {
      state.isAuth = localStorage.getItem('calcAuth')
    },
  },
  getters: {
    getUser(state) {
      return state.user
    },
    getIsAuth(state) {
      return state.isAuth
    },
  },
}