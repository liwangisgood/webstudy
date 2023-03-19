import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import axios from 'axios'
import querystring from 'querystring'
import querystringify from 'querystringify'/* 代替上面过时方法 */
import api from './api/index'


const app=createApp(App)
app.config.globalProperties.$axios=axios
app.config.globalProperties.$qs=querystringify
app.config.globalProperties.$api=api

app.mount('#app')
