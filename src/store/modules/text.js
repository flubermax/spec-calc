export default {
  state: {
    currentText: '',
    texts: [],
  },
  actions: {},
  mutations: {
    SET_CURRENT_TEXT(state, text) {
      state.currentText = text
    },
    RESET_CURRENT_TEXT(state) {
      state.currentText = ''
    },
    ADD_TEXT(state, text) {
      state.texts.push(text)
    },
    REMOVE_TEXT(state, text) {
      console.log(text)
      state.texts = state.texts.filter((item) => item.id !== text.id)
    },
  },
  getters: {
    getCurrentText(state) {
      return state.currentText
    },
    getAllTexts(state) {
      return state.texts
    },
  },
}
