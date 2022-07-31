<template>
  <div class="chats tab-content w-100">
    <div class="chat-body tab-pane fade active" id="conversation1" :class="{'small-sidebar': isShowRightBar}">
      <div
        class="chat-header d-flex  justify-content-between align-items-center border-bottom border--gray p-4 sticky-top bg--white">
        <!-- <button type="button" id="toggle"><i class="fas fa-compress"></i></button> -->
        <div class="media d-flex align-items-center">
          <div class="close-icon user-chat-remove d-lg-none me-3" @click="closeChats"><i
              class="fas fa-arrow-left font-size--14 text--dark-100"></i></div>
          <div class="position-relative">
            <img :src="chatRooms.getConversationOfSelectedRoom.avatar"
              :alt="chatRooms.getConversationOfSelectedRoom.name" class="rounded-circle me-3 hw-40">
            <span class="status online"></span>
          </div>
          <div class="media-body">
            <a href="#">
              <h3 class="user-name" @click.prevent="isShowRightBar=!isShowRightBar">
                {{chatRooms.getConversationOfSelectedRoom.name}}</h3>
            </a>
          </div>
        </div>
        <ul class="user-chat-nav list-unstyled d-flex align-items-center m-0 remove-space--right">
          <li class="chat-search-form position-relative me-4">
            <a href="#search" class="search-btn">
              <i class="fas fa-search text--dark-100 font-size--18"></i>
            </a>
            <!-- <form action="#" class="form search-form-1 position-absolute">
              <input type="text" placeholder="search" class="w-100" />
              <button type="button"><i class="fas fa-search text--dark-100 font-size--18"></i></button>
            </form> -->
          </li>
          <li class="me-4">
            <a href="#" class="user-icon" @click.prevent="isShowPopupCallVideo=!isShowPopupCallVideo">
              <i class="fas fa-video text--dark-100 font-size--18"></i>
            </a>
          </li>
          <li class="me-4">
            <a href="#" class="user-icon" @click.prevent="isShowRightBar=!isShowRightBar">
              <i class="fas fa-user text--dark-100 font-size--18"></i>
            </a>
          </li>
          <li class="me-4">
            <div class="dropdown">
              <a href="#" class="user-icon" id="dropdownMenuButton12" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-ellipsis-v text--dark-100 font-size--18"></i>
              </a>
              <!-- <button class="btn p-0 btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton12"
                data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-ellipsis-v text--dark-100 font-size--18"></i>
              </button> -->
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton12">
                <li>
                  <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14"
                    href="#">archive<i class="fas fa-archive"></i></a>
                </li>
                <li>
                  <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14"
                    href="#">block<i class="fas fa-ban"></i></a>
                </li>
                <li>
                  <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14"
                    href="#">delete<i class="fas fa-trash-alt"></i></a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <PopupCallVideo :title="'Bắt đầu cuộc gọi thoại!'" :user-id="!chatRooms.getConversationOfSelectedRoom.isGroup ? chatRooms.getConversationOfSelectedRoom.userId : authen.userId" v-if="isShowPopupCallVideo" :is-show="isShowPopupCallVideo" 
        :audio-enable="true" :video-enable="true"
        @on-close="isShowPopupCallVideo=!isShowPopupCallVideo">
        </PopupCallVideo>
      </div>
      <!-- message header end -->
      <div class="chat-content p-4 mb-3" ref="chatContentRef" id="chat-content">
        <!-- <div class="date text-center mb-5">
                <span class="text--gray-200 font-size--14 text-capitalize">20/12/2020</span>
              </div> -->
        <template v-for="message in chatRooms.getMessagesOfSelectedRoom" :key="message.id">
          <div v-if="!message.isMe" class="message mb-5 d-flex">
            <div class="width--500 d-flex">
              <a :data-tooltip="message.fromUser.name" data-placement="top" class="me-3 hw-40">
                <img :src="message.fromUser.avatar" alt="" class="rounded-circle hw-40">
              </a>
              <div class="text">
                <div class="d-flex">
                  <p :id="message.id">{{message.content}}</p>
                  <div class="dropdown ms-3 d-flex align-items-start">
                    <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton13"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fas fa-ellipsis-v text--dark-100"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton13">
                      <li><a @click="navigator.clipboard.writeText(message.content)"
                          class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14"
                          href="#">sao chép<i class="far fa-copy text--dark-100"></i></a></li>
                      <li><a
                          class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14"
                          href="#">xóa<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                    </ul>
                  </div>
                </div>
                <span class="time">{{chatRooms.formatDate(message.createAt) + ' ' +
                  chatRooms.formatTime(message.createAt)}}</span>
              </div>
            </div>

          </div>
          <div v-else class="message right mb-5 d-flex justify-content-end">
            <div class="width--500 d-flex">
              <a :data-tooltip="message.fromUser.name" data-placement="top" class="me-3 hw-40">
                <img :src="message.fromUser.avatar" alt="" class="rounded-circle hw-40">
              </a>
              <div class="text">
                <div class="d-flex">
                  <p>{{message.content}}</p>
                  <div class="dropdown ms-3 d-flex align-items-start">
                    <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton14"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fas fa-ellipsis-v text--dark-100"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton14">
                      <li><a @click="navigator.clipboard.writeText(message.content)"
                          class="dropdown-item d-flex justify-content-between align-items-center" href="#">sao chép<i
                            class="far fa-copy"></i></a></li>
                      <li><a class="dropdown-item d-flex justify-content-between align-items-center" href="#">xóa<i
                            class="fas fa-trash-alt"></i></a></li>
                    </ul>
                  </div>
                </div>
                <span class="time">{{chatRooms.formatDate(message.createAt) + ' ' +
                  chatRooms.formatTime(message.createAt)}}</span>
              </div>

            </div>
          </div>
        </template>
        <!-- message end -->
      </div>
      <!-- message content end -->
      <div class="chat-footer position-fixed bottom-0 bg--light-gray-200">
        <form class="form">
          <div class="d-flex">
            <div class="dropdown d-flex">
              <button class="btn p-0 btn-secondary dropdown-toggle ms-2" type="button" id="dropdownMenuButton22"
                data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-plus-circle text--dark-100 font-size--18"></i>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton22">
                <li class="input-file dropdown-item">
                  <label id="files1"
                    class="btn text-decoration-none d-flex justify-content-between align-items-center font-size--14 p-0"><i
                      class="far fa-file-archive me-2"></i>attach a file
                    <input name="fileInput" type="file" class="form-control-file d-none"></label>
                </li>
                <li class="input-file dropdown-item">
                  <label id="files2"
                    class="btn text-decoration-none d-flex justify-content-between align-items-center font-size--14 p-0"><i
                      class="far fa-images me-2"></i>photos or videos
                    <input name="fileInput" type="file" class="form-control-file d-none"></label>
                </li>
                <li>
                  <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#"><i
                      class="far fa-smile-beam me-2"></i>emoji</a>
                </li>
              </ul>
            </div>
            <div class="input-group">
              <textarea @keydown.enter.prevent="sendMessageWithEnter($event)"
                class="form-control border-0 rounded p-2 mx-2" id="FormControlTextarea9" rows="1" ref="chatSendRef"></textarea>
            </div>
            <button type="button" class="btn bg--primary submit-btn text-white me-2" @click.prevent="sendMessageWithButton()"><i
                class="fas fa-paper-plane"></i></button>
          </div>
        </form>
      </div>
      <!-- message footer end -->
      <div class="right-sidebar border-start border--gray" :class="{show: isShowRightBar}">
        <div
          class="profile-info d-flex justify-content-center py-3 mb-2 border-bottom border--gray sticky-top bg--white">
          <div class="text-center">
            <img
              :src="chatRooms.getConversationOfSelectedRoom.avatar ? chatRooms.getConversationOfSelectedRoom.avatar : noImage"
              alt="" class="hw-100 rounded-circle mb-1 img-fluid">
            <h2>{{chatRooms.getConversationOfSelectedRoom.name}}</h2>
            <span class="status online position-relative">active</span>
          </div>
          <div @click.prevent="isShowRightBar=false" class="close-icon user-profile-hide position-absolute"><i
              class="fas fa-times"></i></div>
        </div>
        <div class="description text-center pb-3 mb-5 px-3">
          <p>{{chatRooms.getConversationOfSelectedRoom.description ? chatRooms.getConversationOfSelectedRoom.description
            : 'Không có mô tả!'}}</p>
        </div>

        <div class="user-profile-accordion accordion px-3" id="accordionExample9">
          <div class="accordion-item border border--gray mb-3">
            <h2 class="accordion-header" id="heading5">
              <button v-if="!chatRooms.getConversationOfSelectedRoom.isGroup"
                class="accordion-button bg--light-gray-200 p-3 border-0" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapse5"><i
                  class="far fa-user me-2"></i>Thông tin cá nhân</button>
              <button v-else class="accordion-button bg--light-gray-200 p-3 border-0" type="button"
                data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapse5"><i
                  class="fas fa-user-friends me-2"></i>Thông tin nhóm</button>
            </h2>
            <div v-if="!chatRooms.getConversationOfSelectedRoom.isGroup" id="collapse5"
              class="accordion-collapse collapse show border-0" aria-labelledby="heading5"
              data-bs-parent="#accordionExample9">
              <div class="card-body bg--white remove-space--bottom">
                <div class="mb-4">
                  <p>Họ tên</p>
                  <h3>{{chatRooms.getConversationOfSelectedRoom.name}}</h3>
                </div>
                <div class="mb-4">
                  <p>Email</p>
                  <a :href="'mailto:' + chatRooms.getConversationOfSelectedRoom.email"
                    class="email-address">{{chatRooms.getConversationOfSelectedRoom.email}}</a>
                </div>
                <div class="mb-4">
                  <p>Địa chỉ</p>
                  <h3>{{chatRooms.getConversationOfSelectedRoom.address ?
                    chatRooms.getConversationOfSelectedRoom.address : 'Không có thông tin.'}}</h3>
                </div>
                <div class="mb-4">
                  <p>Mô tả</p>
                  <h3>{{chatRooms.getConversationOfSelectedRoom.description ?
                    chatRooms.getConversationOfSelectedRoom.description : 'Không có thông tin.'}}</h3>
                </div>
              </div>
            </div>
            <div v-else id="collapse5" class="accordion-collapse collapse show border-0" aria-labelledby="heading5"
              data-bs-parent="#accordionExample9">
              <div class="card-body bg--white remove-space--bottom">
                <div class="mb-4">
                  <p>Tên nhóm</p>
                  <h3>{{chatRooms.getConversationOfSelectedRoom.name}}</h3>
                </div>
                <div class="mb-4">
                  <p>Mô tả</p>
                  <h3>{{chatRooms.getConversationOfSelectedRoom.description ?
                    chatRooms.getConversationOfSelectedRoom.description : 'Không có thông tin.'}}</h3>
                </div>
              </div>
            </div>
          </div>

          <div v-if="chatRooms.getConversationOfSelectedRoom.isGroup" class="accordion-item border border--gray mb-3">
            <h3 class="accordion-header" id="heading6">
              <button class="accordion-button bg--light-gray-200 collapsed p-3 border-0" type="button"
                data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6"><i
                  class="fas fa-list me-2"></i>Thành viên nhóm</button>
            </h3>
            <div id="collapse6" class="accordion-collapse collapse border-0" aria-labelledby="heading6"
              data-bs-parent="#accordionExample9">
              <div class="card-body bg--white">
                <!-- <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                  <i class="far fa-images text--primary font-size--18"></i>
                  <div>
                    <h3>1.png</h3>
                    <p>23.00 KB </p>
                  </div>
                  <a href="assets/images/avatar/profile.png" download><i class="fas fa-download text--dark-100"></i></a>
                </div> -->
                <div v-for="member in chatRooms.getConversationOfSelectedRoom.members" :key="member.id"
                  class="row border mb-2 px-2 py-2">
                  <div class="col-3">
                    <img class="rounded-circle me-3 hw-40" :src="member.avatar ? member.avatar : noImage"
                      :alt="member.name" />
                  </div>
                  <div class="col-9 container-for-center d-flex justify-content-end">
                    <p class="vertical-center" style="text-align: center;">{{member.name}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- chat body end -->
  </div>
</template>
<script setup>
import { chatRoomStore } from '../stores/chatRoom';
import { authenStore } from '../stores/authen';
import PopupCallVideo from './PopupCallVideo.vue';
import axios from 'axios';
import { onMounted, onUnmounted } from '@vue/runtime-core';
import { storeToRefs } from 'pinia'
import appEmitter from '../composables/emiter.js';
import { isProxy, toRaw, ref, reactive, watch } from 'vue';
const ROOT_URL = import.meta.env.VITE_ROOT_API;
const emit = defineEmits(['sendMessage', 'submit'])
const chatRooms = chatRoomStore();
const authen = authenStore();
const emiter = appEmitter();
const noImage = ref('https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg');

const chatContentRef = ref(null);
const chatSendRef = ref(null);

let isShowRightBar = ref(false);
const isShowPopupCallVideo = ref(false);

function loadMessage(selectedRoom) {
    axios.get(`${ROOT_URL}/message/get-messages-by-room`, {
        params: {
            roomId: selectedRoom.id,
            pageSize: selectedRoom.pageSize ? selectedRoom.pageSize : 50,
            pageNumber: selectedRoom.pageNumber ? selectedRoom.pageNumber : 0
        }
    }).then(res => {
        // đảo ngược array messages trước khi update vào store state
        let messages = res.data.content.reverse();
        chatRooms.updateMessagesOfRoom(selectedRoom.id, messages);
    });
}

function handerSelectRoom(selectedRoomId) {
  console.log("+++++++ clicked +++++++")
  if (selectedRoomId === '') return;
  // với cách truy cập thuộc tính thông thường, Pinia sẽ trả về 1 proxy để ngăn cản chúng ta thay đổi thuộc tính của state tức thời,
  // sử dụng toRaw để truy cập target của Proxy, tuy nhiên rất nguy hiểm vì nó có thể thay đổi data của thuộc tính của state tức thời, ảnh hưởng
  // đến hành vi của đối tượng.
  // ref về toRaw: https://stackoverflow.com/questions/51096547/how-to-get-the-target-of-a-javascript-proxy/70805174#70805174
  // có thể sẽ thử cách chính thống hơn của Pinia: https://pinia.vuejs.org/core-concepts/state.html#mutating-the-state
  let selectedRoom = toRaw(chatRooms.rooms.find(r => r.id === selectedRoomId));
  // nếu selectedRoom.messages underfined (lần đầu load list chat rooms, chưa có message đi kèm) hoặc số lượng message trong phòng bằng 0 thì
  // mới call lại api get messages theo id của room
  if (!selectedRoom.messages || selectedRoom.messages.length === 0) {
    loadMessage(selectedRoom);
  }
}

function sendMessageWithEnter(event) {
  const message = event.target.value;
  if (!message || message.trim() === '') return;
  const messagePayload = {
    content: message,
    fromUser: authen.getUserInfo.id,
    roomId: chatRooms.selected
  }
  emit('sendMessage', messagePayload);
  event.target.value = '';
}

function sendMessageWithButton() {
  const message = chatSendRef.value.value;
  if (!message || message.trim() === '') return;
  const messagePayload = {
    content: message,
    fromUser: authen.getUserInfo.id,
    roomId: chatRooms.selected
  }
  emit('sendMessage', messagePayload);
  chatSendRef.value.value = '';
}

function scrollToBottom() {
  chatContentRef.value.scrollIntoView({behavior: "smooth", block: "end"});
}

function closeChats() {
  setTimeout(() => {
    document.getElementsByClassName("chats")[0].classList.remove("open");
  }, 0);
}


// fix lỗi emitter nhận sự kiện nhiều lần
// https://stackoverflow.com/a/70828595
// onMounted(() => {
//   // emiter.on('select-room', handerSelectRoom(chatRooms.selected));
// })

// onUnmounted(() => {
//   // emiter.off('select-room', handerSelectRoom(chatRooms.selected));
// })

</script>

<style scoped>
.container-for-center {
  position: relative;
}

.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>