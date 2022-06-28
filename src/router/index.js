import Vue from 'vue'
import VueRouter from 'vue-router'
// importing route this way allows for lazy loading of content
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const BlogFeed = () => import('../views/BlogFeed.vue')
const BlogPost = () => import('../views/BlogPost.vue')
const Portfolio = () => import('../views/Portfolio.vue')
const Contact = () => import('../views/Contact.vue')
const PageNotFound = () => import('../views/PageNotFound.vue')

Vue.use(VueRouter)

export const metaTitle = (str) => {
  return `${str} | seantansey.com`
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'About'
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogFeed,
    meta: {
      title: 'Blog'
    }
  },
  {
    path: '/blog/:id',
    name: 'blog-post',
    component: BlogPost
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio,
    meta: {
      title: 'Portfolio'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {
      title: 'Contact'
    }
  },
  {
    path: '*',
    name: 'page-not-found',
    component: PageNotFound,
    meta: {
      title: '404'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = metaTitle(to.meta.title)
  }
  next()
})

export default router
