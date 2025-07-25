import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router/routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes],
});

router.beforeEach(async (to) => {
  console.log('router to:', to);
});

export default router;
