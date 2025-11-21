import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@todovue/tv-label',
    configKey: 'tvLabel'
  },
  setup(_options, nuxt) {
    nuxt.options.css.push('@todovue/tv-label/style.css')
  }
})
