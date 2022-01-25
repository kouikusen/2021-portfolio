import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/works/Mag2-Summer-Awards-2021',
    name: 'Mag2 Summer Awards 2021',
    component: () => import('../views/works/Mag2SummerAwards2021.vue')
  },
  {
    path: '/works/Voting-Guide-2020',
    name: 'Voting Guide 2020',
    component: () => import('../views/works/VotingGuide2020.vue')
  },
  {
    path: '/works/AR-New-Year-Card-2019',
    name: 'AR-New-Year-Card-2019',
    component: () => import('../views/works/ARNewYearCard2019.vue')
  },
  {
    path: '/works/by-them',
    name: 'by-them',
    component: () => import('../views/works/ByThem.vue')
  },
  {
    path: '/works/by-them-jp',
    name: 'by-them-jp',
    component: () => import('../views/works/ByThemJp.vue')
  },
  {
    path: '/works/Mag2-Live',
    name: 'Mag2-Live',
    component: () => import('../views/works/Mag2Live.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(function (to, from, next) {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
  next();
});

export default router
