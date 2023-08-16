import { createRouter, createWebHistory } from 'vue-router'
import i18n, { defaultLocale } from '../i18n'
import HomeView from '../views/HomeView.vue'

// const url = new URL(import.meta.url);
// const locale = url.searchParams.get("locale") || "";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: `/${defaultLocale}`,
    },
    {
      path: '/:locale',
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'products',
          name: 'all_products',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/ProductsView.vue')
        },
        {
          path: 'orders',
          name: 'order_history',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/OrdersView.vue')
        },
        {
          path: 'about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from) => {
  const newLocale = to.params.locale
  const prevLocale = from.params.locale
  // If the locale hasn't changed, do nothing
  if (newLocale === prevLocale) {
    return
  }
  i18n.setLocale(newLocale as string)
})

export default router
