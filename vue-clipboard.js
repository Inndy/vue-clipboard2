var Clipboard = require('clipboard')

var VueClipboard = {
  install: function (Vue) {
    Vue.directive('clipboard', {
      bind: function (el, binding, vnode) {
        const clipboard = new Clipboard(el, {
          text: function () { return binding.value },
          action: function () { return binding.arg === 'cut' ? 'cut' : 'copy' }
        })
        el._v_clipboard = clipboard
      },
      update: function (el, binding) {
        el._v_clipboard.text = function () { return binding.value },
          el._v_clipboard.action = function () { return binding.arg === 'cut' ? 'cut' : 'copy' }
      },
      unbind: function (el, binding) {
        el._v_clipboard.destroy()
        delete el._v_clipboard
      }
    })
  }
}

if (typeof exports == "object") {
  module.exports = VueClipboard
} else if (typeof define == "function" && define.amd) {
  define([], function() {
    return VueClipboard
  })
} else if (window.Vue) {
  window.VueClipboard = VueClipboard
  Vue.use(VueClipboard)
}
