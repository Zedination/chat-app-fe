<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
const router = useRouter();
function logout() {
  localStorage.removeItem("Authorization");
  router.push("/login");
}
</script>
<template>
    <!-- =========== Navigation Start ============ -->
        <div class="navigation z-index1 pt-lg-4 d-flex flex-lg-column justify-content-lg-between text-center bg--primary">
          <router-link to="/" class="logo d-none d-lg-block"><img src="../assets/images/logo.svg" alt="" class="svg img-fluid"></router-link>
        <!-- Logo End -->
          <ul class="list-unstyled m-0 d-flex d-lg-block">
            <li data-li="chats-tab" class="active">
              <router-link to="/chat" class="nav-link"><i class="far fa-comment-alt"></i></router-link>
            </li>
            <li data-li="profile-tab">
              <router-link to="/profile" class="nav-link"><i class="far fa-user"></i></router-link>
            </li>
            <li data-li="groups-tab">
              <a href="#" class="nav-link" data-tooltip="groups" data-placement="top">
                <i class="fas fa-user-circle"></i>
              </a>
            </li>
            <li data-li="contacts-tab">
              <a href="#" class="nav-link" data-tooltip="contacts" data-placement="top">
                <i class="far fa-address-card"></i>
              </a>
            </li>
            <li data-li="setting-tab">
              <a href="#" class="nav-link" data-tooltip="settings" data-placement="top">
                <i class="fas fa-cog"></i>
              </a>
            </li>
            <li>
              <a class="nav-link d-lg-none" data-tooltip="logout" data-placement="top" @click="logout()">
                  <i class="fas fa-sign-out-alt"></i>
              </a>
            </li>
          </ul>
          <div class="m-0 d-none d-lg-block">
            <a class="nav-link m-0" data-tooltip="logout" data-placement="top" @click="logout()">
              <i class="fas fa-sign-out-alt"></i>
            </a>
          </div>
        </div>
         <!-- =========== Navigation End ============ -->
</template>