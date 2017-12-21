<template>
  <div>
    <div id='app1'>
      <h1>{{ msg_01 }}</h1>
    </div>
    <hr />
    <div id='app2'>
      <router-link to="/">Go to /</router-link>
    </div>
    <hr />
    <div id='app3'>
      <p v-bind:title="msg_02">hover me</p>
    </div>
    <hr />
    <div id='app4'>
      <p v-if="seen">Now you see me</p>
    </div>
    <hr />
    <div id='app5'>
      <ol>
        <li v-for="todo in todos">
          {{ todo.text }}
        </li>
      </ol>
    </div>
    <hr />
    <div id='app6'>
      <p>{{ msg_06 }}</p>
      <button v-on:click="reverseMessage">Reverse Message</button>
    </div>
    <hr />
    <div id='app7'>
      <p>{{ msg_07 }}</p>
      <input v-model="msg_07">
    </div>
    <hr />
    <div id='app8'>
    </div>
    <hr />
    <div id='app9'>
    </div>
    <hr />
    <div id='app10'>
    </div>
    <hr />
    <div id='app11'>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg_01: 'TEST!!',
      msg_02: 'You loaded this page on ' + new Date().toLocaleString(),
      seen: true,
      todos: [
        { text: 'todo 1' },
        { text: 'todo 2' },
        { text: 'todo 3' },
        { text: 'todo 4' }
      ],
      msg_06: 'abcdefg',
      msg_07: 'edit me'
    }
  },
  methods: {
    reverseMessage: function () {
      console.log(this)
      this.msg_06 = this.msg_06.split('').reverse().join('')
    }
  }
}
</script>

<style scoped>
</style>
