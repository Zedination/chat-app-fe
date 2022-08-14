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
    height: "70%",
    index: 10000
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
const connSender = ref();

const isShowBottomControl = ref(false);
const isClickShowBottomControl = ref(false);

const onCloseWindow = (force) => {
    if (force !== null) connSender.value.send("hangup");
    stopStream();
    emit("onClose");
}

const onResizeWindow = event => {
    if (event.width <= 630) {
        isShowBottomControl.value = isClickShowBottomControl.value = true;
    } else {
        isShowBottomControl.value = isClickShowBottomControl.value = false;
    }
}

const toggleAudio = () => {
    isAudioEnable.value = !isAudioEnable.value;
}

const toggleVideo = () => {
    isVideoEnable.value = !isVideoEnable.value;
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
function consoleLocalStream() {
    console.log(localStream.value);
    localStream.value.getTracks().forEach(track => {
        console.log(track);
    })
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

function handerConnectionPeerJs() {
    console.log(props.peerCaller);
    if (props.isCaller) {
        connSender.value = window.peer.connect(props.userId);
    } else {
        connSender.value = window.peer.connect(props.peerCaller.peer);
    }
    window.peer.on("connection", (conn) => {
        conn.on("data", (data) => {
            if (data === 'hangup') {
                onCloseWindow(null);
            }
        });
        conn.on("open", () => {
            conn.send("hello!");
        });
    });
}

function handleCall() {
    console.log(localStream.value);
    props.peerCaller.answer(localStream.value);
    props.peerCaller.on("stream", remoteStream => {
        remoteVideoRef.value.srcObject = remoteStream;
        waitCall.value = false;
    })
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
    
    if (isMobile()) winboxRef.value.winbox.fullscreen();
    await initStream();
    initSelectedDevice();
    handerConnectionPeerJs();
    if (props.isCaller) startCall();
    else {
        handleCall();
    }
    consoleLocalStream();
})
/**
 * Check device is mobile by user agent
 */
function isMobile() {
    var check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}
const toggleBottomControl  = () => {
    isClickShowBottomControl.value = !isClickShowBottomControl.value;
}
const onDragLocalVideo = event => {
    console.log(event);
}
</script>
<template>
    <VueWinBox ref="winboxRef" :options="options" @onclose="onCloseWindow($event)" @onresize="onResizeWindow($event)">
        <div class="container-fluid content-area" style="height: 100%;" @click="toggleBottomControl">
            <div v-show="!isShowBottomControl" class="header-video row">
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
                        <button v-if="isVideoEnable" type="button" class="button-icon" @click="toggleVideo">
                            <i class="fas fa-video" style="color: white;"></i>
                        </button>
                        <button v-else type="button" class="button-icon" @click="toggleVideo">
                            <i class="fas fa-video-slash" style="color: white;"></i>
                        </button>
                    </div>
                    <div class="p-1">
                        <button v-if="isAudioEnable" type="button" class="button-icon" @click="toggleAudio">
                            <i class="fas fa-microphone" style="color: white;"></i>
                        </button>
                        <button v-else type="button" class="button-icon" @click="toggleAudio">
                            <i class="fas fa-microphone-slash" style="color: white;"></i>
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
            <div class="body-video row" :class="{'body-video-mobile': isShowBottomControl}" style="padding: 0 !important; overflow: hidden;">
                <div class="stream-area" id="stream-area">
                    <video id="remoteVideo" ref="remoteVideoRef" class="remote-video video-container" autoplay
                        playsinline style="pointer-events: none;"></video>
                    <div v-if="waitCall" class="caption d-flex justify-content-center align-items-center">
                        <img :class="{'call-animation': waitCall}" width="100" height="100" style="border-radius: 50%;"
                            src="https://www.w3schools.com/howto/img_avatar.png" alt="">
                    </div>
                    <video v-show="localStream && isVideoEnable" class="local-video" :class="{'local-video-mobile': isShowBottomControl}" ref="localVideoRef" autoplay muted
                        playsinline style="pointer-events: none;"></video>
                </div>
                <div class="sidebar-area" id="sidebar-area">
                    <a href="javascript:void(0)" class="closebtn" @click="closeSideBar">X</a>
                </div>
                <div :class="{'mobile-control': isShowBottomControl && isClickShowBottomControl}" style="display: none;">
                    <div class="d-flex align-items-center justify-content-center">
                        <div style="display: inline-block;">
                            <button type="button" class="button-icon">
                                <i class="fas fa-ellipsis-h" style="color: white;"></i>
                            </button>
                        </div>
                        <div style="display: inline-block;">
                            <button v-if="isVideoEnable" type="button" class="button-icon" @click.stop="toggleVideo">
                                <i class="fas fa-video" style="color: white;"></i>
                            </button>
                            <button v-else type="button" class="button-icon" @click.stop="toggleVideo">
                                <i class="fas fa-video-slash" style="color: white;"></i>
                            </button>
                        </div>
                        <div style="display: inline-block;">
                            <button v-if="isAudioEnable" type="button" class="button-icon" @click.stop="toggleAudio">
                                <i class="fas fa-microphone" style="color: white;"></i>
                            </button>
                            <button v-else type="button" class="button-icon" @click.stop="toggleAudio">
                                <i class="fas fa-microphone-slash" style="color: white;"></i>
                            </button>
                        </div>
                        <div style="display: inline-block;">
                            <button @click.stop="onCloseWindow('')" type="button" class="btn btn-danger"><i
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
/* .winbox {
    z-index: 10000 !important;
} */

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
    border-bottom: 2px solid rgb(136, 131, 131);
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 10014;
}

.mobile-control {
    background-color: rgb(61, 61, 61);
    border-radius: 5px;
    display: block !important;
    position: absolute;
    bottom: 90px;
    margin: auto;
    height: 48.5px;
    width: 193px;
    left: calc((100% - 193px)/2);
    z-index: 10015;
    padding-left: 4px !important;
    padding-right: 4px !important;
}

.local-video-mobile {
    border-bottom: 2px solid rgb(136, 131, 131);
    top: 20px !important;
    left: 20px !important;
}

.body-video-mobile {
    height: 100% !important;
    position: relative;
}

/* @media only screen and (max-width: 630px) {
    .mobile-control {
        background-color: rgb(61, 61, 61);
        border-radius: 5px;
        display: block !important;
        position: absolute;
        bottom: 90px;
        margin: auto;
        height: 48.5px;
        width: 193px;
        left: calc((100% - 193px)/2);
        z-index: 10015;
        padding-left: 4px !important;
        padding-right: 4px !important;
    }

    .body-video {
        height: 100% !important;
        position: relative;
    }

    .header-video {
        display: none;
    }
} */
</style>