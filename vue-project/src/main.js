import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import 'swiper/css'
import axios from 'axios'
import querystringify from 'querystringify'/* 代替上面过时方法 */
import api from './api/index'
import router from './router/index'
import store from './store/index'
// import {mapState} from 'vuex'

const app=createApp(App).use(router).use(store)
app.config.globalProperties.$axios=axios
app.config.globalProperties.$qs=querystringify
app.config.globalProperties.$api=api
// app.config.globalProperties.$mapState=mapState

app.mount('#app')
