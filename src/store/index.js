import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ui: {
      mobileMenuOpen: false
    }
  },
  mutations: {
    toggleMobileMenu (state) {
      state.ui.mobileMenuOpen = !state.ui.mobileMenuOpen
    }
  },
  actions: {
  },
  modules: {
  }
})
