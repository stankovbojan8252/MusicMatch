// src/router/routes.js
const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: () => import('pages/LoginPage.vue'), // ✅ Ensure correct path
  },
  {
    path: '/dashboard',
    component: () => import('pages/DashboardPage.vue'), // ✅ Ensure correct path
  },
  {
    path: '/match',
    component: () => import('pages/MatchPage.vue'), // ✅ Ensure correct path
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
  {
    path: '/onboarding',
    component: () => import('pages/OnboardingForm.vue'), // Ensure this file exists
  },
  {
    path: '/:catchAll(.*)*',
    redirect: '/login',
  },
]

export default routes
