import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import LoadScript from "vue-plugin-load-script";
import { createPinia } from 'pinia'
import mitt from 'mitt';
import { jwtInterceptor } from './interceptors/jwtInterceptor';
import { httpException, loadingIndicator } from './interceptors/http.interceptor';
import Shimmer from 'vue3-shimmer';
// var global = window;

const app = createApp(App)
const emitter = mitt();
app.use(router)
app.use(LoadScript)
app.use(createPinia())
app.use(jwtInterceptor())
app.use(httpException())
app.use(loadingIndicator())
app.config.globalProperties.emitter = emitter;

app.mount('#app')
