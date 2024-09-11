export default {
  state: {
    currentText: '',
    texts: localStorage.getItem('calcTexts') ? JSON.parse(localStorage.getItem('calcTexts')) : [],
  },
  actions: {
  },
  mutations: {
    SET_CURRENT_TEXT(state, text) {
      state.currentText = text
    },
    RESET_CURRENT_TEXT(state) {
      state.currentText = ''
    },
    ADD_TEXT(state, text) {
      state.texts.push(text)
      localStorage.setItem('calcTexts', JSON.stringify(state.texts))
    },
    REMOVE_TEXT(state, text) {
      state.texts = state.texts.filter((item) => item.id !== text.id)
      localStorage.setItem('calcTexts', JSON.stringify(state.texts))
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
