<template>
  <div>
    <div class="voter-wrap">
      <h1>Voters</h1>
      <ul class="voter-list">
        <li class="voter-list-item" v-for="voter in voters" :key="voter.id">
          <div class="voter-list-item-wrap">
            <p>{{ voter.name }}</p>
            <p>{{ voter.email }}</p>
            <p>
              <button class="red"
                @click.prevent="vote(voter.id)"
                :data-key="voter.id">
                  Vote
              </button>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="voter-wrap">
      <h1>Voted</h1>
      <ul class="voter-list">
        <li class="voter-list-item" v-for="voter in voted" :key="voter.id">
          <div class="voter-list-item-wrap">
            <p>{{ voter.name }}</p>
            <p>{{ voter.email }}</p>
            <p><button class="red">Remove</button></p>
          </div>
        </li>
      </ul>
    </div>
    <div class="voter-wrap voter-wrap-last">
      <h1>Total votes</h1>
      <p>Number of voters: {{ getVoters.length }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      message: '',
      voters: this.$store.state.voters,
      voted: this.$store.state.voted
    }
  },
  computed: mapGetters([
    'getVoters'
  ]),
  methods: mapActions({
    increment: 'increment',
    vote (event, id) {
      this.$store.dispatch('vote', id)
    }
  })
}
</script>

<style>
.voter-wrap {
  float: left;
  margin-right: 20px;
  border: 1px solid #ccc;
  width: 300px;
  min-height: 300px;
}
.voter-list-item {
  border: 1px solid #ccc;
  width: 250px;
  margin: 0 auto;
}
.voter-wrap-last {
  min-height: 80px;
}
ul {
  list-style-type: none;
  padding-left: 0;
}
.red {
  background: red;
}
</style>
