// index.js
import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import School from '../views/School.vue'

const routes = [
    {
        path: '/',
        // name: 'ome',
        component: Home
    },
    {
        path: '/about',
        // name: 'about',
        component: About,
        // 异步加载方式，节约资源
        // component:()=>import('../views/About.vue')

        // 1、重定向默认显示嵌套的路由组件
        redirect:'/about/aboutChildOne',

        //二级路由 ，默认路由没有限制
        children:[
            {
                // 二级导航路径不要加
                path:'aboutChildOne',
                component:()=>import('../views/AboutChildOne.vue')
            },
            {
                path:'aboutChildTwo',
                component:()=>import('../views/AboutChildTwo.vue')
            }
        ]
    },
    {
        path: '/school',
        // component: School
        component:()=>import('../views/School.vue')
    },
    {
        path:'/news',
        component:()=>import('../views/News.vue')
    },
    {
        path:'/newsDetails/:name',
        component:()=>import('../views/NewsDetails.vue')
    },
    {
        path:'/nestedRouter',
        component:()=>import('../views/NestedRouter.vue')
    }
]
const router = createRouter({
    history:createWebHistory(),/* 先要vue-router引入，路径不带# ，需要后台配合使用*/
    // history: createWebHashHistory(),/* 路径上加了#号 */
    routes
})
export default router