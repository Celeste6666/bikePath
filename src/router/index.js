import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import BikeAvailable from '../views/BikeAvailable.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/bikeAvailable',
    name: 'BikeAvailable',
    component: BikeAvailable,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
