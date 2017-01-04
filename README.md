# vue-clipboard2

An simple vuejs 2 binding for clipboard.js

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
