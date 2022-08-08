<script setup>
import { ref, toRaw } from '@vue/reactivity'
import VueWinBox from 'vue-winbox'
import { onMounted } from 'vue'
import 'winbox/dist/css/themes/modern.min.css'
import 'winbox/dist/css/winbox.min.css'
import { Peer } from "peerjs";
import { authenStore } from '../stores/authen'
const options = {
    title: props.title,
    x: "center",
    y: "center",
    width: "60%",
    height: "70%"
}
const props = defineProps({
    title: {
        type: String,
        required: false
    },
    userId: {
        type: String,
        required: false
    },
    peerCaller: {
        type: Object,
        required: false
    },
    isCaller: Boolean,
    isShow: Boolean,
    videoEnable: Boolean,
    audioEnable: Boolean
})
const authen = authenStore();
const emit = defineEmits(['onClose'])

// State devices
let audioInputDevices = ref([]);
let audioOutputDevices = ref([]);
let cameraDevices = ref([]);
let selectedAudioInput = ref('');
let selectedAudioOutput = ref('');
let selectedCamera = ref('');
// End state devices

let localStream = ref(null);
const winboxRef = ref();
const localVideoRef = ref();
const remoteVideoRef = ref();
let constraints = ref({
    audio: props.audioEnable,
    video: props.videoEnable
});

const isAudioEnable = ref(props.audioEnable);
const isVideoEnable = ref(props.videoEnable);

let waitCall = ref(true);
const caller = ref(null);

const onCloseWindow = (force) => {
    stopStream();
    emit("onClose");
}
async function initStream() {
    stopStream();
    await getDeviceInfor();
    localStream.value = await getLocalStream(true);
    localVideoRef.value.srcObject = localStream.value;
    return true;
}

async function getLocalStream(isFirst = false) {
    try {
        if (!isFirst) {
            constraints.value = {
                audio: { deviceId: selectedAudioInput.value ? { exact: selectedAudioInput.value } : undefined },
                video: { deviceId: selectedCamera.value ? { exact: selectedCamera.value } : undefined }
            }
        }
        return await navigator.mediaDevices.getUserMedia(constraints.value);
    } catch (error) {
        handleError(error);
    }
}
function stopStream() {
    if (localStream.value) {
        localStream.value.getTracks().forEach(track => {
            track.stop();
        });
    }
    localStream.value = null;
}
async function getDeviceInfor() {
    try {
        let deviceInfos = await navigator.mediaDevices.enumerateDevices();
        gotDevices(deviceInfos);
    } catch (error) {
        handleError(error);
    }
}
function gotDevices(deviceInfos) {
    audioInputDevices.value = [];
    audioOutputDevices.value = [];
    cameraDevices.value = [];
    // Handles being called several times to update labels. Preserve values.
    for (let i = 0; i !== deviceInfos.length; ++i) {
        const deviceInfo = deviceInfos[i];
        if (deviceInfo.kind === 'audioinput') {
            audioInputDevices.value.push({
                id: deviceInfo.deviceId,
                text: deviceInfo.label || `microphone ${audioInputSelect.length + 1}`
            })
        } else if (deviceInfo.kind === 'audiooutput') {
            audioOutputDevices.value.push({
                id: deviceInfo.deviceId,
                text: deviceInfo.label || `speaker ${audioOutputSelect.length + 1}`
            })
        } else if (deviceInfo.kind === 'videoinput') {
            cameraDevices.value.push({
                id: deviceInfo.deviceId,
                text: deviceInfo.label || `camera ${videoSelect.length + 1}`
            })
        } else {
            console.log('Some other kind of source/device: ', deviceInfo);
        }
    }
}
function handleError(error) {
    console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
}
function updateDeviceMedia(event, type) {
    stopStream();
    if (type === 'audioinput') {
        selectedAudioInput.value = event.target.value;
    } else if (type === 'audiooutput') {
        selectedAudioOutput.value = event.target.value;
    } else if (type === 'videoinput') {
        selectedCamera.value = event.target.value;
    }
    let constraints = {
        audio: { deviceId: selectedAudioInput.value ? { exact: selectedAudioInput.value } : undefined },
        video: { deviceId: selectedCamera.value ? { exact: selectedCamera.value } : undefined }
    }
    navigator.mediaDevices.getUserMedia(constraints).then(gotStream).then(gotDevices).catch(handleError);
}
function gotStream(stream) {
    localVideoRef.value.srcObject = stream;
    localStream.value = stream;
    return navigator.mediaDevices.enumerateDevices();
}
function closeWinboxConfirm() {
    winboxRef.value.winbox.close();
}

