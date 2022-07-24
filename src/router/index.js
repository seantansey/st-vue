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
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogFeed
  },
  {
    path: '/blog/:id',
    name: 'Blog-Post',
    component: BlogPost
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '*',
    name: 'Page-Not-Found',
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = metaTitle(to.name)
  })
})

export default router
