
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: {
      title: 'NotFound'
    },
    component: () => import('../views/404.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
});
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});
export default router;