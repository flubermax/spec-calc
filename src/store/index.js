import * as Vuex from 'vuex'
import user from './modules/user'
import text from './modules/text'

export default new Vuex.Store({
  modules: {
    user,
    text,
  },
})
