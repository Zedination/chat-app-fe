import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import LoadScript from "vue-plugin-load-script";
import { createPinia } from 'pinia'
const app = createApp(App)

app.use(router)
app.use(LoadScript)
app.use(createPinia())

app.mount('#app')
