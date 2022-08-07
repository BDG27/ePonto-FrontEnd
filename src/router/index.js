import axios from 'axios'
import Vue from 'vue'
import VueRouter from 'vue-router'
import { baseURL } from '../lib/api'
import DashboardView from '../views/DashboardView.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

Vue.use(VueRouter)

async function validateSession(){
  if(localStorage.getItem('JWT_TOKEN') != undefined){

    var req = {
      headers: {
          Authorization: `Bearer ${localStorage.getItem('JWT_TOKEN')}`
      }
    }
    
    try{
      await axios.post(`${baseURL}/user/authenticate`, {}, req);
    }catch(err){
      return false;
    }
    return true;
  }
  else{
    return false;
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: async(to, from, next) => {
      await validateSession()? next() : next('/login')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    beforeEnter: async(to, from, next) => {
      await validateSession()? next() : next('/login')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
