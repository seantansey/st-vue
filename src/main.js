import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { 
  faBars,
  faEnvelope,
  faArrowRight,
  faCalendar,
  faLocationDot,
  faPaperPlane,
  faGem,
  faComment,
  faHeart
} from '@fortawesome/free-solid-svg-icons'

import { 
  faJsSquare,
  faVuejs,
  faReact,
  faHtml5,
  faCss3,
  faSass,
  faNode,
  faLaravel,
  faLinkedin,
  faGithub,
  faPhp,
  faDev
} from '@fortawesome/free-brands-svg-icons'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(
  faBars, 
  faJsSquare, 
  faVuejs, 
  faReact,
  faHtml5,
  faCss3,
  faSass,
  faNode,
  faLaravel,
  faLinkedin,
  faGithub,
  faEnvelope,
  faArrowRight,
  faCalendar,
  faLocationDot,
  faPaperPlane,
  faGem,
  faPhp,
  faComment,
  faHeart,
  faDev
)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
