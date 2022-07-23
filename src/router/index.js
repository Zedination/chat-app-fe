import { createRouter, createWebHistory } from 'vue-router'
import ChatTabView from '../views/ChatTabView.vue';
import LoginView from '../views/LoginView.vue'
import Oauth2Redirect from '../views/Oauth2Redirect.vue'
import ProfileTabView from '../views/ProfileTabView.vue';
import jwt_decode from "jwt-decode";
import { authenStore } from '../stores/authen';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { requiresAuth: false }
    },
    {
      path: '/oauth2/redirect',
      name: 'oauth2-redirect',
      component: Oauth2Redirect,
      meta: { requiresAuth: false }
    },
    {
      path: '/',
      name: 'home',
      component: ChatTabView,
      meta: { requiresAuth: true }
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatTabView,
      meta: { requiresAuth: true }
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileTabView,
      meta: { requiresAuth: true }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})
router.beforeResolve((to) => {
  if (to.name === 'oauth2-redirect') return; 
  const isLoginPageStore = authenStore();
  if (to.name !== 'login') {
    document.getElementsByTagName('html')[0].classList.remove('login-special');
    isLoginPageStore.isLoginPage = false;
  } else {
    document.getElementsByTagName('html')[0].classList.add('login-special');
    isLoginPageStore.isLoginPage = true;
  }
  let jwtToken = localStorage.getItem('Authorization');
  if (!jwtToken && to.meta.requiresAuth) {
    return {
      path: '/login',
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    }
    // document.location.href = `/login?redirect=${to.fullPath}`
  } else if (jwtToken) {
    let decoded = jwt_decode(jwtToken);
    isLoginPageStore.userId = decoded.sub;
    if (Number(new Date()) / 1000 > decoded.exp && to.meta.requiresAuth) {
      return {
        path: '/login',
        // save the location we were at to come back later
        query: { redirect: to.fullPath },
      }
    }
  }
  
})
export default router
