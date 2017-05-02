import Vue from 'vue'
import Router from 'vue-router'
import MachineDetail from '@/views/machine-detail'
import BaseInfo from '@/views/machine-detail/base-info.vue'
import SpindleInfo from '@/views/machine-detail/spindle-info.vue'
import AlarmInfo from '@/views/machine-detail/alarm-info.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/detail',
      name: 'MachineDetail',
      component: MachineDetail,
      children:[
          {
              path:'/',
              redirect:'baseinfo'
          },
          {
              path:'baseinfo',
              component:BaseInfo
          },
          {
              path:'spindle',
              component:SpindleInfo
          },
          {
              path:'alarm',
              component:AlarmInfo
          }
      ]
    }
  ]
})
