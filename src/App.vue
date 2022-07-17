<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import ChatPage from '@/components/ChatPage.vue'
import LoginViewVue from './views/LoginView.vue';
import {computed} from 'vue'
import { authenStore } from './stores/authen';
const isLoginPageStore = authenStore();
</script>

<template>
  <ChatPage v-if="!isLoginPageStore.isLoginPage" />
  <RouterView v-if="isLoginPageStore.isLoginPage" />
  <!-- <LoginViewVue v-if="!isLoginPageStore.isLoginPage" /> -->
</template>

<style>
</style>