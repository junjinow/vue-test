<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/">Go to HelloWorld</router-link>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: 'TEST!!'
    }
  }
}
</script>

<style scoped>
</style>
