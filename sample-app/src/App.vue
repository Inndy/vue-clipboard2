<template>
  <div id="app">
    <h1>Clipboard.js binding for Vue2</h1>
    <div>
      <input type="text" v-model="message">

      <button v-clipboard:copy="message"
              v-clipboard:success="onCopied">Copy Text</button>

      <a v-clipboard:copy="message"
         v-clipboard:success="onCopied"
         href="#">Copy Text</a>
    </div>
    <div>
      <p>{{status}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      message: 'The text to copy',
      status: 'Ready...'
    }
  },
  methods: {
    onCopied (e) {
      this.status = `You just copied text: "${e.text}"`
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  color: blue;
}
</style>
