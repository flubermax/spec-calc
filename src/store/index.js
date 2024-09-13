import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import text from './modules/text'
import font from './modules/font'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    text,
    font
  },
})
