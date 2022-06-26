import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/python',
    component: () => import("@/views/Py/Index.vue")
  },
  {
    path: '/scratch',
    component: () => import("@/views/Scratch/Index.vue")
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
