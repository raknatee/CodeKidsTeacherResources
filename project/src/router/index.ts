import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/create-new-canvas',
  //   name: 'create-new-canvas',
  //   component: () => import("@/views/001-create-canvas.vue")
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
