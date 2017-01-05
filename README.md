# vue-clipboard2

An simple vuejs 2 binding for clipboard.js

## Install

`npm install --save vue-clipboard2` or use `dist/vue-clipboard.js` without webpack

## Usage

```html
<div id="app"></div>

<template id="t">
  <div class="container">
	<input type="text" v-model="message">
	<button type="button" v-clipboard:copy="message">Copy!</button>
  </div>
</template>

<script>
new Vue({
  el: '#app',
  template: '#t',
  data: function () {
    return {
      message: 'Copy These Text'
    }
  }
})
</script>
```

### License

[MIT License](LICENSE)
