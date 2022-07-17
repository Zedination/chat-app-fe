<script setup>
import { authenStore } from '../stores/authen';
import axios from 'axios';
import { onMounted } from 'vue';

const authen_store = authenStore();
onMounted(async () => {
  try {
    let result = await axios.get(`${import.meta.env.VITE_ROOT_API}/user/get-principal`);
    console.log(result)
    authen_store.userInfo = result.data;
  } catch (ex) {

  }
})
</script>
<template>
  <div class="tab_pane profile-tab">
    <div class="sidebar-header p-3">
      <h1>profile</h1>
      <p>Thông tin cá nhân!</p>
    </div>
    <div class="p-3">
      <div class="d-flex justify-content-center position-relative mb-2">
        <div class="text-center">
          <img
            :src="authen_store.userInfo.avatar"
            alt=""
            class="hw-100 rounded-circle mb-1 img-fluid"
          />
          <h2>{{authen_store.userInfo.name}}</h2>
          <span class="status online position-relative">Đang online</span>
        </div>
        <div class="dropdown user-chat-nav position-absolute">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-ellipsis-v text--dark-100"></i>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Cập nhật thông tin</a></li>
            <li><a class="dropdown-item" href="#">Xóa tài khoản</a></li>
            <li><a class="dropdown-item" href="#">another action</a></li>
          </ul>
        </div>
      </div>
      <div class="description border-bottom border--gray pb-3 mb-5">
        <p style="text-align: center;">
          {{authen_store.userInfo.description ? authen_store.userInfo.description : 'Không có mô tả!'}}
        </p>
      </div>
      <div
        class="user-profile-accordion accordion accordion-flush remove-space--bottom"
        id="accordionExample1"
      >
        <div class="accordion-item border border--gray mb-3">
          <h3 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button p-3 border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="true"
              aria-controls="flush-collapseOne"
            >
              <i class="far fa-user me-2"></i>Thông tin chi tiết
            </button>
          </h3>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse border-0 show"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionExample1"
          >
            <div class="card-body bg--white remove-space--bottom">
              <div class="mb-4">
                <p>Họ tên</p>
                <h3>{{authen_store.userInfo.name}}</h3>
              </div>
              <div class="mb-4">
                <p>Email</p>
                <a :href="'mailto:' + authen_store.userInfo.email" class="email-address"
                  >{{authen_store.userInfo.email}}</a
                >
              </div>
              <div class="mb-4">
                <p>Địa chỉ</p>
                <h3>{{authen_store.userInfo.address}}</h3>
              </div>
              <div class="mb-4">
                <p>Mô tả</p>
                <h3>{{authen_store.userInfo.description ? authen_store.userInfo.description : 'Không có mô tả!'}}</h3>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="accordion-item border border--gray mb-3">
          <h3 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed p-3 border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <i class="fas fa-paperclip me-2"></i>Attached Files
            </button>
          </h3>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse border-0"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionExample1"
          >
            <div class="card-body bg--white">
              <div
                class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2"
              >
                <i class="far fa-images text--primary font-size--18"></i>
                <div>
                  <h3>1.png</h3>
                  <p>23.00 KB</p>
                </div>
                <a href="../assets/images/avatar/profile.png" download
                  ><i class="fas fa-download text--dark-100"></i
                ></a>
              </div>
              <div
                class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2"
              >
                <i class="far fa-file-archive text--primary font-size--18"></i>
                <div>
                  <h3>1.png</h3>
                  <p>442.00 KB</p>
                </div>
                <a href="../assets/zip/fontawesome.zip" download
                  ><i class="fas fa-download text--dark-100"></i
                ></a>
              </div>
              <div
                class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2"
              >
                <i class="far fa-images text--primary font-size--18"></i>
                <div>
                  <h3>1.png</h3>
                  <p>23.00 KB</p>
                </div>
                <a href="../assets/images/avatar/profile.png" download
                  ><i class="fas fa-download text--dark-100"></i
                ></a>
              </div>
              <div
                class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2"
              >
                <i class="far fa-file-archive text--primary font-size--18"></i>
                <div>
                  <h3>1.png</h3>
                  <p>442.00 KB</p>
                </div>
                <a href="../assets/zip/fontawesome.zip" download
                  ><i class="fas fa-download text--dark-100"></i
                ></a>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<style></style>
