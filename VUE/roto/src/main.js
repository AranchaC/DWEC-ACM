import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'

// app.mount('#app')
const app = createApp(App)

app.use(createPinia())
app.use(router)



