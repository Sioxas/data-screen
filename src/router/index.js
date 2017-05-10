import Vue from 'vue'
import Router from 'vue-router'

import MachineDetail from '@/views/machine-detail'
import BaseInfo from '@/views/machine-detail/base-info'
import SpindleInfo from '@/views/machine-detail/spindle-info'
import AlarmInfo from '@/views/machine-detail/alarm-info'

import MachineHistory from '@/views/machine-history'
import WorkStatus from '@/views/machine-history/work-status'
import Spindle from '@/views/machine-history/spindle'
import ProductRecord from '@/views/machine-history/product-record'

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
    },
    {
        path:'/history',
        name:'MachineHistory',
        component:MachineHistory,
        children:[
            {
                path:'/',
                redirect:'status'
            },
            {
                path:'status',
                component:WorkStatus
            },
            {
                path:'spindle',
                component:Spindle
            },
            {
                path:'product',
                component:ProductRecord
            }
        ]
    }
  ]
})
