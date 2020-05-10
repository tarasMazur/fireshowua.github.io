const state = {
  locales: ['ua', 'ru', 'en'],
  locale: 'ua'
}

const getters = {
  LOCALE: state => state.locale
}

const mutations = {
  SET_LANG: (state, locale) => {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}

const moduleStore = {
  state, getters, mutations
}

export default moduleStore