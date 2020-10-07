import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Books from '../views/Books.vue'
import Add from '../views/Add.vue'
import Book from '../views/Book.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/books',
    name: 'Books',
    component: Books
  },
  {
    path: '/add',
    name: 'About',
    component: Add
  },
  {
    path: '/book/:id',
    name: 'Book',
    component: Book
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
