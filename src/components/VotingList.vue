<template>
  <div>
    <div class="voter-wrap">
      <h1>Voters</h1>
      <ul class="voter-list">
        <li class="voter-list-item" v-for="voter in voters" :key="voter.id">
          <div class="voter-list-item-wrap">
            <p>{{ voter.name }}</p>
            <p>{{ voter.email }}</p>
            <p><button class="red">Vote</button></p>
          </div>
        </li>
      </ul>
    </div>
    <div class="voter-wrap">
      <h1>Voted</h1>
      <ul class="voter-list">
        <li class="voter-list-item">
          <div class="voter-list-item-wrap">
            <p>Angelo Miranda</p>
            <p>email: angelo@mastercard.com</p>
            <p><button class="red">Remove</button></p>
          </div>
        </li>
      </ul>
    </div>
    <div class="voter-wrap voter-wrap-last">
      <h1>Total votes</h1>
      <p>Number of voters: 1</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      voters: []
    }
  },
  methods: {
  },
  mounted () {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => response.data)
      .then(data => {
        this.voters = data
      })
  }
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
