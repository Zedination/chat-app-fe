<template>
    <div class="tab_pane chats-tab active">
              <div class="sidebar-header p-3">
                <h1 class="mb-3">Cuộc hội thoại</h1>
                <div class="search position-relative mb-3">
                  <form action="#" class="form search-form-1">
                    <input type="text" placeholder="search" class="w-100"/>
                    <button type="button"><i class="fa fa-search"></i></button>
                  </form>
                </div>
                <h2 class="text-capitalize font-weight--700">gần đây</h2>

              </div>
              <div class="p-3">
                <div class="chat-list">
                  <ul class="nav remove-space--bottom">
                    <li v-for="item in chatRooms.rooms" :key="item.id" @click="clickRoom(item.id)"
                     class="chat-item border border--gray nav-item w-100 rounded mb-3" :class="{open: item.id === chatRooms.selected}">
                      <a class="nav-link active d-flex justify-content-between p-3" data-bs-toggle="pill" href="#conversation1">
                        <div class="d-flex">
                          <div class="position-relative">
                            <!-- if isGroup = true -->
                            <img v-if="item.group" :src="item.avatar" alt="" class="rounded-circle me-3 hw-40 img-fluid">
                            <!-- else isGroup = false -->
                            <img v-else :src="item.conversationInfo.avatar" alt="" class="rounded-circle me-3 hw-40 img-fluid">

                            <span class="status online position-absolute"></span>
                          </div>
                          <div class="chat-content">
                            <h3 v-if="item.group">{{item.name}}</h3>
                            <h3 v-else>{{item.conversationInfo.name}}</h3>
                            <p>{{item.lastMessage ? item.lastMessage.content : 'Không có tin nhắn!'}}</p>
                          </div>
                        </div>
                        <div class="chat-time">
                          <h3 class="text--gray-200">{{item.lastMessage ? chatRooms.formatDate(item.lastMessage.createAt) : ''}}</h3>
                          <h3 class="text--gray-200">{{item.lastMessage ? chatRooms.formatTime(item.lastMessage.createAt) : ''}}</h3>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
</template>

<script setup>
import { onMounted } from '@vue/runtime-core';
import axios from 'axios';
import { chatRoomStore } from '../stores/chatRoom';
import appEmitter from '../composables/emiter';

const emitter = appEmitter();
const chatRooms = chatRoomStore();
const ROOT_URL = import.meta.env.VITE_ROOT_API;
async function loadListRooms() {
  try {
    let res = await axios.get(`${ROOT_URL}/message/get-last-view-rooms`);
    chatRooms.rooms = res.data;
    chatRooms.selected = chatRooms.rooms[0].id;
    clickRoom(chatRooms.selected);
  } catch (error) {
    console.log(error);
  }
}

function clickRoom(selectedRoom) {
  chatRooms.selected = selectedRoom;
  emitter.emit('select-room', selectedRoom);
}

onMounted(() => {
  loadListRooms();
});

</script>