function initSelectedDevice() {
    selectedAudioInput.value = audioInputDevices.value.length === 0 ? undefined : audioInputDevices.value[0].id;
    selectedAudioOutput.value = audioOutputDevices.value.length === 0 ? undefined : audioOutputDevices.value[0].id;
    selectedCamera.value = cameraDevices.value.length === 0 ? undefined : cameraDevices.value[0].id;
}

function startCall() {
    winboxRef.value.winbox.setTitle("Đang thực hiện cuộc gọi!");
    caller.value = window.peer.call(props.userId, localStream.value);
    caller.value.on('stream', function (stream) {
        remoteVideoRef.value.srcObject = stream;
        waitCall.value = false;
        console.log(stream);
    });
}

function showSideBar() {
    setTimeout(() => {
        document.getElementById('stream-area').classList.add("stream-area-menu-open");
        document.getElementById("sidebar-area").classList.add("sidebar-area-open");
    }, 0);
}

function closeSideBar() {
    setTimeout(() => {
        document.getElementById('stream-area').classList.remove("stream-area-menu-open");
        document.getElementById("sidebar-area").classList.remove("sidebar-area-open");
    }, 0);
}
onMounted(async () => {
    // peer.value = new Peer(btoa(props.userId));
    // peer.value.on('open', function (id) {
    //     console.log('My peer ID is: ' + id);
    // });
    await initStream();
    initSelectedDevice();
    if (props.isCaller) startCall();
    else {
        console.log(localStream.value);
        props.peerCaller.answer(localStream.value);
        props.peerCaller.on("stream", remoteStream => {
            remoteVideoRef.value.srcObject = remoteStream;
            waitCall.value = false;
        })
    }
})
</script>
<template>
    <VueWinBox ref="winboxRef" :options="options" @onclose="onCloseWindow($event)">
        <div class="container-fluid content-area" style="height: 100%;">
            <div class="header-video row">
                <div class="col-2 d-flex justify-content-start align-items-center">
                    <div><i class="fas fa-dot-circle" style="color: red;"></i> 00:10:15</div>
                </div>
                <div class="col-10 d-flex align-items-center justify-content-end">
                    <div class="p-1">
                        <button type="button" class="button-icon">
                            <i class="far fa-comment-alt" style="color: white;"></i>
                        </button>
                    </div>
                    <div class="p-1">
                        <button type="button" class="button-icon" @click="showSideBar">
                            <i class="fas fa-ellipsis-h" style="color: white;"></i>
                        </button>
                    </div>
                    <div class="p-1 border-start border-light">
                        <button type="button" class="button-icon">
                            <i v-if="isVideoEnable" class="fas fa-video" style="color: white;"></i>
                            <i v-else class="fas fa-video-slash" style="color: white;"></i>
                        </button>
                    </div>
                    <div class="p-1">
                        <button type="button" class="button-icon">
                            <i v-if="isAudioEnable" class="fas fa-microphone" style="color: white;"></i>
                            <i v-else class="fas fa-microphone-slash" style="color: white;"></i>
                        </button>
                    </div>
                    <div class="p-1">
                        <button @click="onCloseWindow('')" type="button" class="btn btn-danger"><i
                                class="fas fa-phone fa-rotate-90"></i>&nbsp; Rời
                            khỏi</button>
                    </div>
                    <div class="icon-button">
                    </div>
                </div>
            </div>
            <div class="body-video row" style="padding: 0 !important; overflow: hidden;">
                <div class="stream-area" id="stream-area">
                    <video id="remoteVideo" ref="remoteVideoRef" class="remote-video video-container" autoplay
                        playsinline></video>
                    <div v-if="waitCall" class="caption d-flex justify-content-center align-items-center">
                        <img :class="{'call-animation': waitCall}" width="100" height="100" style="border-radius: 50%;"
                            src="https://www.w3schools.com/howto/img_avatar.png" alt="">
                    </div>
                    <video v-show="localStream && isVideoEnable" class="local-video" ref="localVideoRef" autoplay muted
                        playsinline></video>
                </div>
                <div class="sidebar-area" id="sidebar-area">
                    <a href="javascript:void(0)" class="closebtn" @click="closeSideBar">X</a>
                </div>
                <div class="mobile-control row">
                    <div class="col-12 d-flex align-items-center justify-content-end">
                        <div class="p-1">
                            <button type="button" class="button-icon" @click="showSideBar">
                                <i class="fas fa-ellipsis-h" style="color: white;"></i>
                            </button>
                        </div>
                        <div class="p-1 border-start border-light">
                            <button type="button" class="button-icon">
                                <i v-if="isVideoEnable" class="fas fa-video" style="color: white;"></i>
                                <i v-else class="fas fa-video-slash" style="color: white;"></i>
                            </button>
                        </div>
                        <div class="p-1">
                            <button type="button" class="button-icon">
                                <i v-if="isAudioEnable" class="fas fa-microphone" style="color: white;"></i>
                                <i v-else class="fas fa-microphone-slash" style="color: white;"></i>
                            </button>
                        </div>
                        <div class="p-1">
                            <button @click="onCloseWindow('')" type="button" class="btn btn-danger"><i
                                    class="fas fa-phone fa-rotate-90"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </VueWinBox>
