import Vue from 'vue'
import Router from 'vue-router'

import Form from '@/components/Form'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Form',
      component: Form
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
