<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import LeftNav from '@/components/LeftNav.vue'
import ChatContent from '@/components/ChatContent.vue';
import { loadScript } from "vue-plugin-load-script";
import "../assets/plugins/fontawesome/all.min.js"
import "../assets/plugins/bootstrap/bootstrap.min.js"
import { onMounted } from '@vue/runtime-core';
import axios from 'axios';
import { chatRoomStore } from '../stores/chatRoom';
import { authenStore } from '../stores/authen';
import appEmitter from '../composables/emiter';
import { ref, toRaw } from 'vue';

const emitter = appEmitter();
const authen = authenStore();
const chatRooms = chatRoomStore();
const ROOT_URL = import.meta.env.VITE_ROOT_API;
async function loadListRooms() {
  try {
    let res = await axios.get(`${ROOT_URL}/message/get-last-view-rooms`);
    chatRooms.rooms = res.data;
    chatRooms.selected = chatRooms.rooms[0].id;
    firstLoadMessagesRoom(chatRooms.selected);
  } catch (error) {
    console.log(error);
  }
}

function updateLastView(roomId) {
  axios.put(`${import.meta.env.VITE_ROOT_API}/message/update-last-view/${roomId}`);
}

function firstLoadMessagesRoom(selectedRoom) {
  updateLastView(selectedRoom);
  // emitter.emit('select-room', selectedRoom);
  loadMessageForFirst(selectedRoom);
}

function loadMessageForFirst(roomId) {
    axios.get(`${ROOT_URL}/message/get-messages-by-room`, {
        params: {
            roomId: roomId
        }
    }).then(res => {
        // đảo ngược array messages trước khi update vào store state
        let messages = res.data.content.reverse();
        chatRooms.updateMessagesOfRoom(roomId, messages);
    });
}

onMounted(async () => {
  await loadListRooms();
  // load message cho room đầu tiên
  // emitter.emit('select-room', chatRooms.selected);
});

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
