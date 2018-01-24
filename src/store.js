import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const voters = require('./voters')
const state = {
  voters: voters,
  voted: []
}

// This is sync
const mutations = {
  vote: (state, id) => {
    // Get the voter that voted
    const voter = state.voters.find(voter => {
      return voter.id === id
    })

    // Remove the voter that voted
    const index = state.voters.findIndex(voter => voter.id === id)
    if (index !== -1) state.voters.splice(index, 1)

    state.voted.push(voter)
  },
  removeVoter (state, voter) {
    // Add the removed voter back to the potential voter list
    state.voters.push(voter)
    // Remove the voted person
    const index = state.voted.findIndex(votee => votee.id === voter.id)
    if (index !== -1) state.voted.splice(index, 1)
  }
}

// Actions are async
const actions = {}

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
