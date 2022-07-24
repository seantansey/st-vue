import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGtag from 'vue-gtag'
import FontAwesomeIcon from './assets/fontAwesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

store.dispatch('setTrackUser', window.location.hostname !== 'localhost')

if (store.state.trackUser) {
  Vue.use(VueGtag, {
    pageTrackerExcludedRoutes: ['Blog-Post'],
    config: { id: "G-W916T0SHCC" },
    pageTrackerTemplate(to, from) {
      return {
        page_title: to.name,
        page_path: to.path || to.fullPath,
        page_location: window.location.href
      }
    }
  }, router);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
