<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import LeftNav from '@/components/LeftNav.vue'
import ChatContent from '@/components/ChatContent.vue';
import { loadScript } from "vue-plugin-load-script";
import "../assets/plugins/fontawesome/all.min.js"
import "../assets/plugins/bootstrap/bootstrap.min.js"
import { onMounted, onUnmounted } from '@vue/runtime-core';
import axios from 'axios';
import { chatRoomStore } from '../stores/chatRoom';
import { authenStore } from '../stores/authen';
import appEmitter from '../composables/emiter';
import { ref, toRaw } from 'vue';
import SockJS from "sockjs-client/dist/sockjs"
import Stomp from "webstomp-client";

const emitter = appEmitter();
const authen = authenStore();
const chatRooms = chatRoomStore();
const ROOT_URL = import.meta.env.VITE_ROOT_API;
const connected = ref(false);

const changedTemp = ref(false);

async function loadListRooms() {
  try {
    let res = await axios.get(`${ROOT_URL}/message/get-last-view-rooms`);
    chatRooms.rooms = res.data;
    chatRooms.selected = chatRooms.rooms[0].id;
    // firstLoadMessagesRoom(chatRooms.selected);
    updateLastView(chatRooms.selected);
  } catch (error) {
    console.log(error);
  }
}
async function firstLoadUserInfo() {
  try {
    let result = await axios.get(`${import.meta.env.VITE_ROOT_API}/user/get-principal`);
    console.log(result)
    authen.userInfo = result.data;
  } catch (ex) {
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

const stompClient = Stomp.over(new SockJS(`${ROOT_URL}/chat-app`))

// async function connect() {
//   chatRooms.getListRoomIds.forEach(rId => {
//     console.log(rId + " xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
//     if (connected.value) {
//       stompClient.subscribe(`/chat/${rId}`, handlerMessage, {id: rId});
//     } else {
//       connected.value = true;
//       stompClient.connect(
//         {},
//         frame => {
//           connected.value = true;
//           console.log("connected!");
//           console.log(frame);
//           stompClient.subscribe(`/chat/${rId}`, handlerMessage, {id: rId});
//         },
//         error => {
//           console.log(error);
//           connected.value = false;
//         }
//       );
//     }
//   })
// }

async function connect() {
  if (!stompClient || !stompClient.connected) {
    stompClient.connect(
        {},
        frame => {
          connected.value = true;
          console.log("connected!");
          console.log(frame);
          subscribe();
        },
        error => {
          console.log(error);
          connected.value = false;
        }
      );
  }
}

async function subscribe() {
  chatRooms.getListRoomIds.forEach(rId => {
    console.log(rId + " xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    if (connected.value) {
      stompClient.subscribe(`/chat/${rId}`, handlerMessage, {id: rId});
    }
  })
}


function send(event) {
  if (stompClient && stompClient.connected) {
    stompClient.send(`/app/chat/${chatRooms.selected}`, JSON.stringify(event), {});
  }
}

function handlerMessage(message) {
  console.log(message);
  const messageBody = JSON.parse(message.body);
  if (messageBody.fromUser.id === authen.userInfo.id) messageBody.isMe = true;
  chatRooms.pushMessage(chatRooms.selected, messageBody);
  setTimeout(() => {
    document.getElementById('chat-content').scrollIntoView(false);
  }, 0);
}

function disconnectStomp(event) {
    console.log("=========== when log out ============");
  if (stompClient && stompClient.connected) {
    stompClient.disconnect();
  }
}

onMounted(async () => {
  emitter.on('logout', disconnectStomp);
  // load user info
  await firstLoadUserInfo();
  await loadListRooms();
  await connect();
  // document.getElementById('chat-content').scrollIntoView({behavior: "smooth", block: "end"});
  document.getElementById('chat-content').scrollIntoView(false);
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

    <ChatContent :temp="!changedTemp.value" @send-message="send" />
  </div>
</template>

<style>
@import "../assets/plugins/fontawesome/all.min.css";
@import "../assets/plugins/bootstrap/bootstrap.min.css";
@import url("https://fonts.googleapis.com/css2?family=Public+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import "../assets/css/style.css";
@import "../assets/plugins/slick/slick.css";
</style>
