import './assets/main.css'

import { createPinia } from 'pinia'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import router from './router';

import { createApp } from 'vue';
import  App  from './App.vue'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(VueSweetalert2);

app.mount('#app')

