# vue-clipboard2

An simple vuejs 2 binding for clipboard.js

## Usage

```html
<template id="temp">
  <div>
    <input type="text" v-model="message">
    <button v-clipboard:copy="message">Copy</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello, World'
    }
  }
}
</script>
```
