
const routes = [
  {
    path: '/auth',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'settings', component: () => import('pages/UserSettings.vue') },
      { path: 'topten', component: () => import('pages/TopTen.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/BeforeAuth.vue'),
    children: [
      { path: '', component: () => import('pages/Hero.vue') },
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'register', component: () => import('pages/Register.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
