<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { ref } from 'vue';
import { chatRoomStore } from '../stores/chatRoom';

const router = useRouter();
const chatRoom = chatRoomStore();
function logout() {
  localStorage.removeItem("Authorization");
  chatRoom.rooms = [];
  chatRoom.selected = '';
  router.push("/login");
  // window.location.href = "/login";
}
const chatRef = ref(null);
const profileRef = ref(null);
const groupRef = ref(null);
const friendRef = ref(null);
const settingRef = ref(null);
function activeLink(elName) {
  chatRef.value.classList.remove("active");
  profileRef.value.classList.remove("active");
  groupRef.value.classList.remove("active");
  friendRef.value.classList.remove("active");
  settingRef.value.classList.remove("active");
  switch (elName) {
    case 'chatRef':
      chatRef.value.classList.add("active");
      break;
    case 'profileRef':
      profileRef.value.classList.add("active");
      break;
    case 'groupRef':
      groupRef.value.classList.add("active");
      break;
    case 'friendRef':
      friendRef.value.classList.add("active");
      break;
    case 'settingRef':
      settingRef.value.classList.add("active");
      break;
    default:
      break;
  }
}
</script>
<template>
    <!-- =========== Navigation Start ============ -->
        <div class="navigation z-index1 pt-lg-4 d-flex flex-lg-column justify-content-lg-between text-center bg--primary">
          <router-link to="/" class="logo d-none d-lg-block"><img src="../assets/images/logo.svg" alt="" class="svg img-fluid"></router-link>
        <!-- Logo End -->
          <ul class="list-unstyled m-0 d-flex d-lg-block">
            <li data-li="chats-tab" ref="chatRef" class="active" @click="activeLink('chatRef')">
              <router-link to="/chat" class="nav-link"><i class="far fa-comment-alt"></i></router-link>
            </li>
            <li data-li="profile-tab" ref="profileRef" @click="activeLink('profileRef')">
              <router-link to="/profile" class="nav-link"><i class="far fa-user"></i></router-link>
            </li>
            <li data-li="groups-tab" ref="groupRef" @click="activeLink('groupRef')">
              <a href="#" class="nav-link" data-tooltip="groups" data-placement="top">
                <i class="fas fa-user-circle"></i>
              </a>
            </li>
            <li data-li="friends-tab" ref="friendRef" @click="activeLink('friendRef')">
              <a href="#" class="nav-link" data-tooltip="friends" data-placement="top">
                <i class="far fa-address-card"></i>
              </a>
            </li>
            <li data-li="setting-tab" ref="settingRef" @click="activeLink('settingRef')">
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