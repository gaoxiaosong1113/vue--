import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入静态资源
require('./assets/css/styleC.css')
import 'jquery'
// 引入组件
import App from './App'
import Hello from './components/Hello.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: App},
  {path: '/a', component: Hello}
]
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能

var routerApp = new Vue({
  router
}).$mount('#app')

export default routerApp
