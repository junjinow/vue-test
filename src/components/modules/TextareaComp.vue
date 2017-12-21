<template>
  <div>
    <p class="error">{{error}}</p>
    <textarea></textarea>
  </div>
</template>

<script>
export default {
  name: 'TextareaComp',
  data () {
    return {
      error: '入力は必須です'
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
