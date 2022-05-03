import Vue from 'vue'
import VueRouter from 'vue-router'
// importing route this way allows for lazy loading of content
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const BlogFeed = () => import('../views/BlogFeed.vue')
const BlogPost = () => import('../views/BlogPost.vue')
const Contact = () => import('../views/Contact.vue')
const PageNotFound = () => import('../views/PageNotFound.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogFeed
  },
  {
    path: '/blog/:id',
    name: 'blog-post',
    component: BlogPost
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '*',
    name: 'page-not-found',
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
