declare module 'vue-clipboard2' {
  import Vue, { PluginFunction, WatchOptions } from 'vue'
  module "vue/types/vue" {
    interface Vue {
      $clipboardConfig: {
        autoSetContainer: boolean,
        appendToBody: boolean
      }
      $copyText(text: string, container?: object | HTMLElement): Promise<{
        action: string,
        text: string,
        trigger: String | HTMLElement | HTMLCollection | NodeList,
        clearSelection: () => void
      }>
    }
  }

  class VueClipboard {
    static install: PluginFunction<never>
    static config: {
      autoSetContainer: boolean
      appendToBody: boolean
    }
  }
  export default VueClipboard
}
