import { defineStore, acceptHMRUpdate } from 'pinia'

export const authenStore = defineStore({
    id: 'authen_store',
    state: () => ({
        isLoginPage: true
    }),
    // getters: {
    //     isLoginPage: state => state.isLoginPage
    // },
    // actions: {
    //     setIsLoginPage(isLoginPage) {
    //         this.isLoginPage = isLoginPage;
    //     }
    // }
})