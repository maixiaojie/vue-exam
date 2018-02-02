import Vue from 'vue'
// import Vue from "vue/dist/vue.js"
import App from './App'
import router from './router'
import Common from './utils/common'
Vue.use(Common)
Vue.config.productionTip = false
import Toast from '@/components/plugins/toast'
Vue.use(Toast)
//注册全局自定义指令 v-focus
Vue.directive('focus', {
	//当被绑定的元素插入到Dom中时
	update: function(el, {value}) {
		if(value) {
			el.focus()
		}
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
