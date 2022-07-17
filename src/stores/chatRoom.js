import { defineStore, acceptHMRUpdate } from 'pinia'

export const chatRoomStore = defineStore({
    id: 'chat_room_store',
    state: () => ({
        rooms: [],
        selected: ''
        
    }), 
    actions: {
        formatDate(str) {
            let date = new Date(str);
            let dateNow = new Date();
            if (date.getDate() === dateNow.getDate() && date.getMonth() === dateNow.getMonth() && date.getFullYear() === dateNow.getFullYear()) {
                return "Hôm nay";
            }
            return date.toLocaleDateString("vi-VN");
        },
        formatTime(str) {
            return new Date(str).toLocaleTimeString("vi-VN");
        },
        getRoomById(roomId) {
            return this.rooms.find(x => x.id === roomId);
        }, 
    }
})