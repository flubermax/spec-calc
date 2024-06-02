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
        path: '/calc',
        name: 'Calc',
        component: () => import('@/components/Calc.vue'),
      },
      {
        path: '/texts',
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
  // console.log(`isAuth`, store.getters.getIsAuth)
  // console.log(`localstorage`, localStorage.getItem('calcAuth'))
  if (to.name == 'Login') {
    return next()
  }
  if (!store.getters.getIsAuth) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
