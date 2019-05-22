import Vue from 'vue'
import App from './App'
import store from './store'
// 导入uniIcon图标
import uniIcon from "@/components/uni-icon/uni-icon.vue"
Vue.component("uni-icon", uniIcon)
// 导入全局样式
import "@/style/style.scss"
// 导入自定义头部
import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
Vue.component("uni-nav-bar", uniNavBar)
//List组件
import uniList from '@/components/uni-list/uni-list.vue'
import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
Vue.component("uni-list", uniList)
Vue.component("uni-list-item", uniListItem)
//左侧拉缩Menu
import uniDrawer from "@/components/uni-drawer/uni-drawer.vue"
Vue.component("uni-drawer", uniDrawer)
// 导入九宫格组件
import gridLayout from "@/components/grid-layout/grid-layout"
Vue.component("gridLayout", gridLayout)
//底部tabbar
import tabbar from "@/components/tabbar/tabbar"
Vue.component('tabbar', tabbar)
// 引用API文件
import apiserver from './service/apiserver.js'

// 将API方法绑定到全局
Vue.prototype.$apiserver = apiserver
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
app.$mount()
