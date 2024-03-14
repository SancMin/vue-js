/*
 * @Author: 李祖成 lzcnice2021@163.com
 * @Date: 2024-03-14 21:43:02
 * @LastEditors: 李祖成 lzcnice2021@163.com
 * @LastEditTime: 2024-03-14 21:48:35
 * @FilePath: \vue\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
 */
// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue' // 示例导入一个Home组件

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // 其他路由...
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router