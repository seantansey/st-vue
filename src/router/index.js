import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
// importing route this way allows for lazy loading of content
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Blog = () => import('../views/Blog.vue')
const Contact = () => import('../views/Contact.vue')

Vue.use(VueRouter)

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
    component: Blog
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
