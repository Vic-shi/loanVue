import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/Index/index'
import Loan from '@/view/Index/Loan'
import mine from '@/view/Index/mine'
import elitesLoan from '@/view/loan/elitesLoan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/Loan',
      name: 'Loan',
      component: Loan
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/elitesLoan',
      name: 'elitesLoan',
      component: elitesLoan
    }
  ]
})
