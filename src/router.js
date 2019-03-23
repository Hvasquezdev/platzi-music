import Vue from 'vue';
import Router from 'vue-router';

//Components
const AppSearch = () => import ('@/components/layout/AppSearch.vue');
const AppTrackDetail = () => import ('@/components/layout/AppTrackDetail.vue');

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'search',
      component: AppSearch
    },
    {
      path: '/track/:id',
      name: 'track',
      component: AppTrackDetail
    }
  ]
});