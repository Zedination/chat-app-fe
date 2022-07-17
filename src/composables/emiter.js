import { getCurrentInstance } from 'vue'

export default function appEmitter() {
    const internalInstance = getCurrentInstance(); 
    const emitter = internalInstance.appContext.config.globalProperties.emitter;
    return emitter;
}