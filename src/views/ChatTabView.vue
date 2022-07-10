<template>
    <div class="tab_pane chats-tab active">
              <div class="sidebar-header p-3">
                <h1 class="mb-3">chats</h1>
                <div class="search position-relative mb-3">
                  <form action="#" class="form search-form-1">
                    <input type="text" placeholder="search" class="w-100"/>
                    <button type="button"><i class="fa fa-search"></i></button>
                  </form>
                </div>
                <h2 class="text-capitalize font-weight--700">recent</h2>

              </div>
              <div class="p-3">
                <div class="chat-list">
                  <ul class="nav remove-space--bottom">
                    <li class="chat-item border border--gray nav-item w-100 rounded unread mb-3 open">
                      <a class="nav-link active d-flex justify-content-between p-3" data-bs-toggle="pill" href="#conversation1">
                        <div class="d-flex">
                          <div class="position-relative">
                            <img src="../assets/images/avatar/1.png" alt="" class="rounded-circle me-3 hw-40 img-fluid">
                            <span class="status online position-absolute"></span>
                          </div>
                          <div class="chat-content">
                            <h3>Janette Dalton</h3>
                            <p>Catch you later! Bye-bye!</p>
                          </div>
                        </div>
                        <div class="chat-time">
                          <h3 class="text--gray-200">Just now</h3>
                        </div>
                      </a>
                    </li>
                    <li class="chat-item border border--gray nav-item w-100 rounded mb-3">
                      <a class="nav-link d-flex justify-content-between p-3" data-bs-toggle="pill" href="#conversation2">
                        <div class="d-flex">
                          <div class="position-relative">
                            <img src="../assets/images/avatar/2.png" alt="" class="rounded-circle me-3 hw-40 img-fluid">
                            <span class="status away position-absolute"></span>
                          </div>
                          <div class="chat-content">
                            <h3>Barry Hall</h3>
                            <p>Okay!</p>
                          </div>
                        </div>
                        <div class="chat-time">
                          <h3 class="text--gray-200">10:50</h3>
                        </div>
                      </a>
                    </li>
                    <li class="chat-item border border--gray nav-item w-100 rounded mb-3">
                      <a class="nav-link d-flex justify-content-between p-3" data-bs-toggle="pill" href="#conversation3">
                        <div class="d-flex">
                          <div class="position-relative">
                            <img src="../assets/images/avatar/3.png" alt="" class="rounded-circle me-3 hw-40 img-fluid">
                            <span class="status online position-absolute"></span>
                          </div>
                          <div class="chat-content">
                            <h3>Steve Walker</h3>
                            <p>Good morning</p>
                          </div>
                        </div>
                        <div class="chat-time">
                          <h3 class="text--gray-200">3:20</h3>
                        </div>
                      </a>
                    </li>
                    <li class="chat-item border border--gray nav-item w-100 rounded unread mb-3">
                      <a class="nav-link d-flex justify-content-between p-3" data-bs-toggle="pill" href="#conversation4">
                        <div class="d-flex">
                          <div class="position-relative">
                            <img src="../assets/images/avatar/4.png" alt="" class="rounded-circle me-3 hw-40 img-fluid">
                            <span class="status invisible-icon position-absolute"></span>
                          </div>
                          <div class="chat-content">
                            <h3>Byrom Guittet</h3>
                            <p>Bye-bye!</p>
                          </div>
                        </div>
                        <div class="chat-time">
                          <h3 class="text--gray-200">12:00</h3>
                        </div>
                      </a>
                    </li>
                    <li class="chat-item border border--gray nav-item w-100 rounded unread mb-3">
                      <a class="nav-link d-flex justify-content-between p-3" data-bs-toggle="pill" href="#conversation5">
                        <div class="d-flex">
                          <div class="position-relative">
                            <img src="../assets/images/avatar/5.png" alt="" class="rounded-circle me-3 hw-40 img-fluid">
                            <span class="status online position-absolute"></span>
                          </div>
                          <div class="chat-content">
                            <h3>Gibb Ivanchin</h3>
                            <p>Catch you later! Bye-bye!</p>
                          </div>
                        </div>
                        <div class="chat-time">
                          <h3 class="text--gray-200">Just now</h3>
                        </div>
                      </a>
                    </li>
                    <li class="chat-item border border--gray nav-item w-100 rounded mb-3">
                      <a class="nav-link d-flex justify-content-between p-3" data-bs-toggle="pill" href="#conversation6">
                        <div class="d-flex">
                          <div class="position-relative">
                            <img src="../assets/images/avatar/6.png" alt="" class="rounded-circle me-3 hw-40 img-fluid">
                            <span class="status online position-absolute"></span>
                          </div>
                          <div class="chat-content">
                            <h3> Marvin Rohan</h3>
                            <p>Okay!</p>
                          </div>
                        </div>
                        <div class="chat-time">
                          <h3 class="text--gray-200">10:50</h3>
                        </div>
                      </a>
                    </li>
                    <li class="chat-item border border--gray nav-item w-100 rounded mb-3">
                      <a class="nav-link d-flex justify-content-between p-3" data-bs-toggle="pill" href="#conversation7">
                        <div class="d-flex">
                          <div class="position-relative">
                            <img src="../assets/images/avatar/7.png" alt="" class="rounded-circle me-3 hw-40 img-fluid">
                            <span class="status offline position-absolute"></span>
                          </div>
                          <div class="chat-content">
                            <h3>Steve Walker</h3>
                            <p>Good morning</p>
                          </div>
                        </div>
                        <div class="chat-time">
                          <h3 class="text--gray-200">3:20</h3>
                        </div>
                      </a>
                    </li>
                    <li class="chat-item border border--gray nav-item w-100 rounded unread mb-3">
                      <a class="nav-link d-flex justify-content-between p-3" data-bs-toggle="pill" href="#conversation8">
                        <div class="d-flex">
                          <div class="position-relative">
                            <img src="../assets/images/avatar/8.png" alt="" class="rounded-circle me-3 hw-40 img-fluid">
                            <span class="status online position-absolute"></span>
                          </div>
                          <div class="chat-content">
                            <h3>Albert K. Johansen</h3>
                            <p>Bye-bye!</p>
                          </div>
                        </div>
                        <div class="chat-time">
                          <h3 class="text--gray-200">12:00</h3>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
</template>