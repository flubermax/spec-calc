export default {
  state: {
    currentFontSize: 36,
  },
  actions: {
  },
  mutations: {
    SET_CURRENT_SIZE(state, size) {
      state.currentFontSize = size
    },
  },
  getters: {
    getCurrentSize(state) {
      return state.currentFontSize
    },
  },
}
