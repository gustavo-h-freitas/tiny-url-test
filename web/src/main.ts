import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ClickOutside from './directives/ClickOutside'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.directive('click-outside', ClickOutside)

app.use(createPinia())
app.use(router)

app.mount('#app')
