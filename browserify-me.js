var VueClipboard = require('./vue-clipboard.js')

global.VueClipboard = VueClipboard

window.Vue && window.Vue.use && window.Vue.use(VueClipboard)
