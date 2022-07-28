import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mobileMenuOpen: false,
  },
  mutations: {
    TOGGLE_MOBILE_MENU (state) {
      state.mobileMenuOpen = !state.mobileMenuOpen
    }
  },
  actions: {
    toggleMobileMenu ({ commit }) {
      commit('TOGGLE_MOBILE_MENU')
    }
  },
  modules: {
  }
})