</template>
<style>
.wb-body {
    overflow: hidden !important;
    container-type: inline-size;
    container-name: winbox;
}
.winbox {
    z-index: 10000 !important;
}

.wb-header {
    background-color: #16a085 !important;
    text-align: center !important;
}
</style>
<style scoped>


/* @import '../../node_modules/winbox/dist/css/winbox.min.css'; */

.header-video {
    /* border-bottom: 1px solid white; */
    height: 60px;
    background-color: rgb(29, 24, 24);
    color: white;
    box-shadow: 0 4px 2px -2px gray;
}

.body-video {
    height: calc(100% - 60px);
}
.closebtn {
    text-decoration: none;
    color: white;
    font-size: 15px;
    font-weight: bold;
}
.stream-area {
    width: 100%;
    height: 100%;
    padding: 0 !important;
    overflow: hidden;
    position: relative;
}

.stream-area-menu-open {
    width: calc(100% - 240px);
}

.sidebar-area {
    /* height: fit-content(100%); */
    width: 0px;
    display: none;
    background-color: rgb(29, 24, 24) !important;
    /* border-top: 1px solid white; */
    position: absolute;
    right: 0;
    padding: 0 !important;
}

.sidebar-area-open {
    width: 240px !important;
    display: block !important;
    height: 100%;
}

.button-icon {
    border: none;
    padding: 12px 16px;
    background-color: transparent;
}
.btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.btn-danger {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
}
.remote-video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    position: absolute;
    z-index: 10001;
    /* aspect-ratio: 16/9; */
}

.stream-area .caption {
    z-index: 10010;
    background-color: rgb(46, 45, 45);
    position: relative;
    height: 100%;
    width: 100%;
}

.content-area {
    margin-right: calc(var(--bs-gutter-x)/ -2);
    margin-left: calc(var(--bs-gutter-x)/ -2);
}

.video-container {
    background-color: black;
}
@keyframes call {
    15% {
        box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.5);
    }
    25% {
        box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.5),
                    0 0 0 16px rgba(255, 255, 255, 0.3);
    }
    30% {
        box-shadow: 0 0 0 12px rgba(255, 255, 255, 0.5),
                    0 0 0 24px rgba(255, 255, 255, 0.3);
    }
}
.call-animation{
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: solid 5px rgb(252, 241, 241);
    animation: call 1.5s ease infinite;
    color: aliceblue;
}

.local-video {
    max-width: 25%;
    object-fit: contain;
    object-position: center;
    border-top: 2px solid rgb(136, 131, 131);
    border-right: 2px solid rgb(136, 131, 131);
    border-left: 2px solid rgb(136, 131, 131);
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 10014;
}

.mobile-control {
    display: none;
}
@media only screen and (max-width: 630px) {
    .mobile-control {
        background-color: rgb(61, 61, 61);
        border-radius: 5px;
        display: block !important;
        position: absolute;
        bottom: 90px;
        margin: auto;
        height: 50px;
        z-index: 10015;
    }

    .body-video {
        height: 100% !important;
        position: relative;
    }

    .header-video {
        display: none;
    }
}
</style>