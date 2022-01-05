import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login';
import DashBoard from '../views/Dashboard';
import BoardDetail from '../views/BoardDetail';
import ItemRegister from '../components/ItemRegister';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoard,
  },
  {
    path: '/detail',
    name: 'detail',
    component: BoardDetail,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
