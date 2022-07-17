<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import LeftNav from '@/components/LeftNav.vue'
import ChatContent from '@/components/ChatContent.vue';
import { loadScript } from "vue-plugin-load-script";
import "../assets/plugins/fontawesome/all.min.js"
import "../assets/plugins/bootstrap/bootstrap.min.js"
</script>

<template>
  <div class="layout d-lg-flex">
    <LeftNav/>
    <aside class="sidebar border-end border--gray">
          <div class="tab_content">
            <RouterView />
          </div>
    </aside>

    <ChatContent />
  </div>
</template>

<style>
@import "../assets/plugins/fontawesome/all.min.css";
@import "../assets/plugins/bootstrap/bootstrap.min.css";
@import url("https://fonts.googleapis.com/css2?family=Public+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import "../assets/css/style.css";
@import "../assets/plugins/slick/slick.css";
</style>
