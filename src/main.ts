import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import './assets/main.css'
import './assets/styles/main.css'

import { createApp } from 'vue'
import i18n from './i18n'
import App from './App.vue'
import router from './router'

const app = createApp(App)

i18n.setup()
app.use(i18n.vueI18n)

app.use(router)

app.mount('#app')
