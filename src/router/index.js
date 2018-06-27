import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/Index/index'
import Loan from '@/view/Index/Loan'
import mine from '@/view/Index/mine'
import elitesLoan from '@/view/loan/elitesLoan'
import apply from '@/view/loan/apply'
import notice from '@/view/notice/notice'
import progress from '@/view/loan/progress'
import detailed from '@/view/loan/detailed'
import record from '@/view/loan/record'
import loanDetails from '@/view/loan/loanDetails'
import repayment from '@/view/loan/repayment'
import account from '@/view/user/account'
import depository from '@/view/user/depository'
import openAccount from '@/view/user/openAccount'
import personal from '@/view/loan/personal'
import success from '@/view/notice/success'
import loanApplication from '@/view/notice/loanApplication'
import aboutUs from '@/view/Index/aboutUs'
import common from '@/view/Index/common'
import setup from '@/view/Index/setup'
import suggest from '@/view/Index/suggest'

import forgetPassword1 from '@/view/Index/forgetPassword1'
import forgetPassword2 from '@/view/Index/forgetPassword2'
import forgetPassword3 from '@/view/Index/forgetPassword3'
import register1 from '@/view/Index/register1'
import register2 from '@/view/Index/register2'
import register3 from '@/view/Index/register3'
import login from '@/view/Index/login'

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
    },
    {
      path: '/apply',
      name: 'apply',
      component: apply
    },
    {
      path: '/notice',
      name: 'notice',
      component: notice
    },
    {
      path: '/progress',
      name: 'progress',
      component: progress
    },
    {
      path: '/detailed',
      name: 'detailed',
      component: detailed
    },
    {
      path: '/record',
      name: 'record',
      component: record
    },
    {
      path: '/loanDetails',
      name: 'loanDetails',
      component: loanDetails
    },
    {
      path: '/repayment',
      name: 'repayment',
      component: repayment
    },
    {
      path: '/account',
      name: 'account',
      component: account
    },
    {
      path: '/depository',
      name: 'depository',
      component: depository
    },
    {
      path: '/openAccount',
      name: 'openAccount',
      component: openAccount
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/success',
      name: 'success',
      component: success
    },
    {
      path: '/loanApplication',
      name: 'loanApplication',
      component: loanApplication
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/common',
      name: 'common',
      component: common
    },
    {
      path: '/setup',
      name: 'setup',
      component: setup
    },
    {
      path: '/suggest',
      name: 'suggest',
      component: suggest
    },
    {
      path: '/forgetPassword1',
      name: 'forgetPassword1',
      component: forgetPassword1
    },
    {
      path: '/forgetPassword2',
      name: 'forgetPassword2',
      component: forgetPassword2
    },
    {
      path: '/forgetPassword3',
      name: 'forgetPassword3',
      component: forgetPassword3
    },
    {
      path: '/register1',
      name: 'register1',
      component: register1
    },
    {
      path: '/register2',
      name: 'register2',
      component: register2
    },
    {
      path: '/register3',
      name: 'register3',
      component: register3
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
