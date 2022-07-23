import { defineStore, acceptHMRUpdate } from 'pinia'
import SockJS from "sockjs-client/dist/sockjs"
import Stomp from "webstomp-client";

export const stompStore = defineStore({
    id: 'stomp_store',
    state: () => ({
        stompClient: null,
        connected: false
    }),
    getters: {
        getStompClient: state => {
            return state.stompClient
        }
    },
    actions: {
        connect(callback) {
            this.stompClient = Stomp.over(new SockJS(`${import.meta.env.VITE_ROOT_API}/chat-app`))
            this.stompClient.connect(
                {},
                frame => {
                    this.connected = true;
                    console.log("connected!");
                    console.log(frame);
                    callback();
                },
                error => {
                    console.log(error);
                    this.connected = false;
                }
            );
        },
        disconnect() {
            if (this.stompClient) {
                this.stompClient.disconnect();
            }
        }
    }
})