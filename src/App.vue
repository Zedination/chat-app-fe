<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import ChatPage from '@/components/ChatPage.vue'
import LoginViewVue from './views/LoginView.vue';
import {computed} from 'vue'
const isLoginPage = window.location.href.startsWith(window.location.origin + "/login");
</script>

<template>
  <ChatPage v-if="!isLoginPage" />
  <!-- <RouterView v-if="isLoginPage" /> -->
  <LoginViewVue v-if="isLoginPage" />
</template>