import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// 导入router
import router from './router'

createApp(App).use(router).mount('#app')
