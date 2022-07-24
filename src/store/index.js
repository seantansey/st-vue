import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mobileMenuOpen: false,
    trackUser: false
  },
  mutations: {
    TOGGLE_MOBILE_MENU (state) {
      state.mobileMenuOpen = !state.mobileMenuOpen
    },
    SET_TRACK_USER (state, shouldTrackUser) {
      state.trackUser = shouldTrackUser
    }
  },
  actions: {
    toggleMobileMenu ({ commit }) {
      commit('TOGGLE_MOBILE_MENU')
    },
    setTrackUser ({ commit }, shouldTrackUser) {
      commit('SET_TRACK_USER', shouldTrackUser)
    }
  },
  modules: {
  }
})
