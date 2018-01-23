import Vue from 'vue'
import Router from 'vue-router'
import VotingList from '@/components/VotingList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: VotingList
    }
  ]
})
