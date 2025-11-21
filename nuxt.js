import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@todovue/tv-label',
    configKey: 'tvLabel'
  },
  setup(_options, nuxt) {
    const cssPath = '@todovue/tv-label/style.css';
    if (!nuxt.options.css.includes(cssPath)) {
      nuxt.options.css.push(cssPath);
    }
  }
})
