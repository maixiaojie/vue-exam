import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/list/list'
import SList from '@/components/list/sList'
import newBank from '@/components/list/newBank'
import pageTeacher from '@/page/teacher/index'
import PageStudent from '@/page/student/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/t',
      name: 'pageTeacher',
      component: pageTeacher,
      children: [{
      	path: '/',
      	name: "List",
      	component: List
      },{
      	path: '/n',
      	name: "newBank",
      	component: newBank
      }]
    },
    {
      path: '/',
      name: 'PageStudent',
      component: PageStudent
    }
  ]
})
