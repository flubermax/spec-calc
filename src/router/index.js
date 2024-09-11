import {createRouter, createWebHistory} from 'vue-router';
import store from '@/store'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/Main.vue'),
    redirect: '/calc',
    children: [
      {
        path: 'calc',
        name: 'Calc',
        component: () => import('@/components/Calc.vue'),
      },
      {
        path: 'texts',
        name: 'Texts',
        component: () => import('@/components/Texts.vue'),
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.name == 'Login') {
    if (store.getters.getIsAuth) {
      return next({ name: 'Calc' })
    } else {
      return next()
    }
  }
  if (!store.getters.getIsAuth) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
