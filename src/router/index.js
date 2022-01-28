import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Feedback from '../views/Feedback.vue'
import Bestsellers from '../views/Bestsellers.vue'
import Other from '../views/categorie/other.vue'
import Tech from '../views/categorie/tech.vue'
import Wear from '../views/categorie/wear.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback
  },
  {
    path: '/best',
    name: 'Bestsellers',
    component: Bestsellers
  },
  {
    path: '/categorie/other',
    name: 'Other',
    component: Other
  },
  {
    path: '/categorie/tech',
    name: 'Tech',
    component: Tech
  },
  {
    path: '/categorie/wear',
    name: 'Wear',
    component: Wear
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
