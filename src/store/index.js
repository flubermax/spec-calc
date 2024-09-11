import * as Vuex from 'vuex'
import user from './modules/user'
import text from './modules/text'
import font from './modules/font'

export default new Vuex.Store({
  modules: {
    user,
    text,
    font
  },
})
