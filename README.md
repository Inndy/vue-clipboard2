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
      v-clipboard:success="onCopy"
      v-clipboard:error="onError">Copy!</button>
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
      alert('You just copied: ' + e.text)
    },
    onError: function (e) {
      alert('Failed to copy texts')
    }
  }
})
</script>
```

## I want to copy texts without a specific button!

Yes, you can do it by using our new method: `this.$copyText`. see [sample2](sample2.html).

Modern browser have some limiation like that you can't use `window.open` without a user iteraction.
So there's a same restriction on copy things! Test it before you use it. Make sure you are not
using this method inside any async method.

Use it before reading [this issue](https://github.com/zenorocha/clipboard.js/issues/218) and
[this page](https://github.com/zenorocha/clipboard.js/wiki/Known-Limitations).

### Contribution

PRs welcome, and issues aswell! If you want any feature that we don't have currently, please create a issue for feature request.

### License

[MIT License](LICENSE)
