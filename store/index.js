import Vue from 'vue'
import Vuex from 'vuex'

import Show from '~/store/show.js'
import Lang from '~/store/localization.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = () => new Vuex.Store({
  modules: {
    Show,
    Lang
  },
  strict: debug
})

export default store
