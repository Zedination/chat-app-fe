<template>
    <div class="chats tab-content w-100">
          <div class="chat-body tab-pane fade active" id="conversation1">
            <div class="chat-header d-flex  justify-content-between align-items-center border-bottom border--gray p-4 sticky-top bg--white">
              <!-- <button type="button" id="toggle"><i class="fas fa-compress"></i></button> -->
              <div class="media d-flex align-items-center">
                <div class="close-icon user-chat-remove d-lg-none me-3"><i class="fas fa-arrow-left font-size--14 text--dark-100"></i></div>
                <div class="position-relative">
                  <img src="assets/images/avatar/1.png" alt="" class="rounded-circle me-3 hw-40">
                  <span class="status online"></span>
                </div>
                  <div class="media-body">
                    <a href="#"><h3 class="user-name">Janette Dalton</h3></a>
                  </div>
              </div>
              <ul class="user-chat-nav list-unstyled d-flex align-items-center m-0 remove-space--right">
                <li class="chat-search-form position-relative me-4">
                  <a href="#search" class="search-btn">
                    <i class="fas fa-search text--dark-100 font-size--18"></i>
                  </a>
                  <form action="#" class="form search-form-1 position-absolute">
                    <input type="text" placeholder="search" class="w-100"/>
                    <button type="button"><i class="fas fa-search text--dark-100 font-size--18"></i></button>
                  </form>
                </li>
                <li class="me-4">
                  <a href="#" class="user-icon">
                    <i class="far fa-user text--dark-100 font-size--18"></i>
                  </a>
                </li>
                <li class="me-4">
                  <div class="dropdown">
                    <button class="btn p-0 btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton12" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fas fa-ellipsis-v text--dark-100 font-size--18"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton12">
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#">archive<i class="fas fa-archive"></i></a>
                      </li>
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#">block<i class="fas fa-ban"></i></a></li>
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#">delete<i class="fas fa-trash-alt"></i></a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <!-- message header end -->
            <div class="chat-content p-4 mb-3">
              <div class="date text-center mb-5">
                <span class="text--gray-200 font-size--14 text-capitalize">20/12/2020</span>
              </div>
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/1.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>We've got some killer ideas kicking about already.</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton13" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton13">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>

              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/2.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Can't wait! How are we coming along with the client?</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton14" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton14">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center" href="#">copy<i class="far fa-copy"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center" href="#">remove<i class="fas fa-trash-alt"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                  
                </div>
              </div>
              <!-- message end -->
              <div class="date text-center mb-5">
                <span class="text--gray-200 font-size--14 text-capitalize">today</span>
              </div>
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/1.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Coming along nicely, we've got a draft for the client quarries completed.</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton15" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton15">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">08:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                   <img src="assets/images/avatar/2.png" alt="" class="rounded-circle hw-40">
                 </a>
                 <div class="text">
                   <div class="d-flex">
                     <p>Roger that boss!</p>
                     <div class="dropdown ms-3 d-flex align-items-start">
                      <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                       <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton16" data-bs-toggle="dropdown" aria-expanded="false">
                         <i class="fas fa-ellipsis-v text--dark-100"></i>
                       </button>
                       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton16">
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                       </ul>
                     </div>
                   </div>
                   <div class="d-flex">
                     <p>I have already started gathering some stuff for the mood boards, excited to start!</p>
                     <div class="dropdown ms-3 d-flex align-items-start">
                      <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                       <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton17" data-bs-toggle="dropdown" aria-expanded="false">
                         <i class="fas fa-ellipsis-v text--dark-100"></i>
                       </button>
                       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton17">
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                       </ul>
                     </div>
                   </div>
                   <span class="time">09:46 AM</span>
                 </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/1.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Great start guys, I've added some notes to the task. We may need to make some adjustments to the last couple of items - but no biggie!</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton18" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton18">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">08:48 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end ">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                   <img src="assets/images/avatar/2.png" alt="" class="rounded-circle hw-40">
                 </a>
                 <div class="text">
                   <div class="d-flex">
                     <p>Well done all. See you all at 2 for the kick-off meeting.</p>
                     <div class="dropdown ms-3 d-flex align-items-start">
                      <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                       <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton19" data-bs-toggle="dropdown" aria-expanded="false">
                         <i class="fas fa-ellipsis-v text--dark-100"></i>
                       </button>
                       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton19">
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                       </ul>
                     </div>
                   </div>
                   <span class="time">08:49 AM</span>
                 </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/1.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>We've got some killer ideas kicking about already.</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton20" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton20">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/2.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Can't wait! How are we coming along with the client?</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton21" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton21">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
            </div>
            <!-- message content end -->
            <div class="chat-footer position-fixed bottom-0 bg--light-gray-200">
              <form action="#" class="form">
                <div class="d-flex">
                  <div class="dropdown d-flex">
                    <button class="btn p-0 btn-secondary dropdown-toggle ms-2" type="button" id="dropdownMenuButton22" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fas fa-plus-circle text--dark-100 font-size--18"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton22">
                      <li class="input-file dropdown-item">
                        <label id="files1" class="btn text-decoration-none d-flex justify-content-between align-items-center font-size--14 p-0"><i class="far fa-file-archive me-2"></i>attach a file
                        <input name="fileInput"  type="file" class="form-control-file d-none"></label>
                      </li>
                      <li class="input-file dropdown-item">
                        <label id="files2" class="btn text-decoration-none d-flex justify-content-between align-items-center font-size--14 p-0"><i class="far fa-images me-2"></i>photos or videos
                        <input name="fileInput"  type="file" class="form-control-file d-none"></label>
                      </li>
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#"><i class="far fa-smile-beam me-2"></i>emoji</a>
                      </li>
                    </ul>
                  </div>
                  <div class="input-group">
                    <textarea class="form-control border-0 rounded p-2 mx-2" id="FormControlTextarea9" rows="1"></textarea>
                  </div>
                  <button type="submit" class="btn bg--primary submit-btn text-white me-2"><i class="fas fa-paper-plane"></i></button>
                </div>
              </form>
            </div>
            <!-- message footer end -->
            <div class="right-sidebar border-start border--gray">
              <div class="profile-info d-flex justify-content-center py-3 mb-2 border-bottom border--gray sticky-top bg--white">
                <div class="text-center">
                  <img src="assets/images/avatar/1.png" alt="" class="hw-100 rounded-circle mb-1 img-fluid">
                  <h2>Catherine Richardson</h2>
                  <span class="status online position-relative">active</span>
                </div>
                <div class="close-icon user-profile-hide position-absolute"><i class="fas fa-times"></i></div>
              </div>
              <div class="description text-center pb-3 mb-5 px-3">
                <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
              </div>
            
              <div class="user-profile-accordion accordion px-3" id="accordionExample9">
                <div class="accordion-item border border--gray mb-3">
                  <h2 class="accordion-header" id="heading5">
                    <button class="accordion-button bg--light-gray-200 p-3 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapse5"><i class="far fa-user me-2"></i>personal info</button>
                  </h2>
                  <div id="collapse5" class="accordion-collapse collapse show border-0" aria-labelledby="heading5" data-bs-parent="#accordionExample9">
                    <div class="card-body bg--white remove-space--bottom">
                      <div class="mb-4">
                        <p>Name</p>
                        <h3>Catherine Richardson</h3>
                      </div>
                      <div class="mb-4">
                        <p>Email</p>
                        <a href="mailto:catherine.richard@gmail.com" class="email-address">catherine.richard@gmail.com</a>
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
                  <h3 class="accordion-header" id="heading6">
                    <button class="accordion-button bg--light-gray-200 collapsed p-3 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6"><i class="fas fa-paperclip  me-2"></i>Attached Files</button>
                  </h3>
                  <div id="collapse6" class="accordion-collapse collapse border-0" aria-labelledby="heading6" data-bs-parent="#accordionExample9">
                    <div class="card-body bg--white">
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-images text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>23.00 KB </p>
                        </div>
                        <a href="assets/images/avatar/profile.png" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-file-archive text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>442.00 KB </p>
                        </div>
                        <a href="assets/zip/fontawesome.zip" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-images text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>23.00 KB </p>
                        </div>
                        <a href="assets/images/avatar/profile.png" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-file-archive text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>442.00 KB </p>
                        </div>
                        <a href="assets/zip/fontawesome.zip" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-file-archive text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>442.00 KB </p>
                        </div>
                        <a href="assets/zip/fontawesome.zip" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <!-- chat body end -->
          <div class="chat-body tab-pane fade" id="conversation2">
            <div class="chat-header d-flex  justify-content-between align-items-center border-bottom border--gray p-4 sticky-top bg--white">
              <div class="media d-flex align-items-center">
                <div class="close-icon user-chat-remove d-lg-none me-3"><i class="fas fa-arrow-left font-size--14 text--dark-100"></i></div>
                <div class="position-relative">
                  <img src="assets/images/avatar/2.png" alt="" class="rounded-circle me-3 hw-40">
                  <span class="status away online"></span>
                </div>
                  <div class="media-body">
                    <a href="#"><h3 class="user-name">Barry Hall</h3></a>
                  </div>
              </div>
              <ul class="user-chat-nav list-unstyled d-flex align-items-center m-0 remove-space--right">
                <li class="chat-search-form position-relative me-4">
                  <a href="#search" class="search-btn">
                    <i class="fas fa-search text--dark-100 font-size--18"></i>
                  </a>
                  <form action="#" class="form search-form-1 position-absolute">
                    <input type="text" placeholder="search" class="w-100"/>
                    <button type="button"><i class="fas fa-search text--dark-100 font-size--18"></i></button>
                  </form>
                </li>
                <li class="me-4">
                  <a href="#" class="user-icon">
                    <i class="far fa-user text--dark-100 font-size--18"></i>
                  </a>
                </li>
                <li class="me-4">
                  <div class="dropdown">
                    <button class="btn p-0 btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton23" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fas fa-ellipsis-v text--dark-100 font-size--18"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton23">
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#">archive<i class="fas fa-archive"></i></a>
                      </li>
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#">block<i class="fas fa-ban"></i></a></li>
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#">delete<i class="fas fa-trash-alt"></i></a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <!-- message header end -->
            <div class="chat-content p-4 mb-3">
              <div class="date text-center mb-5">
                <span class="text--gray-200 font-size--14 text-capitalize">20/12/2020</span>
              </div>
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/2.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>We've got some killer ideas kicking about already.</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton24" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton24">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>

              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/3.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Can't wait! How are we coming along with the client?</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton25" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton25">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center" href="#">copy<i class="far fa-copy"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center" href="#">remove<i class="fas fa-trash-alt"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="date text-center mb-5">
                <span class="text--gray-200 font-size--14 text-capitalize">today</span>
              </div>
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/2.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Coming along nicely, we've got a draft for the client quarries completed.</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton26" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton26">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">08:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                   <img src="assets/images/avatar/3.png" alt="" class="rounded-circle hw-40">
                 </a>
                 <div class="text">
                   <div class="d-flex">
                     <p>Roger that boss!</p>
                     <div class="dropdown ms-3 d-flex align-items-start">
                      <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                       <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton27" data-bs-toggle="dropdown" aria-expanded="false">
                         <i class="fas fa-ellipsis-v text--dark-100"></i>
                       </button>
                       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton27">
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                       </ul>
                     </div>
                   </div>
                   <div class="d-flex">
                     <p>I have already started gathering some stuff for the mood boards, excited to start!</p>
                     <div class="dropdown ms-3 d-flex align-items-start">
                      <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                       <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton28" data-bs-toggle="dropdown" aria-expanded="false">
                         <i class="fas fa-ellipsis-v text--dark-100"></i>
                       </button>
                       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton28">
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                       </ul>
                     </div>
                   </div>
                   <span class="time">09:46 AM</span>
                 </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/2.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Great start guys, I've added some notes to the task. We may need to make some adjustments to the last couple of items - but no biggie!</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton29" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton29">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">08:48 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end ">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                   <img src="assets/images/avatar/3.png" alt="" class="rounded-circle hw-40">
                 </a>
                 <div class="text">
                   <div class="d-flex">
                     <p>Well done all. See you all at 2 for the kick-off meeting.</p>
                     <div class="dropdown ms-3 d-flex align-items-start">
                      <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                       <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton30" data-bs-toggle="dropdown" aria-expanded="false">
                         <i class="fas fa-ellipsis-v text--dark-100"></i>
                       </button>
                       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton30">
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                       </ul>
                     </div>
                   </div>
                   <span class="time">08:49 AM</span>
                 </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/2.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>We've got some killer ideas kicking about already.</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton31" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton31">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/3.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Can't wait! How are we coming along with the client?</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton32" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton32">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
            </div>
            <!-- message content end -->
            <div class="chat-footer position-fixed bottom-0 bg--light-gray-200">
              <form action="#" class="form">
                <div class="d-flex">
                  <div class="dropdown d-flex">
                    <button class="btn p-0 btn-secondary dropdown-toggle ms-2" type="button" id="dropdownMenuButton33" data-bs-toggle="dropdown" aria-expanded="false">
                     <i class="fas fa-plus-circle text--dark-100 font-size--18"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton33">
                      <li class="input-file dropdown-item">
                        <label id="files3" class="btn text-decoration-none d-flex justify-content-between align-items-center font-size--14 p-0"><i class="far fa-file-archive me-2"></i>attach a file
                        <input name="fileInput"  type="file" class="form-control-file d-none"></label>
                      </li>
                      <li class="input-file dropdown-item">
                        <label id="files4" class="btn text-decoration-none d-flex justify-content-between align-items-center font-size--14 p-0"><i class="far fa-images me-2"></i>photos or videos
                        <input name="fileInput"  type="file" class="form-control-file d-none"></label>
                      </li>
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#"><i class="far fa-smile-beam me-2"></i>emoji</a>
                      </li>
                    </ul>
                  </div>
                  <div class="input-group">
                    <textarea class="form-control border-0 rounded p-2 mx-2" id="FormControlTextarea2" rows="1"></textarea>
                  </div>
                  <button type="submit" class="btn bg--primary submit-btn text-white me-2"><i class="fas fa-paper-plane"></i></button>
                </div>
              </form>
            </div>
            <!-- message footer end -->
            <div class="right-sidebar border-start border--gray">
              <div class="profile-info d-flex justify-content-center py-3 mb-2 border-bottom border--gray sticky-top bg--white">
                <div class="text-center">
                  <img src="assets/images/avatar/2.png" alt="" class="hw-100 rounded-circle mb-1 img-fluid">
                  <h2>Barry Hall</h2>
                  <span class="status away position-relative">active</span>
                </div>
                <div class="close-icon user-profile-hide position-absolute"><i class="fas fa-times"></i></div>
              </div>
              <div class="description text-center pb-3 mb-5 px-3">
                <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
              </div>
              <div class="user-profile-accordion accordion px-3" id="accordionExample10">
                <div class="accordion-item border border--gray mb-3">
                  <h2 class="accordion-header" id="heading7">
                    <button class="accordion-button bg--light-gray-200 p-3 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="true" aria-controls="collapse7"><i class="far fa-user me-2"></i>personal info</button>
                  </h2>
                  <div id="collapse7" class="accordion-collapse collapse show border-0" aria-labelledby="heading7" data-bs-parent="#accordionExample10">
                    <div class="card-body bg--white remove-space--bottom">
                      <div class="mb-4">
                        <p>Name</p>
                        <h3>Catherine Richardson</h3>
                      </div>
                      <div class="mb-4">
                        <p>Email</p>
                        <a href="mailto:catherine.richard@gmail.com" class="email-address">catherine.richard@gmail.com</a>
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
                  <h3 class="accordion-header" id="heading8">
                    <button class="accordion-button bg--light-gray-200 collapsed p-3 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8"><i class="fas fa-paperclip  me-2"></i>Attached Files</button>
                  </h3>
                  <div id="collapse8" class="accordion-collapse collapse border-0" aria-labelledby="heading8" data-bs-parent="#accordionExample10">
                    <div class="card-body bg--white">
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-images text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>23.00 KB </p>
                        </div>
                        <a href="assets/images/avatar/profile.png" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-file-archive text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>442.00 KB </p>
                        </div>
                        <a href="assets/zip/fontawesome.zip" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-images text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>23.00 KB </p>
                        </div>
                        <a href="assets/images/avatar/profile.png" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-file-archive text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>442.00 KB </p>
                        </div>
                        <a href="assets/zip/fontawesome.zip" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-file-archive text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>442.00 KB </p>
                        </div>
                        <a href="assets/zip/fontawesome.zip" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- chat body end -->
          <div class="chat-body tab-pane fade" id="conversation3">
            <div class="chat-header d-flex  justify-content-between align-items-center border-bottom border--gray p-4 sticky-top bg--white">
              <div class="media d-flex align-items-center">
                <div class="close-icon user-chat-remove d-lg-none me-3"><i class="fas fa-arrow-left font-size--14 text--dark-100"></i></div>
                <div class="position-relative">
                  <img src="assets/images/avatar/3.png" alt="" class="rounded-circle me-3 hw-40">
                  <span class="status online"></span>
                </div>
                  <div class="media-body">
                    <a href="#"><h3 class="user-name">Steve Walker</h3></a>
                  </div>
              </div>
              <ul class="user-chat-nav list-unstyled d-flex align-items-center m-0 remove-space--right">
                <li class="chat-search-form position-relative me-4">
                  <a href="#search" class="search-btn">
                    <i class="fas fa-search text--dark-100 font-size--18"></i>
                  </a>
                  <form action="#" class="form search-form-1 position-absolute">
                    <input type="text" placeholder="search" class="w-100"/>
                    <button type="button"><i class="fas fa-search text--dark-100 font-size--18"></i></button>
                  </form>
                </li>
                <li class="me-4">
                  <a href="#" class="user-icon">
                    <i class="far fa-user text--dark-100 font-size--18"></i>
                  </a>
                </li>
                <li class="me-4">
                  <div class="dropdown">
                    <button class="btn p-0 btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton34" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fas fa-ellipsis-v text--dark-100 font-size--18"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton34">
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#">archive<i class="fas fa-archive"></i></a>
                      </li>
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#">block<i class="fas fa-ban"></i></a></li>
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#">delete<i class="fas fa-trash-alt"></i></a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <!-- message header end -->
            <div class="chat-content p-4 mb-3">
              <div class="date text-center mb-5">
                <span class="text--gray-200 font-size--14 text-capitalize">20/12/2020</span>
              </div>
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/3.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>We've got some killer ideas kicking about already.</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton35" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton35">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>

              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/4.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Can't wait! How are we coming along with the client?</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton36" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton36">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center" href="#">copy<i class="far fa-copy"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center" href="#">remove<i class="fas fa-trash-alt"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="date text-center mb-5">
                <span class="text--gray-200 font-size--14 text-capitalize">today</span>
              </div>
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/3.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Coming along nicely, we've got a draft for the client quarries completed.</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton37" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton37">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">08:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                   <img src="assets/images/avatar/4.png" alt="" class="rounded-circle hw-40">
                 </a>
                 <div class="text">
                   <div class="d-flex">
                     <p>Roger that boss!</p>
                     <div class="dropdown ms-3 d-flex align-items-start">
                      <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton38" data-bs-toggle="dropdown" aria-expanded="false">
                         <i class="fas fa-ellipsis-v text--dark-100"></i>
                       </button>
                       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton38">
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                       </ul>
                     </div>
                   </div>
                   <div class="d-flex">
                     <p>I have already started gathering some stuff for the mood boards, excited to start!</p>
                     <div class="dropdown ms-3 d-flex align-items-start">
                      <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton39" data-bs-toggle="dropdown" aria-expanded="false">
                         <i class="fas fa-ellipsis-v text--dark-100"></i>
                       </button>
                       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton39">
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                       </ul>
                     </div>
                   </div>
                   <span class="time">09:46 AM</span>
                 </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/3.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Great start guys, I've added some notes to the task. We may need to make some adjustments to the last couple of items - but no biggie!</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton41" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton41">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">08:48 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end ">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                   <img src="assets/images/avatar/4.png" alt="" class="rounded-circle hw-40">
                 </a>
                 <div class="text">
                   <div class="d-flex">
                     <p>Well done all. See you all at 2 for the kick-off meeting.</p>
                     <div class="dropdown ms-3 d-flex align-items-start">
                      <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton42" data-bs-toggle="dropdown" aria-expanded="false">
                         <i class="fas fa-ellipsis-v text--dark-100"></i>
                       </button>
                       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton42">
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                       </ul>
                     </div>
                   </div>
                   <span class="time">08:49 AM</span>
                 </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/3.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>We've got some killer ideas kicking about already.</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton43" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton43">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/4.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Can't wait! How are we coming along with the client?</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton44" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton44">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
            </div>
            <!-- message content end -->
            <div class="chat-footer position-fixed bottom-0 bg--light-gray-200">
              <form action="#" class="form">
                <div class="d-flex">
                  <div class="dropdown d-flex">
                    <button class="btn p-0 btn-secondary dropdown-toggle ms-2" type="button" id="dropdownMenuButton45" data-bs-toggle="dropdown" aria-expanded="false">
                     <i class="fas fa-plus-circle text--dark-100 font-size--18"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton45">
                      <li class="input-file dropdown-item">
                        <label id="files5" class="btn text-decoration-none d-flex justify-content-between align-items-center font-size--14 p-0"><i class="far fa-file-archive me-2"></i>attach a file
                        <input name="fileInput"  type="file" class="form-control-file d-none"></label>
                      </li>
                      <li class="input-file dropdown-item">
                        <label id="files6" class="btn text-decoration-none d-flex justify-content-between align-items-center font-size--14 p-0"><i class="far fa-images me-2"></i>photos or videos
                        <input name="fileInput"  type="file" class="form-control-file d-none"></label>
                      </li>
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#"><i class="far fa-smile-beam me-2"></i>emoji</a>
                      </li>
                    </ul>
                  </div>
                  <div class="input-group">
                    <textarea class="form-control border-0 rounded p-2 mx-2" id="FormControlTextarea3" rows="1"></textarea>
                  </div>
                  <button type="submit" class="btn bg--primary submit-btn text-white me-2"><i class="fas fa-paper-plane"></i></button>
                </div>
              </form>
            </div>
            <!-- message footer end -->
            <div class="right-sidebar border-start border--gray">
              <div class="profile-info d-flex justify-content-center py-3 mb-2 border-bottom border--gray sticky-top bg--white">
                <div class="text-center">
                  <img src="assets/images/avatar/3.png" alt="" class="hw-100 rounded-circle mb-1 img-fluid">
                  <h2>Byrom Guittet</h2>
                  <span class="status invisible position-relative">active</span>
                </div>
                <div class="close-icon user-profile-hide position-absolute"><i class="fas fa-times"></i></div>
              </div>
              <div class="description text-center pb-3 mb-5 px-3">
                <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
              </div>
            
              <div class="user-profile-accordion accordion px-3" id="accordionExample8">
                <div class="accordion-item border border--gray mb-3">
                  <h2 class="accordion-header" id="heading9">
                    <button class="accordion-button bg--light-gray-200 p-3 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="true" aria-controls="collapse9"><i class="far fa-user me-2"></i>personal info</button>
                  </h2>
                  <div id="collapse9" class="accordion-collapse collapse show border-0" aria-labelledby="heading9" data-bs-parent="#accordionExample8">
                    <div class="card-body bg--white remove-space--bottom">
                      <div class="mb-4">
                        <p>Name</p>
                        <h3>Catherine Richardson</h3>
                      </div>
                      <div class="mb-4">
                        <p>Email</p>
                        <a href="mailto:catherine.richard@gmail.com" class="email-address">catherine.richard@gmail.com</a>
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
                  <h3 class="accordion-header" id="heading10">
                    <button class="accordion-button bg--light-gray-200 collapsed p-3 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10"><i class="fas fa-paperclip  me-2"></i>Attached Files</button>
                  </h3>
                  <div id="collapse10" class="accordion-collapse collapse border-0" aria-labelledby="heading10" data-bs-parent="#accordionExample8">
                    <div class="card-body bg--white">
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-images text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>23.00 KB </p>
                        </div>
                        <a href="assets/images/avatar/profile.png" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-file-archive text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>442.00 KB </p>
                        </div>
                        <a href="assets/zip/fontawesome.zip" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-images text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>23.00 KB </p>
                        </div>
                        <a href="assets/images/avatar/profile.png" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-file-archive text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>442.00 KB </p>
                        </div>
                        <a href="assets/zip/fontawesome.zip" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-file-archive text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>442.00 KB </p>
                        </div>
                        <a href="assets/zip/fontawesome.zip" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- chat body end -->
          <div class="chat-body tab-pane fade" id="conversation4">
            <div class="chat-header d-flex  justify-content-between align-items-center border-bottom border--gray p-4 sticky-top bg--white">
              <div class="media d-flex align-items-center">
                <div class="close-icon user-chat-remove d-lg-none me-3"><i class="fas fa-arrow-left font-size--14 text--dark-100"></i></div>
                <div class="position-relative">
                  <img src="assets/images/avatar/4.png" alt="" class="rounded-circle me-3 hw-40">
                  <span class="status invisible-icon"></span>
                </div>
                  <div class="media-body">
                    <a href="#"><h3 class="user-name">Byrom Guittet</h3></a>
                  </div>
              </div>
              <ul class="user-chat-nav list-unstyled d-flex align-items-center m-0 remove-space--right">
                <li class="chat-search-form position-relative me-4">
                  <a href="#search" class="search-btn">
                    <i class="fas fa-search text--dark-100 font-size--18"></i>
                  </a>
                  <form action="#" class="form search-form-1 position-absolute">
                    <input type="text" placeholder="search" class="w-100"/>
                    <button type="button"><i class="fas fa-search text--dark-100 font-size--18"></i></button>
                  </form>
                </li>
                <li class="me-4">
                  <a href="#" class="user-icon">
                    <i class="far fa-user text--dark-100 font-size--18"></i>
                  </a>
                </li>
                <li class="me-4">
                  <div class="dropdown">
                    <button class="btn p-0 btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton46" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fas fa-ellipsis-v text--dark-100 font-size--18"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton46">
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#">archive<i class="fas fa-archive"></i></a>
                      </li>
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#">block<i class="fas fa-ban"></i></a></li>
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#">delete<i class="fas fa-trash-alt"></i></a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <!-- message header end -->
            <div class="chat-content p-4 mb-3">
              <div class="date text-center mb-5">
                <span class="text--gray-200 font-size--14 text-capitalize">20/12/2020</span>
              </div>
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/4.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>We've got some killer ideas kicking about already.</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton47" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton47">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>

              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/5.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Can't wait! How are we coming along with the client?</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton48" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton48">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center" href="#">copy<i class="far fa-copy"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center" href="#">remove<i class="fas fa-trash-alt"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="date text-center mb-5">
                <span class="text--gray-200 font-size--14 text-capitalize">today</span>
              </div>
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/4.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Coming along nicely, we've got a draft for the client quarries completed.</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton49" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton49">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">08:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                   <img src="assets/images/avatar/5.png" alt="" class="rounded-circle hw-40">
                 </a>
                 <div class="text">
                   <div class="d-flex">
                     <p>Roger that boss!</p>
                     <div class="dropdown ms-3 d-flex align-items-start">
                      <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton50" data-bs-toggle="dropdown" aria-expanded="false">
                         <i class="fas fa-ellipsis-v text--dark-100"></i>
                       </button>
                       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton50">
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                       </ul>
                     </div>
                   </div>
                   <div class="d-flex">
                     <p>I have already started gathering some stuff for the mood boards, excited to start!</p>
                     <div class="dropdown ms-3 d-flex align-items-start">
                      <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton51" data-bs-toggle="dropdown" aria-expanded="false">
                         <i class="fas fa-ellipsis-v text--dark-100"></i>
                       </button>
                       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton51">
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                       </ul>
                     </div>
                   </div>
                   <span class="time">09:46 AM</span>
                 </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/4.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Great start guys, I've added some notes to the task. We may need to make some adjustments to the last couple of items - but no biggie!</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton52" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton52">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">08:48 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end ">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                   <img src="assets/images/avatar/5.png" alt="" class="rounded-circle hw-40">
                 </a>
                 <div class="text">
                   <div class="d-flex">
                     <p>Well done all. See you all at 2 for the kick-off meeting.</p>
                     <div class="dropdown ms-3 d-flex align-items-start">
                      <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton53" data-bs-toggle="dropdown" aria-expanded="false">
                         <i class="fas fa-ellipsis-v text--dark-100"></i>
                       </button>
                       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton53">
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                       </ul>
                     </div>
                   </div>
                   <span class="time">08:49 AM</span>
                 </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/4.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>We've got some killer ideas kicking about already.</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton54" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton54">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/5.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Can't wait! How are we coming along with the client?</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton55" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton55">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
            </div>
            <!-- message content end -->
            <div class="chat-footer position-fixed bottom-0 bg--light-gray-200">
              <form action="#" class="form">
                <div class="d-flex">
                  <div class="dropdown d-flex">
                    <button class="btn p-0 btn-secondary dropdown-toggle ms-2" type="button" id="dropdownMenuButton56" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fas fa-plus-circle text--dark-100 font-size--18"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton56">
                      <li class="input-file dropdown-item">
                        <label id="files7" class="btn text-decoration-none d-flex justify-content-between align-items-center font-size--14 p-0"><i class="far fa-file-archive me-2"></i>attach a file
                        <input name="fileInput"  type="file" class="form-control-file d-none"></label>
                      </li>
                      <li class="input-file dropdown-item">
                        <label id="files8" class="btn text-decoration-none d-flex justify-content-between align-items-center font-size--14 p-0"><i class="far fa-images me-2"></i>photos or videos
                        <input name="fileInput"  type="file" class="form-control-file d-none"></label>
                      </li>
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#"><i class="far fa-smile-beam me-2"></i>emoji</a>
                      </li>
                    </ul>
                  </div>
                  <div class="input-group">
                    <textarea class="form-control border-0 rounded p-2 mx-2" id="FormControlTextarea4" rows="1"></textarea>
                  </div>
                  <button type="submit" class="btn bg--primary submit-btn text-white me-2"><i class="fas fa-paper-plane"></i></button>
                </div>
              </form>
            </div>
            <!-- message footer end -->
            <div class="right-sidebar border-start border--gray">
              <div class="profile-info d-flex justify-content-center py-3 mb-2 border-bottom border--gray sticky-top bg--white">
                <div class="text-center">
                  <img src="assets/images/avatar/4.png" alt="" class="hw-100 rounded-circle mb-1 img-fluid">
                  <h2>Byrom Guittet</h2>
                  <span class="status invisible-icon position-relative">invisible</span>
                </div>
                <div class="close-icon user-profile-hide position-absolute"><i class="fas fa-times"></i></div>
              </div>
              <div class="description text-center pb-3 mb-5 px-3">
                <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
              </div>
            
              <div class="user-profile-accordion accordion px-3" id="accordionExample3">
                <div class="accordion-item border border--gray mb-3">
                  <h2 class="accordion-header" id="heading11">
                    <button class="accordion-button bg--light-gray-200 p-3 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="true" aria-controls="collapse11"><i class="far fa-user me-2"></i>personal info</button>
                  </h2>
                  <div id="collapse11" class="accordion-collapse collapse show border-0" aria-labelledby="heading11" data-bs-parent="#accordionExample3">
                    <div class="card-body bg--white">
                      <div class="mb-3">
                        <p>Name</p>
                        <h3>Catherine Richardson</h3>
                      </div>
                      <div class="mb-3">
                        <p>Email</p>
                        <a href="mailto:catherine.richard@gmail.com" class="email-address">catherine.richard@gmail.com</a>
                      </div>
                      <div class="mb-3">
                        <p>Time</p>
                        <h3>10PM</h3>
                      </div>
                      <div>
                        <p>Location</p>
                        <h3>California, USA</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item border border--gray mb-3">
                  <h3 class="accordion-header" id="heading12">
                    <button class="accordion-button bg--light-gray-200 collapsed p-3 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12"><i class="fas fa-paperclip  me-2"></i>Attached Files</button>
                  </h3>
                  <div id="collapse12" class="accordion-collapse collapse border-0" aria-labelledby="heading12" data-bs-parent="#accordionExample3">
                    <div class="card-body bg--white">
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-images text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>23.00 KB </p>
                        </div>
                        <a href="assets/images/avatar/profile.png" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-file-archive text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>442.00 KB </p>
                        </div>
                        <a href="assets/zip/fontawesome.zip" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-images text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>23.00 KB </p>
                        </div>
                        <a href="assets/images/avatar/profile.png" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-file-archive text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>442.00 KB </p>
                        </div>
                        <a href="assets/zip/fontawesome.zip" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-file-archive text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>442.00 KB </p>
                        </div>
                        <a href="assets/zip/fontawesome.zip" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <!-- chat body end -->
          <div class="chat-body tab-pane fade" id="conversation5">
            <div class="chat-header d-flex  justify-content-between align-items-center border-bottom border--gray p-4 sticky-top bg--white">
              <div class="media d-flex align-items-center">
                <div class="close-icon user-chat-remove d-lg-none me-3"><i class="fas fa-arrow-left font-size--14 text--dark-100"></i></div>
                <div class="position-relative">
                  <img src="assets/images/avatar/5.png" alt="" class="rounded-circle me-3 hw-40">
                  <span class="status online"></span>
                </div>
                  <div class="media-body">
                    <a href="#"><h3 class="user-name">Gibb Ivanchin</h3></a>
                  </div>
              </div>
              <ul class="user-chat-nav list-unstyled d-flex align-items-center m-0 remove-space--right">
                <li class="chat-search-form position-relative me-4">
                  <a href="#search" class="search-btn">
                    <i class="fas fa-search text--dark-100 font-size--18"></i>
                  </a>
                  <form action="#" class="form search-form-1 position-absolute">
                    <input type="text" placeholder="search" class="w-100"/>
                    <button type="button"><i class="fas fa-search text--dark-100 font-size--18"></i></button>
                  </form>
                </li>
                <li class="me-4">
                  <a href="#" class="user-icon">
                    <i class="far fa-user text--dark-100 font-size--18"></i>
                  </a>
                </li>
                <li class="me-4">
                  <div class="dropdown">
                    <button class="btn p-0 btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton57" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fas fa-ellipsis-v text--dark-100 font-size--18"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton57">
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#">archive<i class="fas fa-archive"></i></a>
                      </li>
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#">block<i class="fas fa-ban"></i></a></li>
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#">delete<i class="fas fa-trash-alt"></i></a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <!-- message header end -->
            <div class="chat-content p-4 mb-3">
              <div class="date text-center mb-5">
                <span class="text--gray-200 font-size--14 text-capitalize">20/12/2020</span>
              </div>
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/5.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>We've got some killer ideas kicking about already.</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton58" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton58">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>

              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/6.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Can't wait! How are we coming along with the client?</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton59" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton59">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center" href="#">copy<i class="far fa-copy"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center" href="#">remove<i class="fas fa-trash-alt"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="date text-center mb-5">
                <span class="text--gray-200 font-size--14 text-capitalize">today</span>
              </div>
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/5.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Coming along nicely, we've got a draft for the client quarries completed.</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton60" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton60">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">08:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                   <img src="assets/images/avatar/6.png" alt="" class="rounded-circle hw-40">
                 </a>
                 <div class="text">
                   <div class="d-flex">
                     <p>Roger that boss!</p>
                     <div class="dropdown ms-3 d-flex align-items-start">
                      <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton61" data-bs-toggle="dropdown" aria-expanded="false">
                         <i class="fas fa-ellipsis-v text--dark-100"></i>
                       </button>
                       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton61">
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                       </ul>
                     </div>
                   </div>
                   <div class="d-flex">
                     <p>I have already started gathering some stuff for the mood boards, excited to start!</p>
                     <div class="dropdown ms-3 d-flex align-items-start">
                      <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton62" data-bs-toggle="dropdown" aria-expanded="false">
                         <i class="fas fa-ellipsis-v text--dark-100"></i>
                       </button>
                       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton62">
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                       </ul>
                     </div>
                   </div>
                   <span class="time">09:46 AM</span>
                 </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/5.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Great start guys, I've added some notes to the task. We may need to make some adjustments to the last couple of items - but no biggie!</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton63" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton63">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">08:48 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end ">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                   <img src="assets/images/avatar/6.png" alt="" class="rounded-circle hw-40">
                 </a>
                 <div class="text">
                   <div class="d-flex">
                     <p>Well done all. See you all at 2 for the kick-off meeting.</p>
                     <div class="dropdown ms-3 d-flex align-items-start">
                      <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton64" data-bs-toggle="dropdown" aria-expanded="false">
                         <i class="fas fa-ellipsis-v text--dark-100"></i>
                       </button>
                       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton64">
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                       </ul>
                     </div>
                   </div>
                   <span class="time">08:49 AM</span>
                 </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/5.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>We've got some killer ideas kicking about already.</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton65" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton65">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/6.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Can't wait! How are we coming along with the client?</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton66" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton66">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
            </div>
            <!-- message content end -->
            <div class="chat-footer position-fixed bottom-0 bg--light-gray-200">
              <form action="#" class="form">
                <div class="d-flex">
                  <div class="dropdown d-flex">
                    <button class="btn p-0 btn-secondary dropdown-toggle ms-2" type="button" id="dropdownMenuButton67" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fas fa-plus-circle text--dark-100 font-size--18"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton67">
                      <li class="input-file dropdown-item">
                        <label id="files9" class="btn text-decoration-none d-flex justify-content-between align-items-center font-size--14 p-0"><i class="far fa-file-archive me-2"></i>attach a file
                        <input name="fileInput"  type="file" class="form-control-file d-none"></label>
                      </li>
                      <li class="input-file dropdown-item">
                        <label id="files10" class="btn text-decoration-none d-flex justify-content-between align-items-center font-size--14 p-0"><i class="far fa-images me-2"></i>photos or videos
                        <input name="fileInput"  type="file" class="form-control-file d-none"></label>
                      </li>
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#"><i class="far fa-smile-beam me-2"></i>emoji</a>
                      </li>
                    </ul>
                  </div>
                  <div class="input-group">
                    <textarea class="form-control border-0 rounded p-2 mx-2" id="FormControlTextarea5" rows="1"></textarea>
                  </div>
                  <button type="submit" class="btn bg--primary submit-btn text-white me-2"><i class="fas fa-paper-plane"></i></button>
                </div>
              </form>
            </div>
            <!-- message footer end -->
            <div class="right-sidebar border-start border--gray">
              <div class="profile-info d-flex justify-content-center py-3 mb-2 border-bottom border--gray sticky-top bg--white">
                <div class="text-center">
                  <img src="assets/images/avatar/5.png" alt="" class="hw-100 rounded-circle mb-1 img-fluid">
                  <h2>Catherine Richardson</h2>
                  <span class="status online position-relative">active</span>
                </div>
                <div class="close-icon user-profile-hide position-absolute"><i class="fas fa-times"></i></div>
              </div>
              <div class="description text-center pb-3 mb-5 px-3">
                <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
              </div>
            
              <div class="user-profile-accordion accordion px-3" id="accordionExample4">
                <div class="accordion-item border border--gray mb-3">
                  <h2 class="accordion-header" id="heading13">
                    <button class="accordion-button bg--light-gray-200 p-3 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="true" aria-controls="collapse13"><i class="far fa-user me-2"></i>personal info</button>
                  </h2>
                  <div id="collapse13" class="accordion-collapse collapse show border-0" aria-labelledby="heading13" data-bs-parent="#accordionExample4">
                    <div class="card-body bg--white remove-space--bottom">
                      <div class="mb-4">
                        <p>Name</p>
                        <h3>Catherine Richardson</h3>
                      </div>
                      <div class="mb-4">
                        <p>Email</p>
                        <a href="mailto:catherine.richard@gmail.com" class="email-address">catherine.richard@gmail.com</a>
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
                  <h3 class="accordion-header" id="heading14">
                    <button class="accordion-button bg--light-gray-200 collapsed p-3 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse14"><i class="fas fa-paperclip  me-2"></i>Attached Files</button>
                  </h3>
                  <div id="collapse14" class="accordion-collapse collapse border-0" aria-labelledby="heading14" data-bs-parent="#accordionExample4">
                    <div class="card-body bg--white">
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-images text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>23.00 KB </p>
                        </div>
                        <a href="assets/images/avatar/profile.png" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-file-archive text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>442.00 KB </p>
                        </div>
                        <a href="assets/zip/fontawesome.zip" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-images text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>23.00 KB </p>
                        </div>
                        <a href="assets/images/avatar/profile.png" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-file-archive text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>442.00 KB </p>
                        </div>
                        <a href="assets/zip/fontawesome.zip" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-file-archive text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>442.00 KB </p>
                        </div>
                        <a href="assets/zip/fontawesome.zip" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- chat body end -->
          <div class="chat-body tab-pane fade" id="conversation6">
            <div class="chat-header d-flex  justify-content-between align-items-center border-bottom border--gray p-4 sticky-top bg--white">
              <div class="media d-flex align-items-center">
                <div class="close-icon user-chat-remove d-lg-none me-3"><i class="fas fa-arrow-left font-size--14 text--dark-100"></i></div>
                <div class="position-relative">
                  <img src="assets/images/avatar/6.png" alt="" class="rounded-circle me-3 hw-40">
                  <span class="status online"></span>
                </div>
                  <div class="media-body">
                    <a href="#"><h3 class="user-name">Marvin Rohan</h3></a>
                  </div>
              </div>
              <ul class="user-chat-nav list-unstyled d-flex align-items-center m-0 remove-space--right">
                <li class="chat-search-form position-relative me-4">
                  <a href="#search" class="search-btn">
                    <i class="fas fa-search text--dark-100 font-size--18"></i>
                  </a>
                  <form action="#" class="form search-form-1 position-absolute">
                    <input type="text" placeholder="search" class="w-100"/>
                    <button type="button"><i class="fas fa-search text--dark-100 font-size--18"></i></button>
                  </form>
                </li>
                <li class="me-4">
                  <a href="#" class="user-icon">
                    <i class="far fa-user text--dark-100 font-size--18"></i>
                  </a>
                </li>
                <li class="me-4">
                  <div class="dropdown">
                    <button class="btn p-0 btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton68" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fas fa-ellipsis-v text--dark-100 font-size--18"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton68">
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#">archive<i class="fas fa-archive"></i></a>
                      </li>
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#">block<i class="fas fa-ban"></i></a></li>
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#">delete<i class="fas fa-trash-alt"></i></a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <!-- message header end -->
            <div class="chat-content p-4 mb-3">
              <div class="date text-center mb-5">
                <span class="text--gray-200 font-size--14 text-capitalize">20/12/2020</span>
              </div>
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/6.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>We've got some killer ideas kicking about already.</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton69" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton69">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>

              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/7.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Can't wait! How are we coming along with the client?</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton70" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton70">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center" href="#">copy<i class="far fa-copy"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center" href="#">remove<i class="fas fa-trash-alt"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="date text-center mb-5">
                <span class="text--gray-200 font-size--14 text-capitalize">today</span>
              </div>
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/6.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Coming along nicely, we've got a draft for the client quarries completed.</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton71" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton71">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">08:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                   <img src="assets/images/avatar/7.png" alt="" class="rounded-circle hw-40">
                 </a>
                 <div class="text">
                   <div class="d-flex">
                     <p>Roger that boss!</p>
                     <div class="dropdown ms-3 d-flex align-items-start">
                      <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton72" data-bs-toggle="dropdown" aria-expanded="false">
                         <i class="fas fa-ellipsis-v text--dark-100"></i>
                       </button>
                       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton72">
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                       </ul>
                     </div>
                   </div>
                   <div class="d-flex">
                     <p>I have already started gathering some stuff for the mood boards, excited to start!</p>
                     <div class="dropdown ms-3 d-flex align-items-start">
                      <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton73" data-bs-toggle="dropdown" aria-expanded="false">
                         <i class="fas fa-ellipsis-v text--dark-100"></i>
                       </button>
                       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton73">
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                       </ul>
                     </div>
                   </div>
                   <span class="time">09:46 AM</span>
                 </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/6.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Great start guys, I've added some notes to the task. We may need to make some adjustments to the last couple of items - but no biggie!</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton74" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton74">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">08:48 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end ">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                   <img src="assets/images/avatar/7.png" alt="" class="rounded-circle hw-40">
                 </a>
                 <div class="text">
                   <div class="d-flex">
                     <p>Well done all. See you all at 2 for the kick-off meeting.</p>
                     <div class="dropdown ms-3 d-flex align-items-start">
                      <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton75" data-bs-toggle="dropdown" aria-expanded="false">
                         <i class="fas fa-ellipsis-v text--dark-100"></i>
                       </button>
                       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton75">
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                       </ul>
                     </div>
                   </div>
                   <span class="time">08:49 AM</span>
                 </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/6.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>We've got some killer ideas kicking about already.</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton76" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton76">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/7.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Can't wait! How are we coming along with the client?</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton77" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton77">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
            </div>
            <!-- message content end -->
            <div class="chat-footer position-fixed bottom-0 bg--light-gray-200">
              <form action="#" class="form">
                <div class="d-flex">
                  <div class="dropdown d-flex">
                    <button class="btn p-0 btn-secondary dropdown-toggle ms-2" type="button" id="dropdownMenuButton78" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fas fa-plus-circle text--dark-100 font-size--18"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton78">
                      <li class="input-file dropdown-item">
                        <label id="files11" class="btn text-decoration-none d-flex justify-content-between align-items-center font-size--14 p-0"><i class="far fa-file-archive me-2"></i>attach a file
                        <input name="fileInput"  type="file" class="form-control-file d-none"></label>
                      </li>
                      <li class="input-file dropdown-item">
                        <label id="files12" class="btn text-decoration-none d-flex justify-content-between align-items-center font-size--14 p-0"><i class="far fa-images me-2"></i>photos or videos
                        <input name="fileInput"  type="file" class="form-control-file d-none"></label>
                      </li>
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#"><i class="far fa-smile-beam me-2"></i>emoji</a>
                      </li>
                    </ul>
                  </div>
                  <div class="input-group">
                    <textarea class="form-control border-0 rounded p-2 mx-2" id="FormControlTextarea6" rows="1"></textarea>
                  </div>
                  <button type="submit" class="btn bg--primary submit-btn text-white me-2"><i class="fas fa-paper-plane"></i></button>
                </div>
              </form>
            </div>
            <!-- message footer end -->
            <div class="right-sidebar border-start border--gray">
              <div class="profile-info d-flex justify-content-center py-3 mb-2 border-bottom border--gray sticky-top bg--white">
                <div class="text-center">
                  <img src="assets/images/avatar/6.png" alt="" class="hw-100 rounded-circle mb-1 img-fluid">
                  <h2>Catherine Richardson</h2>
                  <span class="status online position-relative">active</span>
                </div>
                <div class="close-icon user-profile-hide position-absolute"><i class="fas fa-times"></i></div>
              </div>
              <div class="description text-center pb-3 mb-5 px-3">
                <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
              </div>
            
              <div class="user-profile-accordion accordion px-3" id="accordionExample5">
                <div class="accordion-item border border--gray mb-3">
                  <h2 class="accordion-header" id="heading15">
                    <button class="accordion-button bg--light-gray-200 p-3 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="true" aria-controls="collapse15"><i class="far fa-user me-2"></i>personal info</button>
                  </h2>
                  <div id="collapse15" class="accordion-collapse collapse show border-0" aria-labelledby="heading15" data-bs-parent="#accordionExample5">
                    <div class="card-body bg--white remove-space--bottom">
                      <div class="mb-4">
                        <p>Name</p>
                        <h3>Catherine Richardson</h3>
                      </div>
                      <div class="mb-4">
                        <p>Email</p>
                        <a href="mailto:catherine.richard@gmail.com" class="email-address">catherine.richard@gmail.com</a>
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
                  <h3 class="accordion-header" id="heading16">
                    <button class="accordion-button bg--light-gray-200 collapsed p-3 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapse16" aria-expanded="false" aria-controls="collapse16"><i class="fas fa-paperclip  me-2"></i>Attached Files</button>
                  </h3>
                  <div id="collapse16" class="accordion-collapse collapse border-0" aria-labelledby="heading16" data-bs-parent="#accordionExample5">
                    <div class="card-body bg--white">
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-images text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>23.00 KB </p>
                        </div>
                        <a href="assets/images/avatar/profile.png" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-file-archive text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>442.00 KB </p>
                        </div>
                        <a href="assets/zip/fontawesome.zip" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-images text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>23.00 KB </p>
                        </div>
                        <a href="assets/images/avatar/profile.png" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-file-archive text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>442.00 KB </p>
                        </div>
                        <a href="assets/zip/fontawesome.zip" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-file-archive text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>442.00 KB </p>
                        </div>
                        <a href="assets/zip/fontawesome.zip" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- chat body end -->
          <div class="chat-body tab-pane fade" id="conversation7">
            <div class="chat-header d-flex  justify-content-between align-items-center border-bottom border--gray p-4 sticky-top bg--white">
              <div class="media d-flex align-items-center">
                <div class="close-icon user-chat-remove d-lg-none me-3"><i class="fas fa-arrow-left font-size--14 text--dark-100"></i></div>
                <div class="position-relative">
                  <img src="assets/images/avatar/7.png" alt="" class="rounded-circle me-3 hw-40">
                  <span class="status online"></span>
                </div>
                  <div class="media-body">
                    <a href="#"><h3 class="user-name">Steve Walker</h3></a>
                  </div>
              </div>
              <ul class="user-chat-nav list-unstyled d-flex align-items-center m-0 remove-space--right">
                <li class="chat-search-form position-relative me-4">
                  <a href="#search" class="search-btn">
                    <i class="fas fa-search text--dark-100 font-size--18"></i>
                  </a>
                  <form action="#" class="form search-form-1 position-absolute">
                    <input type="text" placeholder="search" class="w-100"/>
                    <button type="button"><i class="fas fa-search text--dark-100 font-size--18"></i></button>
                  </form>
                </li>
                <li class="me-4">
                  <a href="#" class="user-icon">
                    <i class="far fa-user text--dark-100 font-size--18"></i>
                  </a>
                </li>
                <li class="me-4">
                  <div class="dropdown">
                    <button class="btn p-0 btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton79" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fas fa-ellipsis-v text--dark-100 font-size--18"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton79">
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#">archive<i class="fas fa-archive"></i></a>
                      </li>
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#">block<i class="fas fa-ban"></i></a></li>
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#">delete<i class="fas fa-trash-alt"></i></a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <!-- message header end -->
            <div class="chat-content p-4 mb-3">
              <div class="date text-center mb-5">
                <span class="text--gray-200 font-size--14 text-capitalize">20/12/2020</span>
              </div>
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/7.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>We've got some killer ideas kicking about already.</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton80" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton80">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>

              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/8.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Can't wait! How are we coming along with the client?</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton81" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton81">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center" href="#">copy<i class="far fa-copy"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center" href="#">remove<i class="fas fa-trash-alt"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="date text-center mb-5">
                <span class="text--gray-200 font-size--14 text-capitalize">today</span>
              </div>
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/7.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Coming along nicely, we've got a draft for the client quarries completed.</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton83" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton83">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">08:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                   <img src="assets/images/avatar/8.png" alt="" class="rounded-circle hw-40">
                 </a>
                 <div class="text">
                   <div class="d-flex">
                     <p>Roger that boss!</p>
                     <div class="dropdown ms-3 d-flex align-items-start">
                      <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton84" data-bs-toggle="dropdown" aria-expanded="false">
                         <i class="fas fa-ellipsis-v text--dark-100"></i>
                       </button>
                       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton84">
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                       </ul>
                     </div>
                   </div>
                   <div class="d-flex">
                     <p>I have already started gathering some stuff for the mood boards, excited to start!</p>
                     <div class="dropdown ms-3 d-flex align-items-start">
                      <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton85" data-bs-toggle="dropdown" aria-expanded="false">
                         <i class="fas fa-ellipsis-v text--dark-100"></i>
                       </button>
                       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton85">
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                       </ul>
                     </div>
                   </div>
                   <span class="time">09:46 AM</span>
                 </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/7.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Great start guys, I've added some notes to the task. We may need to make some adjustments to the last couple of items - but no biggie!</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton86" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton86">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">08:48 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end ">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                   <img src="assets/images/avatar/8.png" alt="" class="rounded-circle hw-40">
                 </a>
                 <div class="text">
                   <div class="d-flex">
                     <p>Well done all. See you all at 2 for the kick-off meeting.</p>
                     <div class="dropdown ms-3 d-flex align-items-start">
                      <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton87" data-bs-toggle="dropdown" aria-expanded="false">
                         <i class="fas fa-ellipsis-v text--dark-100"></i>
                       </button>
                       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton87">
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                       </ul>
                     </div>
                   </div>
                   <span class="time">08:49 AM</span>
                 </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/7.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>We've got some killer ideas kicking about already.</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton88" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton88">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end">
                <div class="width--500 d-flex">
                  <a data-tooltip="Barry Hall" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/8.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Can't wait! How are we coming along with the client?</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton89" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton89">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
            </div>
            <!-- message content end -->
            <div class="chat-footer position-fixed bottom-0 bg--light-gray-200">
              <form action="#" class="form">
                <div class="d-flex">
                  <div class="dropdown d-flex">
                    <button class="btn p-0 btn-secondary dropdown-toggle ms-2" type="button" id="dropdownMenuButton90" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fas fa-plus-circle text--dark-100 font-size--18"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton90">
                      <li class="input-file dropdown-item">
                        <label id="files13" class="btn text-decoration-none d-flex justify-content-between align-items-center font-size--14 p-0"><i class="far fa-file-archive me-2"></i>attach a file
                        <input name="fileInput"  type="file" class="form-control-file d-none"></label>
                      </li>
                      <li class="input-file dropdown-item">
                        <label id="files14" class="btn text-decoration-none d-flex justify-content-between align-items-center font-size--14 p-0"><i class="far fa-images me-2"></i>photos or videos
                        <input name="fileInput"  type="file" class="form-control-file d-none"></label>
                      </li>
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#"><i class="far fa-smile-beam me-2"></i>emoji</a>
                      </li>
                    </ul>
                  </div>
                  <div class="input-group">
                    <textarea class="form-control border-0 rounded p-2 mx-2" id="FormControlTextarea7" rows="1"></textarea>
                  </div>
                  <button type="submit" class="btn bg--primary submit-btn text-white me-2"><i class="fas fa-paper-plane"></i></button>
                </div>
              </form>
            </div>
            <!-- message footer end -->
            <div class="right-sidebar border-start border--gray">
              <div class="profile-info d-flex justify-content-center py-3 mb-2 border-bottom border--gray sticky-top bg--white">
                <div class="text-center">
                  <img src="assets/images/avatar/7.png" alt="" class="hw-100 rounded-circle mb-1 img-fluid">
                  <h2>Steve Walker</h2>
                  <span class="status offline position-relative">offline</span>
                </div>
                <div class="close-icon user-profile-hide position-absolute"><i class="fas fa-times"></i></div>
              </div>
              <div class="description text-center pb-3 mb-5 px-3">
                <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
              </div>
            
              <div class="user-profile-accordion accordion px-3" id="accordionExample6">
                <div class="accordion-item border border--gray mb-3">
                  <h2 class="accordion-header" id="heading17">
                    <button class="accordion-button bg--light-gray-200 p-3 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapse17" aria-expanded="true" aria-controls="collapse17"><i class="far fa-user me-2"></i>personal info</button>
                  </h2>
                  <div id="collapse17" class="accordion-collapse collapse show border-0" aria-labelledby="heading17" data-bs-parent="#accordionExample6">
                    <div class="card-body bg--white remove-space--bottom">
                      <div class="mb-4">
                        <p>Name</p>
                        <h3>Catherine Richardson</h3>
                      </div>
                      <div class="mb-4">
                        <p>Email</p>
                        <a href="mailto:catherine.richard@gmail.com" class="email-address">catherine.richard@gmail.com</a>
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
                  <h3 class="accordion-header" id="heading18">
                    <button class="accordion-button bg--light-gray-200 collapsed p-3 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapse18" aria-expanded="false" aria-controls="collapse18"><i class="fas fa-paperclip  me-2"></i>Attached Files</button>
                  </h3>
                  <div id="collapse18" class="accordion-collapse collapse border-0" aria-labelledby="heading18" data-bs-parent="#accordionExample6">
                    <div class="card-body bg--white">
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-images text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>23.00 KB </p>
                        </div>
                        <a href="assets/images/avatar/profile.png" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-file-archive text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>442.00 KB </p>
                        </div>
                        <a href="assets/zip/fontawesome.zip" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-images text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>23.00 KB </p>
                        </div>
                        <a href="assets/images/avatar/profile.png" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-file-archive text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>442.00 KB </p>
                        </div>
                        <a href="assets/zip/fontawesome.zip" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-file-archive text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>442.00 KB </p>
                        </div>
                        <a href="assets/zip/fontawesome.zip" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- chat body end -->
          <div class="chat-body tab-pane fade" id="conversation8">
            <div class="chat-header d-flex  justify-content-between align-items-center border-bottom border--gray p-4 sticky-top bg--white">
              <div class="media d-flex align-items-center">
                <div class="close-icon user-chat-remove d-lg-none me-3"><i class="fas fa-arrow-left font-size--14 text--dark-100"></i></div>
                <div class="position-relative">
                  <img src="assets/images/avatar/8.png" alt="" class="rounded-circle me-3 hw-40">
                  <span class="status online"></span>
                </div>
                  <div class="media-body">
                    <a href="#"><h3 class="user-name">Albert K. Johansen</h3></a>
                  </div>
              </div>
              <ul class="user-chat-nav list-unstyled d-flex align-items-center m-0 remove-space--right">
                <li class="chat-search-form position-relative me-4">
                  <a href="#search" class="search-btn">
                    <i class="fas fa-search text--dark-100 font-size--18"></i>
                  </a>
                  <form action="#" class="form search-form-1 position-absolute">
                    <input type="text" placeholder="search" class="w-100"/>
                    <button type="button"><i class="fas fa-search text--dark-100 font-size--18"></i></button>
                  </form>
                </li>
                <li class="me-4">
                  <a href="#" class="user-icon">
                    <i class="far fa-user text--dark-100 font-size--18"></i>
                  </a>
                </li>
                <li class="me-4">
                  <div class="dropdown">
                    <button class="btn p-0 btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton91" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fas fa-ellipsis-v text--dark-100 font-size--18"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton91">
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#">archive<i class="fas fa-archive"></i></a>
                      </li>
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#">block<i class="fas fa-ban"></i></a></li>
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#">delete<i class="fas fa-trash-alt"></i></a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <!-- message header end -->
            <div class="chat-content p-4 mb-3">
              <div class="date text-center mb-5">
                <span class="text--gray-200 font-size--14 text-capitalize">20/12/2020</span>
              </div>
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Albert K. Johansen" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/8.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>We've got some killer ideas kicking about already.</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton92" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton92">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>

              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/1.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Can't wait! How are we coming along with the client?</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton93" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton93">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center" href="#">copy<i class="far fa-copy"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center" href="#">remove<i class="fas fa-trash-alt"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="date text-center mb-5">
                <span class="text--gray-200 font-size--14 text-capitalize">today</span>
              </div>
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Albert K. Johansen" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/8.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Coming along nicely, we've got a draft for the client quarries completed.</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton94" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton94">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">08:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                   <img src="assets/images/avatar/1.png" alt="" class="rounded-circle hw-40">
                 </a>
                 <div class="text">
                   <div class="d-flex">
                     <p>Roger that boss!</p>
                     <div class="dropdown ms-3 d-flex align-items-start">
                      <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton95" data-bs-toggle="dropdown" aria-expanded="false">
                         <i class="fas fa-ellipsis-v text--dark-100"></i>
                       </button>
                       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton95">
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                       </ul>
                     </div>
                   </div>
                   <div class="d-flex">
                     <p>I have already started gathering some stuff for the mood boards, excited to start!</p>
                     <div class="dropdown ms-3 d-flex align-items-start">
                      <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton96" data-bs-toggle="dropdown" aria-expanded="false">
                         <i class="fas fa-ellipsis-v text--dark-100"></i>
                       </button>
                       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton96">
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                       </ul>
                     </div>
                   </div>
                   <span class="time">09:46 AM</span>
                 </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Albert K. Johansen" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/8.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Great start guys, I've added some notes to the task. We may need to make some adjustments to the last couple of items - but no biggie!</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton97" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton97">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">08:48 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end ">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                   <img src="assets/images/avatar/1.png" alt="" class="rounded-circle hw-40">
                 </a>
                 <div class="text">
                   <div class="d-flex">
                     <p>Well done all. See you all at 2 for the kick-off meeting.</p>
                     <div class="dropdown ms-3 d-flex align-items-start">
                      <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton98" data-bs-toggle="dropdown" aria-expanded="false">
                         <i class="fas fa-ellipsis-v text--dark-100"></i>
                       </button>
                       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton98">
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                         <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                       </ul>
                     </div>
                   </div>
                   <span class="time">08:49 AM</span>
                 </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message mb-5 d-flex">
                <div class="width--500 d-flex">
                  <a data-tooltip="Albert K. Johansen" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/8.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>We've got some killer ideas kicking about already.</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton99" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton99">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
              <div class="message right mb-5 d-flex justify-content-end">
                <div class="width--500 d-flex">
                  <a data-tooltip="Janette Dalton" data-placement="top" class="me-3 hw-40">
                    <img src="assets/images/avatar/1.png" alt="" class="rounded-circle hw-40">
                  </a>
                  <div class="text">
                    <div class="d-flex">
                      <p>Can't wait! How are we coming along with the client?</p>
                      <div class="dropdown ms-3 d-flex align-items-start">
                        <a href="#" class="mt-1"> <i class="fas fa-reply text--dark-100"></i></a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton01" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v text--dark-100"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton01">
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">copy<i class="far fa-copy text--dark-100"></i></a></li>
                          <li><a class="dropdown-item d-flex justify-content-between align-items-center text--dark-100 font-size--14" href="#">remove<i class="fas fa-trash-alt text--dark-100"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <span class="time">09:46 AM</span>
                  </div>
                </div>
              </div>
              <!-- message end -->
            </div>
            <!-- message content end -->
            <div class="chat-footer position-fixed bottom-0 bg--light-gray-200">
              <form action="#" class="form">
                <div class="d-flex">
                  <div class="dropdown d-flex">
                    <button class="btn p-0 btn-secondary dropdown-toggle ms-2" type="button" id="dropdownMenuButton02" data-bs-toggle="dropdown" aria-expanded="false">
                     <i class="fas fa-plus-circle text--dark-100 font-size--18"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton02">
                      <li class="input-file dropdown-item">
                        <label id="files15" class="btn text-decoration-none d-flex justify-content-between align-items-center font-size--14 p-0"><i class="far fa-file-archive me-2"></i>attach a file
                        <input name="fileInput"  type="file" class="form-control-file d-none"></label>
                      </li>
                      <li class="input-file dropdown-item">
                        <label id="files16" class="btn text-decoration-none d-flex justify-content-between align-items-center font-size--14 p-0"><i class="far fa-images me-2"></i>photos or videos
                        <input name="fileInput"  type="file" class="form-control-file d-none"></label>
                      </li>
                      <li>
                        <a class="dropdown-item d-flex justify-content-between align-items-center font-size--14" href="#"><i class="far fa-smile-beam me-2"></i>emoji</a>
                      </li>
                    </ul>
                  </div>
                  <div class="input-group">
                    <textarea class="form-control border-0 rounded p-2 mx-2" id="FormControlTextarea8" rows="1"></textarea>
                  </div>
                  <button type="submit" class="btn bg--primary submit-btn text-white me-2"><i class="fas fa-paper-plane"></i></button>
                </div>
              </form>
            </div>
            <!-- message footer end -->
            <div class="right-sidebar border-start border--gray">
              <div class="profile-info d-flex justify-content-center py-3 mb-2 border-bottom border--gray sticky-top bg--white">
                <div class="text-center">
                  <img src="assets/images/avatar/8.png" alt="" class="hw-100 rounded-circle mb-1 img-fluid">
                  <h2>Albert K. Johansen</h2>
                  <span class="status online position-relative">active</span>
                </div>
                <div class="close-icon user-profile-hide position-absolute"><i class="fas fa-times"></i></div>
              </div>
              <div class="description text-center pb-3 mb-5 px-3">
                <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
              </div>
            
              <div class="user-profile-accordion accordion px-3" id="accordionExample7">
                <div class="accordion-item border border--gray mb-3">
                  <h2 class="accordion-header" id="heading19">
                    <button class="accordion-button bg--light-gray-200 p-3 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapse19" aria-expanded="true" aria-controls="collapse19"><i class="far fa-user me-2"></i>personal info</button>
                  </h2>
                  <div id="collapse19" class="accordion-collapse collapse show border-0" aria-labelledby="heading19" data-bs-parent="#accordionExample7">
                    <div class="card-body bg--white remove-space--bottom">
                      <div class="mb-4">
                        <p>Name</p>
                        <h3>Catherine Richardson</h3>
                      </div>
                      <div class="mb-4">
                        <p>Email</p>
                        <a href="mailto:catherine.richard@gmail.com" class="email-address">catherine.richard@gmail.com</a>
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
                  <h3 class="accordion-header" id="heading20">
                    <button class="accordion-button bg--light-gray-200 collapsed p-3 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapse20" aria-expanded="false" aria-controls="collapse20"><i class="fas fa-paperclip  me-2"></i>Attached Files</button>
                  </h3>
                  <div id="collapse20" class="accordion-collapse collapse border-0" aria-labelledby="heading20" data-bs-parent="#accordionExample7">
                    <div class="card-body bg--white">
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-images text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>23.00 KB </p>
                        </div>
                        <a href="assets/images/avatar/profile.png" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-file-archive text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>442.00 KB </p>
                        </div>
                        <a href="assets/zip/fontawesome.zip" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-images text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>23.00 KB </p>
                        </div>
                        <a href="assets/images/avatar/profile.png" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-file-archive text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>442.00 KB </p>
                        </div>
                        <a href="assets/zip/fontawesome.zip" download><i class="fas fa-download text--dark-100"></i></a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center mb-3 border px-3 py-2">
                        <i class="far fa-file-archive text--primary font-size--18"></i>
                        <div>
                          <h3>1.png</h3>
                          <p>442.00 KB </p>
                        </div>
                        <a href="assets/zip/fontawesome.zip" download><i class="fas fa-download text--dark-100"></i></a>
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
import axios from 'axios';
import { onMounted } from '@vue/runtime-core';
import appEmitter from '../composables/emiter.js';
const ROOT_URL = import.meta.env.VITE_ROOT_API;
const chatRooms = chatRoomStore();
const emiter = appEmitter();
function loadMessage(roomId, pageSize = 50, pageNumber = 0) {
    axios.get(`${ROOT_URL}/message/get-messages-by-room`, {
        params: {
            roomId: roomId,
            pageSize: pageSize ? pageSize : 50,
            pageNumber: pageNumber ? pageNumber : 0
        }
    }).then(res => {
        let room = chatRooms.getRoomById(roomId);
        room.messages = res.data.content;
        room.pageNumber ++;
    });
}

emiter.on('select-room', selectedRoom => {
    loadMessage(selectedRoom, chatRooms.getRoomById(selectedRoom).pageSize, chatRooms.getRoomById(selectedRoom).pageNumber);
    console.log(chatRooms.getRoomById(selectedRoom));
});

</script>