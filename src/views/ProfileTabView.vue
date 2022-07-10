<script setup></script>
<template>
  <div class="tab_pane profile-tab">
    <div class="sidebar-header p-3">
      <h1>profile</h1>
      <p>Personal Information & Settings</p>
    </div>
    <div class="p-3">
      <div class="d-flex justify-content-center position-relative mb-2">
        <div class="text-center">
          <img
            src="../assets/images/avatar/profile.png"
            alt=""
            class="hw-100 rounded-circle mb-1 img-fluid"
          />
          <h2>Catherine Richardson</h2>
          <span class="status online position-relative">active</span>
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
            <li><a class="dropdown-item" href="#">edit</a></li>
            <li><a class="dropdown-item" href="#">action</a></li>
            <li><a class="dropdown-item" href="#">another action</a></li>
          </ul>
        </div>
      </div>
      <div class="description border-bottom border--gray pb-3 mb-5">
        <p>
          If several languages coalesce, the grammar of the resulting language is more
          simple and regular than that of the individual.
        </p>
      </div>
      <div
        class="user-profile-accordion accordion accordion-flush remove-space--bottom"
        id="accordionExample1"
      >
        <div class="accordion-item border border--gray mb-3">
          <h3 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed p-3 border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="true"
              aria-controls="flush-collapseOne"
            >
              <i class="far fa-user me-2"></i>about
            </button>
          </h3>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse border-0"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionExample1"
          >
            <div class="card-body bg--white remove-space--bottom">
              <div class="mb-4">
                <p>Name</p>
                <h3>Catherine Richardson</h3>
              </div>
              <div class="mb-4">
                <p>Email</p>
                <a href="mailto:catherine.richard@gmail.com" class="email-address"
                  >catherine.richard@gmail.com</a
                >
              </div>
              <div class="mb-4">
                <p>Time</p>
                <h3>10PM</h3>
              </div>
              <div class="mb-4">
                <p>Location</p>
                <h3>California, USA</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item border border--gray mb-3">
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
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
