import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mobileMenuOpen: false,
  },
  mutations: {
    CLOSE_MOBILE_MENU (state) {
      state.mobileMenuOpen = false
    },
    OPEN_MOBILE_MENU (state) {
      state.mobileMenuOpen = true
    }
  },
  actions: {
    closeMobileMenu ({ commit }) {
      commit('CLOSE_MOBILE_MENU')
    },
    openMobileMenu ({ commit }) {
      commit('OPEN_MOBILE_MENU')
    }
  },
  modules: {
  }
})
