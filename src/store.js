import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const voters = require('./voters')
const state = {
  voters: voters,
  voted: []
}

const mutations = {
  vote: (state, id) => {
    // Get the voter that voted
    const voter = state.voters.find(voter => {
      return voter.id === id
    })

    // Remove the voter that voted
    const index = state.voters.findIndex(o => o.id === id)
    if (index !== -1) state.voters.splice(index, 1)

    state.voted.push(voter)
  }
}

const actions = {
  vote: ({ commit }, id) => {
    commit('vote', id)
  }
}

const getters = {
  getVoters: state => state.voters
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
