import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'
import createRouter from './router.js'
import App from './App.vue'

import 'bootstrap'
import './styles/app.scss'

const router = createRouter(createWebHistory())
createApp(App)
    .use(router)
    .mount('#app')
