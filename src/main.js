import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入静态资源
require('./assets/css/styleC.css')
import 'jquery'
// 引入组件
import App from './App'
import Case from './components/case/Case.vue'
import Designer from './components/designer/Designer.vue'
import Tribal from './components/tribal/Tribal.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'index', component: App},
  {path: '/case', name: 'case', component: Case},
  {path: '/designer', name: 'designer', component: Designer},
  {path: '/tribal', name: 'tribal', component: Tribal}
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
