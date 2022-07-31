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
    isShow: Boolean,
    videoEnable: Boolean,
    audioEnable: Boolean
})
const authen = authenStore();
let audioInputDevices = ref([]);
let audioOutputDevices = ref([]);
let cameraDevices = ref([]);
let selectedAudioInput = ref('');
let selectedAudioOutput = ref('');
let selectedCamera = ref('');
const emit = defineEmits(['onClose'])
const onCloseWindow = (force) => {
    // if (props.isShow) {
    //     if (confirm("Bạn có muốn kết thúc cuộc gọi này không?")) {
    //         emit("onClose");
    //     }
    // }
    stopStream();
    emit("onClose");
    console.log(force);
}
let localStream = ref(null);
let isConfirming = ref(true);
const winboxRef = ref();
const localVideoRef = ref();
const localVideo2Ref = ref();
let localVideo2 = ref();
const remoteVideoRef = ref();

async function getLocalStream() {
    try {
        let constraints = {
            audio: { deviceId: selectedAudioInput.value ? { exact: selectedAudioInput.value } : undefined },
            video: { deviceId: selectedCamera.value ? { exact: selectedCamera.value } : undefined }
        }
        // return await navigator.mediaDevices.getUserMedia(constraints.value);
        return await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        });
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
function gotStream2(stream) {
    localVideo2Ref.value.srcObject = stream;
    localVideo2.value = stream;
}
function closeWinboxConfirm() {
    winboxRef.value.winbox.close();
}

function startCall() {
    isConfirming.value = false;
    localVideo2Ref.value.srcObject = localStream.value;
    stopStream();
    winboxRef.value.winbox.setTitle("Đang thực hiện cuộc gọi!");
    let constraints = {
        audio: { deviceId: selectedAudioInput.value ? { exact: selectedAudioInput.value } : undefined },
        video: { deviceId: selectedCamera.value ? { exact: selectedCamera.value } : undefined }
    }
    navigator.mediaDevices.getUserMedia(constraints).then(stream => {
        gotStream2(stream);
        window.peer.call('zedination-234567891', localVideo2.value).on('stream', function (stream) {
            remoteVideoRef.value.srcObject = stream;
        });
    }).catch(handleError);
}
onMounted(async () => {
    // peer.value = new Peer(btoa(props.userId));
    // peer.value.on('open', function (id) {
    //     console.log('My peer ID is: ' + id);
    // });
    await getDeviceInfor();
    // init media stream in first time
    selectedAudioInput.value = audioInputDevices.value.length === 0 ? undefined : audioInputDevices.value[0].id;
    selectedAudioOutput.value = audioOutputDevices.value.length === 0 ? undefined : audioOutputDevices.value[0].id;
    selectedCamera.value = cameraDevices.value.length === 0 ? undefined : cameraDevices.value[0].id;
    localStream.value = await getLocalStream();
    localVideoRef.value.srcObject = localStream.value;
})
</script>
<template>
    <VueWinBox ref="winboxRef" :options="options" @onclose="onCloseWindow($event)">
        <div class="container-fluid vertical-center" v-show="isConfirming">
            <div class="row">
                <div class="col-md-8">
                    <h4 class="mb-3 mt-3" style="text-align: center;">Xem trước video</h4>
                    <video id="localVideo" ref="localVideoRef" class="preview-video video-container" autoplay muted
                        playsinline></video>
                </div>
                <div class="col-md-4">
                    <h4 class="mb-3 mt-3" style="text-align: center;">Cài đặt thiết bị</h4>
                    <label>Lựa chọn Camera</label>
                    <select @change="updateDeviceMedia($event, 'videoinput')" class="form-select form-select-sm mb-4"
                        aria-label=".form-select-sm example">
                        <option :selected="index === 0 ? true : null" v-for="(item, index) in cameraDevices"
                            :key="item.id" :value="item.id">{{ item.text }}</option>
                    </select>
                    <label>Lựa chọn Microphone</label>
                    <select @change="updateDeviceMedia($event, 'audioinput')" class="form-select form-select-sm mb-4"
                        aria-label=".form-select-sm example">
                        <option :selected="index === 0 ? true : null" v-for="(item, index) in audioInputDevices"
                            :key="item.id" :value="item.id">{{ item.text }}</option>
                    </select>
                    <label>Lựa chọn thiết bị xuất âm thanh</label>
                    <select class="form-select form-select-sm mb-4" aria-label=".form-select-sm example">
                        <option :selected="index === 0 ? true : null" v-for="(item, index) in audioOutputDevices"
                            :key="item.id" :value="item.id">{{ item.text }}</option>
                    </select>
                    <!-- <div class="d-flex justify-content-evenly">
                    <button type="button" class="btn bg--gray rounded-pill text-white"><i class="fal fa-phone"></i></button>
                    <button type="button" class="btn bg--gray rounded-pill text-white"><i class="fas fa-webcam"></i></button>
                    </div> -->
                    <div class="d-flex justify-content-evenly">

                        <a href="#" class="user-icon">
                            <i class="fas fa-microphone text--dark-100 font-size--18"></i>
                        </a>
                        <a href="#" class="user-icon">
                            <i class="fas fa-video text--dark-100 font-size--18"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="d-flex justify-content-evenly">
                    <button type="button" class="btn me-2 text-white bg--success rounded-pill" @click="startCall"><i
                            class="fas fa-phone"></i> &nbsp; Call</button>
                    <button type="button" @click="closeWinboxConfirm"
                        class="btn text-white bg--red rounded-pill">Cancel</button>
                </div>
            </div>
        </div>
        <div v-show="!isConfirming" style="width: 100%; height: 100%;">
            <video id="remoteVideo" ref="remoteVideoRef" class="preview-video-2 full-video video-container" autoplay
                muted playsinline></video>
            <video id="localVideo2" ref="localVideo2Ref" class="local-video-2 video-container" autoplay muted
                playsinline></video>
        </div>
    </VueWinBox>
</template>
<style>
/* @import '../../node_modules/winbox/dist/css/winbox.min.css'; */
.winbox {
    z-index: 99999 !important;
}

.wb-header {
    background-color: #16a085 !important;
}

.preview-video {
    object-fit: contain;
    object-position: center;
    width: 100%;
    aspect-ratio: 16/9;
}

.preview-video-2 {
    object-fit: contain;
    object-position: center;
    position: relative;
}

.full-video {
    width: 100%;
    height: 100%;
}

.local-video-2 {
    width: 20%;
    object-fit: contain;
    object-position: center;
    aspect-ratio: 16/9;
    border: 2px solid red;
    position: absolute;
    bottom: 0;
    right: 0;
}

.video-container {
    background-color: black;
}

.vertical-center {
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
</style>