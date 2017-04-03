# vue-clipboard2

A simple vuejs 2 binding for clipboard.js

## Install

`npm install --save vue-clipboard2` or use `dist/vue-clipboard.min.js` without webpack

## Usage

For vue-cli user:

```javascript
import Vue
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)
```

For standalone usage:

```html
<script src="vue.min.js"></script>
<!-- must place this line after vue.js -->
<script src="dist/vue-clipboard.min.js"></script>
```

## Sample

```html
<div id="app"></div>

<template id="t">
  <div class="container">
    <input type="text" v-model="message">
    <button type="button"
      v-clipboard:copy="message"
      v-clipboard:success="onCopy">Copy!</button>
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
  },
  methods: {
    onCopy: function (e) {
      alert("You just copied: " + e.text)
    }
  }
})
</script>
```

### License

[MIT License](LICENSE)
