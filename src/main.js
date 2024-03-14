/*
 * @Author: 李祖成 lzcnice2021@163.com
 * @Date: 2024-03-14 21:34:52
 * @LastEditors: 李祖成 lzcnice2021@163.com
 * @LastEditTime: 2024-03-14 21:50:34
 * @FilePath: \vue\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import 'reset-css'
import App from './App.vue'
import router from './router' // 引入路由配置

const app = createApp(App)

// 使用路由
app.use(router)

app.mount('#app')
