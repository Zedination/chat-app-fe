import { defineStore, acceptHMRUpdate } from 'pinia'

export const authenStore = defineStore({
    id: 'authen_store',
    state: () => ({
        isLoginPage: true,
        userId: '',
        userInfo: {}
    }),
    getters: {
        getUserInfo: state => state.userInfo
    },
    // actions: {
    //     setIsLoginPage(isLoginPage) {
    //         this.isLoginPage = isLoginPage;
    //     }
    // }
})