<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import ChatPage from '@/components/ChatPage.vue'
import LoginViewVue from './views/LoginView.vue';
import {computed, onMounted} from 'vue'
import { authenStore } from './stores/authen';
const authen_store = authenStore();
</script>

<template>
  <ChatPage v-if="!authen_store.isLoginPage" />
  <RouterView v-if="authen_store.isLoginPage" />
  <!-- <LoginViewVue v-if="!authen_store.isLoginPage" /> -->
</template>

<style>
@import '@sweetalert2/theme-bulma/bulma.css';
</style>