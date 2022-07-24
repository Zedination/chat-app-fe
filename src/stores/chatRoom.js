import { defineStore, acceptHMRUpdate } from 'pinia'

export const chatRoomStore = defineStore({
    id: 'chat_room_store',
    state: () => ({
        rooms: [],
        selected: '',
        testObject: {a: 1, b: 2},
        
    }),
    getters: {
        getMessagesOfSelectedRoom: state => {
            let selectedRoom = state.rooms.find(r => r.id === state.selected);
            if (selectedRoom && selectedRoom.messages) return selectedRoom.messages;
            else return []
        }, 
        getConversationOfSelectedRoom: state => {
            let selectedRoom = state.rooms.find(r => r.id === state.selected);
            if (selectedRoom) {
                if (selectedRoom.group) {
                    return {
                        id: selectedRoom.id,
                        name: selectedRoom.name,
                        avatar: selectedRoom.avatar,
                        members: selectedRoom.members,
                        description: selectedRoom.description,
                        isGroup: true
                    }
                } else {
                    return {
                        id: selectedRoom.id,
                        name: selectedRoom.conversationInfo.name,
                        avatar: selectedRoom.conversationInfo.avatar,
                        email: selectedRoom.conversationInfo.email,
                        address: selectedRoom.conversationInfo.address,
                        members: selectedRoom.members,
                        description: selectedRoom.conversationInfo.description,
                        isGroup: false
                    }
                }
            } else {
                return {};
            }
        },
        getListRoomIds: state => {
            return state.rooms.map(r => r.id);
        }

    },
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
        updateMessagesOfRoom(roomId, messages) {
            let room = this.rooms.find(r => r.id === roomId);
            room.messages = room.messages ? messages.concat(room.messages) : messages;
        },
        pushMessage(roomId, message) {
            let room = this.rooms.find(r => r.id === roomId);
            room.messages.push(message);
            room.lastMessage = message;
        }
    }
})